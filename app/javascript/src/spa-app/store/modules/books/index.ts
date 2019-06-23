import { Module } from 'vuex';
import { RootState } from '@spa-app/store';
import {
  action,
  actionCreatorFactory,
  combineAction,
  combineMutation,
  mutation
} from 'vuex-typescript-fsa/lib';
import { Book, BookResponse, CreateBookRequest, UpdateBookRequest } from '@gen';

export const namespace = 'books';
const actionCreator = actionCreatorFactory(namespace);

export interface BookParams {
  id: number;
}

export const GetBooks = actionCreator<null>('GET_BOOKS');
export const GetBook = actionCreator<BookParams>('GET_BOOK');
export const UpdateBook = actionCreator<{
  params: BookParams;
  body: UpdateBookRequest;
}>('UPDATE_BOOK');
export const CreateBook = actionCreator<{
  body: CreateBookRequest;
}>('CREATE_BOOK');
export const DeleteBook = actionCreator<BookParams>('DELETE_BOOK');
export const BooksReceived = actionCreator<BookResponse[]>('BOOKS_RECEIVED');
export const BookReceived = actionCreator<BookResponse>('BOOK_RECEIVED');

export interface State {
  books: Book[];
  book: Book;
}
const initialState = (): State => {
  return {
    books: [],
    book: null
  };
};

export const module: Module<State, RootState> = {
  namespaced: true,
  state: initialState,
  actions: combineAction(
    action(GetBooks, async function(context) {
      const { data } = await this.sampleAppAPI.getBooks();
      context.commit(BooksReceived(data.data));
    }),
    action(GetBook, async function(context, action) {
      const { data } = await this.sampleAppAPI.getBook(action.payload.id);
      context.commit(BookReceived(data.data));
    }),
    action(UpdateBook, async function(context, action) {
      const { params, body } = action.payload;
      const { id } = params;
      const { title, description, image } = body;
      const { data } = await this.sampleAppAPI.updateBook(
        id,
        title,
        description,
        image
      );
      context.commit(BookReceived(data.data));
    }),
    action(CreateBook, async function(context, action) {
      const { body } = action.payload;
      const { title, description, image } = body;
      const { data } = await this.sampleAppAPI.createBook(
        title,
        description,
        image
      );
      context.commit(BookReceived(data.data));
    }),
    action(DeleteBook, async function(context, action) {
      await this.sampleAppAPI.deleteBook(action.payload.id);
    })
  ),
  mutations: combineMutation(
    mutation(BooksReceived, async function(state, action) {
      state.books = action.payload.map(b => b.attributes);
    }),
    mutation(BookReceived, async function(state, action) {
      state.book = action.payload.attributes;
    })
  ),
  getters: {
    books: state => state.books,
    book: state => state.book
  }
};
