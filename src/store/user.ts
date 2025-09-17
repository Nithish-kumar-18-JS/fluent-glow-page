import { create } from "zustand";

interface User {
  id: number;
  firebaseUid: string;
  name?: string;
  email: string;
  picture?: string;
  createdAt: Date;
  updatedAt: Date;
  questions: number;
}


interface UserStore {
  user: User;
  setUser: (user: Partial<User>) => void;
  getUser: () => User;
}

const useUserStore = create<UserStore>((set, get) => ({
  user:null,
  setUser: (user) => set((state) => ({ user: { ...state.user, ...user } })),
  getUser: () => get().user,
}));

export default useUserStore;
