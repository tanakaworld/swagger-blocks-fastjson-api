import { SampleAppApi } from '../gen';

declare module 'vuex/types/index' {
  interface Store<S> {
    sampleAppAPI: SampleAppApi;
  }
}
