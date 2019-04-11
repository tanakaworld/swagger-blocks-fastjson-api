module Swagger::BookSchema
  extend ActiveSupport::Concern
  include Swagger::Blocks

  included do
    swagger_schema :Book,
                   required: [:title, :description, :image_url],
                   additionalProperties: false do
      property :id, type: :integer
      property :title, type: :string
      property :description, type: :string
      property :image_url, type: :string
      property :created_at, type: :string
      property :updated_at, type: :string
    end

    # response
    fja_swagger_schema :Book

    # request
    swagger_schema :CreateBookRequest, additionalProperties: false do
      property :title, type: :string
      property :description, type: :string
      property :image, type: :object
    end
    swagger_schema :UpdateBookRequest, additionalProperties: false do
      property :title, type: :string
      property :description, type: :string
      property :image, type: :object
    end
  end
end