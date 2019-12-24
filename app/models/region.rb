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

  def get_state
    state = {
      name: name,
      book: book.empty? ? [{text: description}] : book,
      activities: activities,
      exits: exits.map{|path| {name: path.name}}
    }
    return state
  end
end
