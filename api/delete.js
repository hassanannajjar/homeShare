import { API } from './axios';

export default {
  deletePaymentCard: () => API(`test`, 'delete'),
};
