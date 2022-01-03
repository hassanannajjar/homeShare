import { getItemAsync, setItemAsync, deleteItemAsync } from 'expo-secure-store';
import { USER_SECURE_TOKEN } from '../utils/constants';

const setSecureToken = async token =>
  await setItemAsync(USER_SECURE_TOKEN, JSON.stringify(token));

const getSecureToken = async () =>
  JSON.parse(await getItemAsync(USER_SECURE_TOKEN));

const deleteSecureToken = async () => await deleteItemAsync(USER_SECURE_TOKEN);

export { setSecureToken, getSecureToken, deleteSecureToken };
