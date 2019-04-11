class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id,
             :title,
             :description,
             :created_at,
             :updated_at

  attribute :image_url do |object|
    Rails.application.routes.url_helpers.rails_blob_url(object.image) if object.image.attached?
  end
end
