namespace :swagger do
  desc "Generate API SDK for TypeScript"
  task :gen => :environment do
    include Swagger::ApiDocs

    json_path = "#{Rails.root}/tmp/swagger.json"
    json = swagger_data.to_json
    File.open(json_path, 'w') do |file|
      file.write(json)
    end
  end
end