import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_DATA_TOKEN } from '../utils/constants';

const setItemAsync = async (value, item = USER_DATA_TOKEN) =>
  await AsyncStorage.setItem(item, JSON.stringify(value));

const getItemAsync = async (item = USER_DATA_TOKEN) =>
  JSON.parse(await AsyncStorage.getItem(item));

const deleteItemAsync = async (item = USER_DATA_TOKEN) =>
  await AsyncStorage.removeItem(item);

export { setItemAsync, getItemAsync, deleteItemAsync };
