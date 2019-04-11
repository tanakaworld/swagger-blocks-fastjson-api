module CommittteeRailsHelper
  include Committee::Rails::Test::Methods
  include Swagger::ApiDocs

  def committee_schema
    @committee_schema ||=
        begin
          driver = Committee::Drivers::OpenAPI2.new
          driver.parse(JSON.parse(swagger_data.to_json))
        end
  end
end
