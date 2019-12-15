class World < ApplicationRecord
  has_one :user
  has_one :characters
end
