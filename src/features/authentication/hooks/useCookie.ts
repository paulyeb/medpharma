import { clearStoreItem, getItem, mergeItem, storeItem } from '../../../store/asyncStore';
import { ACCOUNT_KEY, TOKEN_KEY } from '../../../utils/constants';
import { isEmpty } from '../../../utils/functions';
import { User, UserPatient } from '../../../utils/types';

export function useCookie() {
  const setUserToken = async (token: string) => {
    if (isEmpty(token)) return;
    return await storeItem(TOKEN_KEY, token);
  };

  const setUserData = async (data: User | UserPatient) => {
    if (isEmpty(data)) return;
    return await storeItem(ACCOUNT_KEY, data);
  };

  const updateUserData = async (data: Omit<User | UserPatient, '_id'>) => {
    if (isEmpty(data)) return;
    return await mergeItem(ACCOUNT_KEY, data);
  };

  const getUserDataAndToken = async () => {
    return {
      user: await getItem(ACCOUNT_KEY),
      token: await getItem(TOKEN_KEY),
    };
  };

  const clearUserToken = () => {
    clearStoreItem([TOKEN_KEY]);
  };
  const clearUserData = () => {
    clearStoreItem([TOKEN_KEY, ACCOUNT_KEY]);
  };

  const setCookie = async (token: string, data: User | UserPatient) => {
    const state = await setUserData(data);
    const state2 = await setUserToken(token);
    return state || state2;
  };

  const clearCookie = () => {
    clearUserData();
    clearUserToken();
  };

  return {
    getUserDataAndToken,
    setUserToken,
    setUserData,
    clearUserToken,
    clearUserData,
    clearCookie,
    setCookie,
    updateUserData,
  };
}
