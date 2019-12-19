class Path < ApplicationRecord
  belongs_to :world
  belongs_to :source, class_name: 'Region'
  belongs_to :destination, class_name: 'Region'
  validates :name_one, presence: true
  validates :name_two, presence: true

  def name
    "The Path of #{name_one} #{name_two}"
  end
end
