module Swagger::BooksApi
  extend ActiveSupport::Concern
  include Swagger::Blocks

  included do
    include Swagger::ErrorSchema

    swagger_path '/api/books' do
      # Index
      operation :get do
        key :operationId, 'getBooks'
        key :tags, ['sampleApp']

        parameter name: :id,
                  in: :path,
                  required: true,
                  type: :integer,
                  format: :int64
        response 200 do
          key :description, 'Books response'
          fja_response_schema :array, :Book
        end
        extend Swagger::ErrorResponses::NotFoundError
      end

      # Create
      operation :post do
        key :operationId, 'createBook'
        key :tags, ['sampleApp']

        parameter name: :body, in: :body, required: true do
          schema do
            key :'$ref', :CreateBookRequest
          end
        end
        response 201 do
          key :description, 'Book response'
          fja_response_schema :object, :Book
        end
        extend Swagger::ErrorResponses::InvalidParameterError
        extend Swagger::ErrorResponses::UnprocessableEntityError
      end
    end

    swagger_path '/api/books/{id}' do
      # Show
      operation :get do
        key :operationId, 'getBook'
        key :tags, ['sampleApp']

        parameter name: :id,
                  in: :path,
                  required: true,
                  type: :integer,
                  format: :int64
        response 200 do
          key :description, 'Book response'
          fja_response_schema :object, :Book
        end
        extend Swagger::ErrorResponses::NotFoundError
      end

      # Update
      operation :put do
        key :operationId, 'updateBook'
        key :tags, ['sampleApp']

        parameter name: :id,
                  in: :path,
                  required: true,
                  type: :integer,
                  format: :int64
        parameter name: :body, in: :body, required: true do
          schema do
            key :'$ref', :UpdateBookRequest
          end
        end
        response 200 do
          key :description, 'Book response'
          fja_response_schema :object, :Book
        end
        extend Swagger::ErrorResponses::InvalidParameterError
        extend Swagger::ErrorResponses::UnprocessableEntityError
        extend Swagger::ErrorResponses::NotFoundError
      end

      # Destroy
      operation :delete do
        key :operationId, 'deleteBook'
        key :tags, ['sampleApp']

        parameter name: :id,
                  in: :path,
                  required: true,
                  type: :integer,
                  format: :int64
        response 204 do
          key :description, 'No content response'
          schema do
          end
        end
        extend Swagger::ErrorResponses::InvalidParameterError
        extend Swagger::ErrorResponses::UnprocessableEntityError
      end
    end
  end
end