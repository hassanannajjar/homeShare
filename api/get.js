import { API } from './axios';

export default {
  logout: () => API('/user/logout'),

  profile: () => API('user/profile'),
};
