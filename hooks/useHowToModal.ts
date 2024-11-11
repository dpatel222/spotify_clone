import { create } from "zustand";

interface HowToUseStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useHowToUseModal = create<HowToUseStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useHowToUseModal;
