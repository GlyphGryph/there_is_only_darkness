class Character < ApplicationRecord
  belongs_to :world
  belongs_to :user
  belongs_to :region
  # An array of text messages
  serialize :events, Array
  # An array of Heart light statues
  # [:none, :hope, :none, :none, :survival, :none, :none, :none]
  # Current standard length is 6
  serialize :heart, Array

  def select_activity(activity_name)
    if(:walk == activity_name && self.region.allows_activity?(activity_name))
      self.random_walk
    else
      raise "Invalid Activity"
    end
  end

  def random_walk
    random_exit = region.exits.sample
    new_region = random_exit.destination
    self.region = new_region
    self.events = [random_exit.travel_message]
    self.save!
  end

  def get_state
    state = {
      id: id,
      events: events,
      heart: heart,
      heart_tutorial: heart_tutorial
    }
    return state
  end
end
