import { FC, memo } from 'react';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';

import { useCurrentTime } from '@/hooks/useCurrentTime';

import Tooltip from '@/components/Tooltip';

import { formatSeconds } from '@/helpers/formatSeconds';

interface IPlayControlsProps {
  onPause: () => void;
  onPlay: () => void;
  isPlaying: boolean;
}

const PlayControls: FC<IPlayControlsProps> = memo(
  ({ isPlaying, onPlay, onPause }) => {
    const { currentTime } = useCurrentTime();

    return (
      <div className='flex items-center'>
        <div className='-mb-[4px] mr-2 w-[70px] font-bold'>
          {formatSeconds(currentTime, 'mm:ss')
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
            })}
        </div>
        {!isPlaying ? (
          <Tooltip tip='Play (space)'>
            <div
              className='ml-1 flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded hover:bg-gray-100'
              onClick={onPlay}
            >
              <BsPlayFill style={{ fontSize: 24 }} />
            </div>
          </Tooltip>
        ) : (
          <Tooltip tip='Pause (space)'>
            <div
              className='ml-1 flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded hover:bg-gray-100'
              onClick={onPause}
            >
              <BsPauseFill style={{ fontSize: 24 }} />
            </div>
          </Tooltip>
        )}
      </div>
    );
  }
);

export default PlayControls;
