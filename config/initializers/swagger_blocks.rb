module Swagger::Blocks
  module ClassMethods
    private

    def fja_swagger_schema(schema_name)
      swagger_schema "#{schema_name}Response".to_sym,
                     required: [:id, :type, :attributes],
                     additionalProperties: false do
        property :id, type: :string
        property :type, type: :string
        property :attributes, '$ref': schema_name.to_sym
        yield(self) if block_given?
      end
    end
  end
end

module Swagger::Blocks::Nodes
  class ResponseNode
    def fja_response_schema(type, schema_name)
      schema do
        key :type, :object
        key :required, [:data]
        property :data do
          key :type, type.to_sym
          if type.to_sym === :array
            items do
              key :'$ref', "#{schema_name}Response".to_sym
            end
          elsif type.to_sym === :object
            key :type, type.to_sym
            key :'$ref', "#{schema_name}Response".to_sym
          else
            raise Error.new "Unexpected schema type:#{type} name:#{schema_name}"
          end
        end
      end
    end
  end
end
