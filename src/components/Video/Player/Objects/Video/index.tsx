import React, { FC, RefObject, useCallback } from 'react';

import { useTimelineStore } from '@/hooks/useTimeline';

import Canvas from './Canvas';
import { VideoWrap } from './Styles';
import { IUseVideoProps } from './useVideo';

interface VideoProps {
  chroma?: any;
  endDelta?: number;
  endTime: number;
  height: number;
  map: any;
  currTime?: number;
  muted: boolean;
  opacity?: number;
  playId: string | null;
  poster: string;
  scale: number;
  speed?: number;
  src?: string;
  startDelta?: number;
  startTime: number;
  storyId: string;
  transition?: any;
  transitionName?: string;
  uid: string;
  videoRef?: RefObject<HTMLVideoElement>;
  volume?: number;
  width: number;
}

// https://github.com/bluematter/motionbox/blob/5833ee365e951be1e40016e2d2a7537522e3af99/packages/storycreator/src/components/Editor/components/Video/VideoTransition.tsx
// https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_manipulation
const Video: FC<VideoProps> = ({
  chroma,
  endTime,
  height,
  map,
  muted,
  opacity,
  playId,
  scale,
  speed = 1,
  src,
  startDelta,
  startTime,
  storyId,
  currTime,
  transition,
  transitionName,
  uid,
  volume,
  width,
}: any) => {
  const currentTime =
    currTime !== undefined
      ? currTime
      : useTimelineStore(useCallback((state: any) => state.currentTime, []));
  const duration = endTime - Math.abs(startTime);
  const et = duration + Math.abs(startTime);
  const inFrame =
    Number(currentTime.toFixed(2)) >= Math.abs(startTime) &&
    Number(currentTime.toFixed(2)) <= et;

  // TODO: Why isnt endDelta being used?
  const videoProps: IUseVideoProps = {
    chroma,
    currentTime,
    endTime,
    height,
    inFrame,
    muted,
    opacity,
    playId,
    scale,
    speed,
    src,
    startDelta,
    startTime,
    storyId,
    transition,
    transitionName,
    uid,
    volume,
    width,
  };

  return (
    <VideoWrap opacity={opacity}>
      <Canvas id='videoRef0' videoProps={videoProps} map={map}>
        <canvas
          width={width}
          height={height}
          style={{
            pointerEvents: 'none',
          }}
        />
      </Canvas>
    </VideoWrap>
  );
};

export default Video;
