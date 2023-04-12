/* eslint-disable @next/next/no-page-custom-font */
import clsx from 'clsx';
import Head from 'next/head';
import { FC, useEffect, useState } from 'react';

import Controls from './Controls';
import { PlaybackIcons } from './Icons';
import RawPlayer from './RawPlayer';
import { LayersContainer, PlayerContainer } from './Styles';
import Captions from '../Captions';
import Thumbnail from '../Thumbnail';

import {
  ICaptionSettings,
  IMedias,
  ITranscription,
  IVideoDimensions,
} from '@/types';

interface IPlayerProps {
  medias?: IMedias;
  captionSettings: ICaptionSettings;
  editData: number[][][];
  isCaptions: boolean;
  isPlaying: boolean;
  onPlayback: () => void;
  showThumbnail: boolean;
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

export interface IDurations {
  introDuration: number;
  editsDuration: number;
  recordingDuration: number;
}

const Player: FC<IPlayerProps> = ({
  medias,
  captionSettings,
  editData,
  isCaptions,
  isPlaying,
  onPlayback,
  showThumbnail,
  src,
  thumbnail,
  videoChunks,
  introTemplate,
  transcription,
  videoDimensions,
  onPlay,
  onPause,
  recordingDuration,
  onDurations,
}) => {
  const [muted, setMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.6);
  const [mouseEnter, setMouseEnter] = useState<boolean>(false);
  const [durations, setDurations] = useState<IDurations>({
    introDuration: 0,
    editsDuration: 0,
    recordingDuration,
  });
  const [showPlayBackStatus, setShowPlayBackStatus] = useState<boolean>(false);

  const handlePlayStatus = () => {
    setShowPlayBackStatus(true);

    setTimeout(() => {
      setShowPlayBackStatus(false);
    }, 400);
  };

  // TODO: This needs to factor in edit data trimming duration will change
  const handleUpdateDurations = (newDurations?: IDurations) => {
    console.log('NEED TO FACTOR IN EDIT DATA', {
      editData,
      videoChunks,
      newDurations: {
        ...durations,
        recordingDuration,
        ...newDurations,
      },
    });

    // duration with edits (15 - 8) + (3.8 - 0.11) = 10.69
    const editsDuration = videoChunks.reduce(
      (acc, [start, end]) => acc + (end - start),
      0
    );

    setDurations({
      ...durations,
      recordingDuration,
      ...newDurations,
      editsDuration,
    });

    if (onDurations) {
      onDurations({
        ...durations,
        recordingDuration,
        ...newDurations,
        editsDuration,
      });
    }
  };

  const handleMouseEnter = () => {
    setMouseEnter(true);
  };

  const handleMouseLeave = () => {
    setMouseEnter(false);
  };

  useEffect(handlePlayStatus, [isPlaying]);
  useEffect(handleUpdateDurations, [recordingDuration]);

  return (
    <PlayerContainer id='player-container' className='h-full w-full'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className='css-l3r58 h-full w-full'>
        <div
          className='video-container relative h-full w-full items-center justify-center overflow-hidden rounded-xl bg-[#121212]'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <LayersContainer
            data-lens-theme='dark'
            className='layers-container grid h-full w-full'
          >
            <Controls
              muted={muted}
              volume={volume}
              duration={
                durations.editsDuration
                  ? durations.editsDuration
                  : durations.introDuration + durations.recordingDuration
              } // TODO: This duration is important (not satisfied with this solution)
              isPlaying={isPlaying}
              mouseEnter={mouseEnter}
              onMuted={setMuted}
              onVolume={setVolume}
              onPlayback={onPlayback}
            />
            <div className='absolute z-[1] h-full w-full' onClick={onPlayback}>
              <Thumbnail
                thumbnail={thumbnail}
                showThumbnail={showThumbnail}
                onPlayback={onPlayback}
              />
              <div
                className={clsx(
                  showThumbnail
                    ? 'opacity-0'
                    : 'opacity-1 flex h-full items-center'
                )}
              >
                <PlaybackIcons
                  isPlaying={isPlaying}
                  showPlayBackStatus={showPlayBackStatus}
                />
                <RawPlayer
                  muted={muted}
                  volume={volume}
                  editData={editData}
                  durations={durations}
                  introTemplate={introTemplate}
                  isPlaying={isPlaying}
                  onPause={onPause}
                  onPlay={onPlay}
                  videoChunks={videoChunks}
                  recordingData={{
                    src: medias?.mp4 ? medias.mp4.src : src,
                    duration: recordingDuration,
                    edits: editData,
                  }}
                  onDurations={handleUpdateDurations}
                />
              </div>
            </div>
            {isCaptions && transcription && (
              <Captions
                editData={editData}
                durations={durations}
                captionSettings={captionSettings}
                transcription={transcription}
                videoDimensions={videoDimensions}
              />
            )}
          </LayersContainer>
        </div>
      </div>
    </PlayerContainer>
  );
};

export default Player;
