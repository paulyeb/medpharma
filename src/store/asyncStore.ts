import AsyncStorage from '@react-native-async-storage/async-storage';
import { isEmpty } from '../utils/functions';

export const storeItem = async (key: string, data: any) => {
  try {
    if (isEmpty(key)) throw new Error('No key specified');
    if (isEmpty(data)) throw new Error('Data is empty');

    const jsonValue = JSON.stringify(data);

    await AsyncStorage.setItem(key, jsonValue);

    return true;
  } catch (error) {
    return false;
  }
};

export const getItem = async (key: string, parse: boolean = true): Promise<any | null> => {
  try {
    if (isEmpty(key)) throw new Error('No key specified');
    const item = await AsyncStorage.getItem(key);
    if (isEmpty(item) || item == null) return null;
    let result = item;
    if (parse) result = JSON.parse(item);
    return result;
  } catch (error) {
    return null;
  }
};

export const mergeItem = async (key: string, data: any) => {
  try {
    if (isEmpty(data)) throw new Error('No data specified');
    if (typeof data !== 'object') throw new Error("Data isn't a valid object");

    const existingItem = await getItem(key);
    let newItem = { ...existingItem, ...data };
    if (isEmpty(existingItem)) {
      newItem = data;
    }

    await storeItem(key, newItem);

    return true;
  } catch (error) {
    return false;
  }
};

export const clearStoreItem = async (keys: string[]) => {
  try {
    await AsyncStorage.multiRemove(keys);
  } catch (error) {}
};
