import clsx from 'clsx';
import { FC, useEffect, useRef, useState } from 'react';

import { useCurrentTime } from '@/hooks/useCurrentTime';

import Loader from './Loader';
import Player, { IDurations } from './Player';

import {
  ICaptionSettings,
  IMedias,
  ITranscription,
  IVideoDimensions,
} from '@/types';

interface IVideoProps {
  medias?: IMedias;
  aspect?: string;
  background?: string;
  captionSettings: ICaptionSettings;
  editData: number[][][];
  isCaptions: boolean;
  isPlaying: boolean;
  loading: boolean;
  onPlayback: () => void;
  src?: string;
  thumbnail?: string;
  introTemplate?: {
    slug: string;
  };
  transcription: ITranscription[] | undefined;
  videoChunks: number[][];
  videoDimensions: IVideoDimensions | null;
  onPlay: () => void;
  onPause: () => void;
  recordingDuration: number;
  onDurations?: (durations: IDurations) => void;
}

// TODO: This needs tests
const Video: FC<IVideoProps> = ({
  medias,
  aspect,
  background,
  captionSettings,
  editData,
  isCaptions,
  isPlaying,
  loading,
  onPlayback,
  src,
  thumbnail,
  introTemplate,
  transcription,
  videoChunks,
  videoDimensions,
  onPlay,
  onPause,
  recordingDuration,
  onDurations,
}) => {
  const rectangleRef = useRef<HTMLDivElement>(null);
  const [showThumbnail, setShowThumbnail] = useState<boolean>(true);
  const { setCurrentTime } = useCurrentTime();
  const [rectangle, setRectangle] = useState<{ width: number; height: number }>(
    {
      width: 1080,
      height: 1080,
    }
  );

  const handleHideThumbnail = () => {
    setShowThumbnail(false);
  };

  const handlePlayStart = () => {
    if (isPlaying && showThumbnail) {
      handleHideThumbnail();
    }
  };

  const handleDimensions = () => {
    if (rectangleRef.current) {
      const { width, height } = rectangleRef.current.getBoundingClientRect();

      setRectangle({
        width,
        height,
      });
    }
  };

  const handleMount = () => {
    setCurrentTime(0);
  };

  useEffect(handlePlayStart, [isPlaying]);
  useEffect(handleDimensions, [videoDimensions]);
  useEffect(handleMount, []);

  return (
    <div className='h-[100%] w-[100%] rounded-xl' ref={rectangleRef}>
      {loading || !aspect ? (
        <Loader rectangle={rectangle} />
      ) : (
        <div
          className={clsx(
            background && background,
            'h-[100%] w-[100%] rounded-xl'
          )}
        >
          <div
            className='rounded-xl'
            style={{
              aspectRatio: aspect,
              maxWidth: '100%',
              maxHeight: 'min(100vh - 305px, 940px)',
              minHeight: '100%',
              position: 'relative',
              margin: 'auto',
              overflow: 'hidden',
              height: videoDimensions?.height,
              background:
                background && 'center center / cover rgba(0, 0, 0, 0)',
            }}
          >
            <Player
              captionSettings={captionSettings}
              editData={editData}
              isCaptions={isCaptions}
              isPlaying={isPlaying}
              onPlayback={onPlayback}
              showThumbnail={showThumbnail}
              src={src}
              medias={medias}
              thumbnail={thumbnail}
              introTemplate={introTemplate}
              transcription={transcription}
              videoChunks={videoChunks}
              videoDimensions={videoDimensions}
              onPlay={onPlay}
              onPause={onPause}
              recordingDuration={recordingDuration}
              onDurations={onDurations}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
