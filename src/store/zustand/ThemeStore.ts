import { create, persist, createJSONStorage } from '../../libs/zustand';
import { AsyncStorage } from '../../libs/asyncStorage';

export type Theme = 'dark' | 'light';

export interface ThemeProps {
  theme: Theme;
  setTheme: (theme: 'dark' | 'light') => void;
}

export const useThemeStore = create<ThemeProps>()(
  persist(
    (set) => ({
      theme: 'light',
      setTheme: (theme: Theme) => set((state) => ({ ...state, theme })),
    }),
    { name: 'theme', storage: createJSONStorage(() => AsyncStorage) },
  ),
);
