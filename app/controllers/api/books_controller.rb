class Api::BooksController < ApplicationController
  include Swagger::BooksApi

  before_action :set_book, only: [:show, :update, :destroy]

  def index
    @books = Book.all
    render json: BookSerializer.new(@books).serialized_json
  end

  def show
    render json: BookSerializer.new(@book).serialized_json
  end

  def create
    @book = Book.new(book_params)

    if @book.save
      render json: BookSerializer.new(@book).serialized_json, status: :created
    else
      render json: ErrorSerializer.new(@book).serialized_json, status: :unprocessable_entity
    end
  end

  def update
    if @book.update(book_params)
      render json: BookSerializer.new(@book).serialized_json, status: :ok
    else
      render json: ErrorSerializer.new(@book).serialized_json, status: :unprocessable_entity
    end
  end

  def destroy
    @book.destroy
    render json: nil, status: :no_content
  end

  private

  def set_book
    @book = Book.find(params[:id])
  end

  def book_params
    params.permit(:title, :description, :image)
  end
end
