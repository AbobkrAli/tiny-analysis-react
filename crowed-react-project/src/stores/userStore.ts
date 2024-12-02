import { create } from 'zustand';

export interface UserState {
  user: string | null;
  login: (name: string) => void; // 
  logout: () => void; 
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  login: (name: string) => set(() => ({ user: name })), 
  logout: () => set(() => ({ user: null })), 
}));

export default useUserStore;
