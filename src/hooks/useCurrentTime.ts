import create from 'zustand';

export const useCurrentTime: any = create((set: any) => ({
  currentTime: 0,
  setCurrentTime: (currentTime: number) => set(() => ({ currentTime })),
}));
