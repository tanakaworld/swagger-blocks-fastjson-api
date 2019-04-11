require 'rails_helper'

describe Api::BooksController, type: :request do
  let!(:dummy_image) do
    Rack::Test::UploadedFile.new(
        Rails.root.join('spec', 'fixtures', 'img', 'dummy.png').to_s,
        "image/png"
    )
  end
  let!(:payload) do
    {
        title: 'タイトル' * 3,
        description: '説明' * 30,
        image: dummy_image
    }
  end
  let!(:book) do
    FactoryBot.create(:book, image: dummy_image)
  end

  describe 'GET /api/books' do
    it 'is valid swagger format' do
      get '/api/books'
      expect(response.status).to eq(200)
      assert_schema_conform
    end
  end

  describe 'GET /api/books/{id}' do
    it 'is valid swagger format' do
      get "/api/books/#{book.id}"
      expect(response.status).to eq(200)
      assert_schema_conform
    end
  end

  describe 'POST /api/books' do
    it 'is valid swagger format' do
      current_count = Book.count
      post "/api/books", params: payload
      expect(response.status).to eq(201)
      expect(Book.count).to eq(current_count + 1)
      assert_schema_conform
    end
  end

  describe 'PUT /api/books/{id}' do
    it 'is valid swagger format' do
      put "/api/books/#{book.id}", params: payload
      expect(response.status).to eq(200)
      assert_schema_conform
    end
  end
  describe 'DELETE /api/books/{id}' do
    it 'is valid swagger format' do
      current_count = Book.count
      delete "/api/books/#{book.id}"
      expect(response.status).to eq(204)
      expect(Book.count).to eq(current_count - 1)
      assert_schema_conform
    end
  end
end