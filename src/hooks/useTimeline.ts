import create from 'zustand';

export interface WithTimelineControlsProps {
  timelineControls: any;
}

export const useTimelineStore: any = create((set: any) => ({
  currentTime: 0,
  isTimelineOpened: true,
  setTimelineOpened: (isTimelineOpened: boolean) =>
    set(() => ({ isTimelineOpened })),
  setCurrentTime: (currentTime: number) => set(() => ({ currentTime })),
}));

export const timelineStoreApi = useTimelineStore;

export const useTimelineScrollStore: any = create((set: any) => ({
  timelineScroll: { x: 0, y: 0 },
  setTimelineScroll: (timelineScroll: { x: number; y: number }) =>
    set(() => ({ timelineScroll })),
}));
