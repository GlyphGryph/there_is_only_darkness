class World < ApplicationRecord
  belongs_to :user
  has_one :character
  has_many :regions
  has_many :paths
  before_destroy :disassemble_world

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

private
  def generate_world
    name_one = @@name_one_list.sample
    name_two = @@name_two_list.sample
    region_one = Region.create!(
      world: self,
      name: "There Is Only Darkness",
      description: "There is only darkness."
    )
    region_two = Region.create!(
      world: self,
      name: "There Is Only Darkness 2",
      description: "There is only darkness."
    )
    path_one = Path.create!(
      world: self,
      name_one: name_one,
      name_two: name_two,
      source: region_one,
      destination: region_two
    )
    character = Character.create!(
      world: self,
      user: user,
      region: region_one
    )
  end
  
  def disassemble_world
    character.destroy
    paths.destroy_all
    regions.destroy_all
  end
end
