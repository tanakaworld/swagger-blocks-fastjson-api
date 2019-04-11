module Swagger::ErrorSchema
  extend ActiveSupport::Concern
  include Swagger::Blocks

  included do
    swagger_schema :ErrorOutput do
      key :required, [:errors]
      key :additionalProperties, false
      property :errors do
        key :type, :array
        items do
          key :type, :string
        end
      end
    end
  end
end
