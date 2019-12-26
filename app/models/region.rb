class Region < ApplicationRecord
  belongs_to :world
  has_many :entrances, class_name: 'Path', foreign_key: 'destination_id'
  has_many :exits, class_name: 'Path', foreign_key: 'source_id'
  serialize :book, Array

  def activities
    activities = []
    if(exits.present?)
      activities << :walk
    end
    return activities
  end

  def current_page
    if(book.present? && book[current_page_number].present?)
      return book[current_page_number]
    else
      return nil
    end
  end

  def current_page_text
    current_page[:text] || description
  end

  def turn_to_page(page_number)
    old_page = current_page
    new_page = book[page_number]
    raise "Invalid page." unless old_page[:links_to] && old_page[:links_to].include?(page_number)
    raise "Page does not exist." unless new_page.present?
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
