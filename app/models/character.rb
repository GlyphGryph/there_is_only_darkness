class Character < ApplicationRecord
  belongs_to :world
  belongs_to :user
  belongs_to :region

  def random_walk
    random_exit = region.exits.sample
    new_region = random_exit.destination
    self.region = new_region
    self.save!
  end
end
