class Region < ApplicationRecord
  belongs_to :world
  has_many :entrances, class_name: 'Path', foreign_key: 'destination_id'
  has_many :exits, class_name: 'Path', foreign_key: 'source_id'

  # Format: [ {text: "some text, including a [1link] or [3two]",
  #  links_to: [1,3],
  #  effects: { some_type_id: :some_specific_id OR "true" }
  # ]
  serialize :book, Array

  # Format: {some_activity_name: [:some_modifier, :some_other_modifer]} ]
  serialize :activity_modifiers, Hash

  def modified?(name, modifier)
    activity_modifiers[name].present? && activity_modifiers[name].include?(modifier)
  end

  def activities
    activities = []
    if(exits.present? && !modified?(:walk, :suppress))
      activities << :walk
    end
    if(!modified?(:heart, :suppress))
      activities << :heart
    end
    return activities
  end
  
  def allows_activity?(activity_name)
    activities.include?(activity_name)
  end

  def current_page
    if(book.present? && book[current_page_number].present?)
      return book[current_page_number]
    else
      return nil
    end
  end

  def current_page_text
    (current_page && current_page[:text]) || description
  end

  def turn_to_page(page_number)
    old_page = current_page
    new_page = book[page_number]
    raise "Invalid page ##{page_number} for page ##{current_page_number}." unless old_page[:links_to] && old_page[:links_to].include?(page_number)
    raise "Page ##{page_number} does not exist." unless new_page.present?
    todo = nil
    if(new_page[:effects].present?)
      new_page[:effects].each_pair do |key, value|
        if(:remove_suppression == key)
          modifier = activity_modifiers[value]
          raise "Couldn't find activity '#{value}'." unless modifier.present?
          raise "Activity '#{value} is not suppressed." unless modifier.include?(:suppress)
          modifier.delete(:suppress)
        elsif(:remove_book == key && true==value)
          todo = :remove_book
        end
      end
    end
    if(:remove_book == todo)
      self.book = []
    end
    self.current_page_number = page_number
    self.save!
  end

  def get_state
    state = {
      name: name,
      page: current_page_text,
      activities: activities,
      exits: exits.map{|path| {name: path.name}}
    }
    return state
  end
end
