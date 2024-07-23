import { create, persist, createJSONStorage } from '../../libs/zustand';
import { AsyncStorage } from '../../libs/asyncStorage';
import { User, UserPatient } from '../../utils/types';

interface AuthProps {
  loggedIn: boolean;
  user: User | UserPatient | null;
  token: string | null;
  setUser: (user: User | UserPatient) => void;
  setToken: (token: string) => void;
  setLoggedIn: (loggedIn: boolean) => void;
  updateUser: (user: User) => void;
  clearUserData: () => void;
}

export const useAuthStore = create<AuthProps>()(
  persist(
    (set) => ({
      loggedIn: false,
      user: null,
      token: null,
      setUser: (user: User | UserPatient) => set((state) => ({ ...state, user })),
      setToken: (token: string) => set((state) => ({ ...state, token })),
      setLoggedIn: (loggedIn: boolean) => set((state) => ({ ...state, loggedIn })),
      updateUser: (userData: User | UserPatient) =>
        set((state) => ({ ...state, user: { ...state.user, ...userData } })),
      clearUserData: () => set((state) => ({ ...state, user: null, token: null, loggedIn: false })),
    }),
    { name: 'authentication', storage: createJSONStorage(() => AsyncStorage) },
  ),
);
