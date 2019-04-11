module Swagger::ApiDocs
  extend ActiveSupport::Concern
  include Swagger::Blocks

  included do
    swagger_root do
      key :swagger, '2.0'
      info do
        key :version, '1.0.0'
        key :title, 'swagger-blocks with fastjson_api'
        key :description, 'swagger-blocks with fastjson_api'
      end
      key :produces, ['application/json']
      key :consumes, ['application/json']
    end

    SWAGGERED_CLASSES = [
        # models
        Book,

        # controllers
        Api::BooksController,

        self
    ].freeze
  end

  def swagger_data
    Swagger::Blocks.build_root_json(SWAGGERED_CLASSES)
  end
end