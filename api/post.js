import { API } from './axios';

export default {
  registration: userData => API('user/register', 'post', userData),
};
