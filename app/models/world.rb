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
      heart: [:none, :hope, :none, :none, :none, :none, :none, :none, :none]
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
        { text: "Why go on? Do you still have some [2hope] for the future despite all that has happened? Is there someone that you [3love], someone that you have given up on yet? Is there some higher [4purpose] you aren't ready to give up on? Or is it simply surival, the urge to adapt and [5change] no matter the circumstances?",
          links_to: [2,3,4,5] },
        { text: "Hope, then. You lie to yourself, you tell yourself it's going to be alright. That all of this can amount to something. That things will work out. Except, you're all out of lies, aren't you? Is there anything left at all in that [6heart] of yours?",
          links_to: [6],
          effects: {
            add_spark: :hope
          }
        },
        { text: "Love, then. You can't do it on your own, it's not enough to live for yourself, so you'll let others drive your heart. Except, there's no one else left, is there? In this black void, is there really a shred of love left in that [6heart] of yours?",
          links_to: [6],
          effects: {
            add_spark: :love
          }
        },
        { text: "Purpose, then. Loyalty to some dead concept passed down to you by someone who no longer exists. The belief that what you do matters, more than your own life, and that it matters so much you must keep living, even if all your actions up until now have ended up with nothing but this... thisendless darkness... to show for it. Can a sense of purpose really find a hold in your [6heart] even after all your failures?",
          links_to: [6],
          effects: {
            add_spark: :purpose
          }
        },
        { text: "Change, then. The will to survive, to expand, to become something more than what you are. But even if that was enough, what would this world turn you into? Is that really something you want to be, the sort of creature who could thrive in a place like this? And is there any fuel left in that [6heart] of yours to fuel such a change?",
          links_to: [6],
          effects: {
            add_spark: :change
          }
        },
        { text: "You've done it. You've opened the door to your own heart. Enter it, if you dare. When you are ready, you may [6look outward] again.",
          links_to: [7],
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
