class Book < ApplicationRecord
  include Swagger::BookSchema

  has_one_attached :image
end
