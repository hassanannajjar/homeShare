import { showMessage } from 'react-native-flash-message';
import { DEVELOPMENT_MODE, DEVICE } from './constants';
import { deleteItemAsync, deleteSecureToken } from '../store';

const handleAPIError = async (error, message) => {
  const errorMessage = error?.response?.data?.status || {
    message,
  };

  showMessage({
    message: errorMessage.error_list
      ? errorMessage?.error_list[0]?.message
      : errorMessage.message,
    type: 'warning',
    icon: 'warning',
  });
};
const clgFun = value => {
  // eslint-disable-next-line no-console
  DEVELOPMENT_MODE ? console.log(value) : true;
};

/// ///////// logout from App
const handleLogout = async () => {
  clgFun('***** Logging Out ******');
  // await get.logout();
  await deleteItemAsync();
  await deleteItemAsync('notificationToken');
  await deleteSecureToken();
};

const deviceCondition = (androidValue, iosValue) =>
  DEVICE.platform === 'android' ? androidValue : iosValue;

export { handleAPIError, handleLogout, deviceCondition, clgFun };
