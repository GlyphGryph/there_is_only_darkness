class World < ApplicationRecord
  belongs_to :user
  has_one :character
  has_many :regions
  has_many :paths
  before_destroy :disassemble_world
  validates :turn, presence: true
  
  before_validation :set_world_properties
  after_create :generate_world

  @@name_one_list = [
    "Shining",
    "Righteous",
    "Burning",
    "Suffocating",
    "Swirling",
    "Dull",
  ]
  @@name_two_list = [
    "Knives",
    "Coins",
    "Rods",
    "Fury",
    "Serenity",
    "Winds"
  ]

  def get_state
    {id: id}
  end

private
  def set_world_properties
    self.turn = 0
  end

  def generate_world
    travel_messages = [
      "You walk through the darkness.",
      "You find nothing.",
      "You grow weaker.",
      "Your steps grow heavy. The darkness clings to you like oil.",
      "You slow. The darkness rides on your back.",
      "You are reduced to a crawl.",
      "You have nothing left.",
    ]

    # Make first region
    last_region = Region.create!(
      world: self,
      name: "There Is Only Darkness #0",
      activity_modifiers: {walk: [:suppress], heart: [:suppress]},
      book: [
        { text: "There is only [1Darkness].",
          links_to: [1]
        },
        { text: "The darkness stretches out before you...",
          effects: {
            remove_suppression: :walk,
          }
        }
      ]
    )
    character = Character.create!(
      world: self,
      user: user,
      region: last_region,
      heart: [:none, :hope, :none, :none, :none, :none, :none]
    )

    # Make chain of followup regions
    travel_messages.each_with_index do |message, index|
      name_one = @@name_one_list.sample
      name_two = @@name_two_list.sample

      new_region = Region.create!(
        world: self,
        name: "There Is Only Darkness ##{index+1}",
        activity_modifiers: {heart: [:suppress]},
        description: "There is still only darkness."
      )
      path_one = Path.create!(
        world: self,
        name_one: name_one,
        name_two: name_two,
        source: last_region,
        destination: new_region,
        custom_travel_message: message
      )
      last_region = new_region
    end

    name_one = @@name_one_list.sample
    name_two = @@name_two_list.sample

    new_region = Region.create!(
      world: self,
      name: "Home",
      activity_modifiers: {heart: [:suppress]},
      description: "There is only darkness.",
      book: [
        { text: "You must [1look inward].",
          links_to: [1]
        },
        { text: "You have opened the door to your own heart. When you are ready, you may [2look outward] again.",
          links_to: [2],
          effects: {
            remove_suppression: :heart,
          }
        },
        { effects: { remove_book: true } }
      ]
    )
    path_one = Path.create!(
      world: self,
      name_one: name_one,
      name_two: name_two,
      source: last_region,
      destination: new_region,
      custom_travel_message: "You can go no further."
    )
    last_region = new_region

  end
  
  def disassemble_world
    character.destroy
    paths.destroy_all
    regions.destroy_all
  end
end
