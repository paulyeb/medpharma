import { create } from '../../libs/zustand';
import { RegisterUserRequest } from '../../utils/types';

interface CreateUserProps {
  user: RegisterUserRequest | null;
  createUser: (user: RegisterUserRequest) => void;
  clearCreatedUser: () => void;
}

export const useCreateUserStore = create<CreateUserProps>()((set) => ({
  user: null,
  createUser: (user: RegisterUserRequest) =>
    set((state) => ({ state, user: { ...state.user, ...user } })),
  clearCreatedUser: () => set((state) => ({ ...state, user: null })),
}));
