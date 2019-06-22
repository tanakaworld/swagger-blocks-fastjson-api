import { Module } from 'vuex';
import { RootState } from '../../index';
import {
  action,
  actionCreatorFactory,
  combineAction,
  combineMutation,
  mutation
} from 'vuex-typescript-fsa/lib';
import { Book, BookResponse } from 'gen';

export const namespace = 'books';
const actionCreator = actionCreatorFactory(namespace);

export const GetBooks = actionCreator<null>('GET_BOOKS');
export const BooksReceived = actionCreator<BookResponse[]>('BOOKS_RECEIVED');

export interface State {
  books: Book[];
}
const initialState = (): State => {
  return {
    books: []
  };
};

export const module: Module<State, RootState> = {
  namespaced: true,
  state: initialState,
  actions: combineAction(
    action(GetBooks, async function(context) {
      const { data } = await this.sampleAppAPI.getBooks(1);
      context.commit(BooksReceived(data.data));
    })
  ),
  mutations: combineMutation(
    mutation(BooksReceived, async function(state, action) {
      state.books = action.payload.map(b => b.attributes);
    })
  )
};
