import axios from 'axios';

import { SampleAppApi } from '../../../../../../gen/api';

function hasError(response) {
  return (
    response &&
    response.response &&
    response.response.data &&
    response.response.data.data &&
    response.response.data.data.attributes &&
    response.response.data.data.attributes.error_messages &&
    response.response.data.data.attributes.error_messages
  );
}

const BASE_URL = 'http://localhost:3000';

export default () => {
  return store => {
    // configuration
    const csrfTag: HTMLMetaElement = document.querySelector(
      'meta[name=csrf-token]'
    );
    if (csrfTag) {
      axios.defaults.headers.common['X-CSRF-Token'] = csrfTag.content;
    }
    const axiosInstance = axios.create({
      baseURL: BASE_URL
    });

    store.sampleAppAPI = new SampleAppApi({ basePath: '' }, '', axiosInstance);
    store.$axios = axiosInstance;
  };
};
