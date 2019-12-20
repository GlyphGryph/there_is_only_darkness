class Region < ApplicationRecord
  belongs_to :world
  has_many :entrances, class_name: 'Path', foreign_key: 'destination_id'
  has_many :exits, class_name: 'Path', foreign_key: 'source_id'
  validates :name, presence: true
  validates :description, presence: true

  @@action_names = {
    walk: "Walk Through Darkness"
  }

  def actions
    actions = []
    if(exits.present?)
      actions << :walk
    end
    return actions
  end

  def get_state
    state = {
      name: name,
      description: description,
      actions: [],
      exits: exits.map{|path| {name: path.name}}
    }
    actions.each do |action|
      state[:actions] << {id: action, name: @@action_names[action]}
    end
    return state
  end
end
