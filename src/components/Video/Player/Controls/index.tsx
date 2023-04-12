import clsx from 'clsx';
import { FC } from 'react';

import { useCurrentTime } from '@/hooks/useCurrentTime';

import { formatSeconds } from '@/helpers/formatSeconds';

import { Emojis, Play, ProgressTrack, Volume } from './Components';
import { ControlsLayerShare } from '../Styles';

interface IControlsProps {
  muted: boolean;
  volume: number;
  duration: number;
  isPlaying: boolean;
  mouseEnter: boolean;
  onMuted: (muted: boolean) => void;
  onVolume: (volume: number) => void;
  onPlayback: () => void;
}

const Controls: FC<IControlsProps> = ({
  muted,
  volume,
  duration,
  isPlaying,
  mouseEnter,
  onMuted,
  onVolume,
  onPlayback,
}) => {
  const { currentTime, setCurrentTime } = useCurrentTime();
  const formattedTime = formatSeconds(currentTime, 'mm:ss')
    .split('.')
    .map((o: string, i: number) => {
      if (i === 1) {
        return (
          <span key={i} className='text-sm'>
            .{o}
          </span>
        );
      }

      return <span key={i}>{o}</span>;
    });
  const formattedDuration = formatSeconds(duration, 'mm:ss');

  return (
    <ControlsLayerShare
      className={clsx(
        mouseEnter && 'videoMouseIsActive',
        !isPlaying && 'transportIsOpen',
        'pointer-events-none relative z-[100] grid h-full items-center overflow-clip rounded-xl'
      )}
    >
      <div className='transportSection css-1xf4yxn'>
        <div className='css-fnuian' />
        <ProgressTrack
          duration={duration}
          isPlaying={isPlaying}
          currentTime={currentTime}
          formattedTime={formattedTime}
          onPlayback={onPlayback}
          onChangeCurrentTime={setCurrentTime}
        />

        <div className='css-1igfvxv'>
          <div className='css-7gxj9i'>
            <div data-hide-ifnot-fullscreen='true' className='css-1qk3pj0'>
              <Play isPlaying={isPlaying} onPlayback={onPlayback} />
              {/* <FFRR /> */}
              <Volume
                muted={muted}
                volume={volume}
                onMuted={onMuted}
                onVolume={onVolume}
              />
              <div className='css-7w8bej'>
                <span className='css-1r8ulaz  flex items-center  font-black'>
                  <span className='css-1r8ulaz block w-[68px]'>
                    {formattedTime}
                  </span>
                  <span className='css-1r8ulaz'> / {formattedDuration}</span>
                </span>
              </div>
            </div>
            <div data-hide-if-fullscreen='true' className='css-1qk3pj0'>
              <Play isPlaying={isPlaying} onPlayback={onPlayback} />
              {/* <FFRR /> */}
              <Volume
                muted={muted}
                volume={volume}
                onMuted={onMuted}
                onVolume={onVolume}
              />
            </div>
            <div className='css-hacrcv'>
              <Emojis />
              <div data-hide-if-fullscreen='true' className='css-16tasy4'>
                <span className='css-1r8ulaz  flex items-center font-black'>
                  <span className='css-1r8ulaz block w-[68px]'>
                    {formattedTime}
                  </span>
                  <span className='css-1r8ulaz'> / {formattedDuration}</span>
                </span>
              </div>
            </div>
            {/* <ExtraButtons /> */}
          </div>
        </div>
      </div>
    </ControlsLayerShare>
  );
};

export default Controls;
