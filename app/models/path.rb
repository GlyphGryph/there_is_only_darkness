class Path < ApplicationRecord
  belongs_to :world
  belongs_to :source, class_name: 'Region'
  belongs_to :destination, class_name: 'Region'
  validates :name_one, presence: true
  validates :name_two, presence: true

  def name
    "The Path of #{name_one} #{name_two}"
  end

  def default_travel_message
    "You have traveled down #{name} to reach this place."
  end

  def travel_message
    custom_travel_message || default_travel_message
  end
end
