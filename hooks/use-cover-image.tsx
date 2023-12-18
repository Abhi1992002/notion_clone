import { create } from "zustand";

type CoverImageState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onReplace: (url: string) => void;
  url?: string;
};

export const useCoverImage = create<CoverImageState>((set, get) => ({
  url: undefined,
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onReplace: (url: string) => set({ isOpen: true, url }),
}));
