class Character < ApplicationRecord
  belongs_to :world
  belongs_to :user
  belongs_to :region
end
