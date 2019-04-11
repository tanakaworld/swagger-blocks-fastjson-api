class Api::SwaggerController < ActionController::Base
  include Swagger::ApiDocs

  def index
    render json: swagger_data, status: :ok
  end
end