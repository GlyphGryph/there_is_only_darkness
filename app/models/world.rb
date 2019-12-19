class World < ApplicationRecord
  belongs_to :user
  has_one :character, dependent: :destroy
end
