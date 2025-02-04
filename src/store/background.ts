import { create } from "zustand";

interface BackgroundState {
  backgroundState: string | null;
  setBackground: (state: string) => void;
}

export const useBackgroundStore = create<BackgroundState>((set) => ({
  backgroundState: null,
  setBackground: (state) => set({ backgroundState: state }),
}));
