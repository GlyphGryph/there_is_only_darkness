class Character < ApplicationRecord
  belongs_to :world
  belongs_to :user
end
