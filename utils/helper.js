import {showMessage} from 'react-native-flash-message';
import {DEVICE} from './constants';
import {deleteItemAsync, deleteToken} from '../store';

const handleAPIError = async (error, message, type) => {
  const errorMessage = error?.response?.data?.status || {
    message: message,
  };

  showMessage({
    message: errorMessage.error_list
      ? errorMessage?.error_list[0]?.message
      : errorMessage.message,
    type: 'warning',
    icon: 'warning',
  });
};

/// ///////// logout from App
const handleLogout = async () => {
  console.log('***** Logging Out ******');
  // await get.logout();
  await deleteItemAsync();
  await deleteItemAsync('notificationToken');
  await deleteToken();
};

const deviceCondition = (androidValue, iosValue) =>
  DEVICE.platform === 'android' ? androidValue : iosValue;

export {handleAPIError, handleLogout, deviceCondition};
