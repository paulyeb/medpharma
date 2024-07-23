import { useState } from 'react';
import { useCookie } from './useCookie';
import { getItem } from '../../../store/asyncStore';
import { ACCOUNT_KEY, TOKEN_KEY } from '../../../utils/constants';
import { User } from '../../../utils/types';
import { useAuthStore } from '../../../store/zustand';

export function useAccount() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { loggedIn, setLoggedIn, setToken, setUser, user, clearUserData } = useAuthStore();
  const { updateUserData: updateUserData_, clearCookie } = useCookie();

  const refresh = async () => {
    setIsRefreshing(true);
    const data = await getItem(ACCOUNT_KEY);
    const token = await getItem(TOKEN_KEY);
    setUser(data);
    setToken(token);
    setIsRefreshing(false);
    console.log('here');
    if (data && token) setLoggedIn(true);
  };

  const updateUserData = async (data: Omit<User, '_id'>) => {
    await updateUserData_(data);
    await refresh();
  };

  const logout = () => {
    clearUserData();
    clearCookie();
  };

  return {
    ...user,
    loggedIn,
    logout,
    refresh,
    updateUserData,
    isRefreshing,
  };
}
