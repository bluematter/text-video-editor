import clsx from 'clsx';
import { FC, RefObject, useEffect, useState } from 'react';

import { useCurrentTime } from '@/hooks/useCurrentTime';

import { IDurations } from '@/components/Video/Player';

import { formatSeconds } from '@/helpers/formatSeconds';

import { IVideoDimensions } from '@/types';

interface IPlayheadProps {
  durations: IDurations;
  isMouseDown: boolean;
  isPlaying: boolean;
  selectionState: Selection | null;
  textRef: RefObject<any>;
  videoDimensions: IVideoDimensions | null;
}

interface IPlayheadState {
  startTime: number;
  x: number;
  y: number;
}

const Playhead: FC<IPlayheadProps> = ({
  durations,
  isMouseDown,
  isPlaying,
  selectionState,
  textRef,
  videoDimensions,
}) => {
  const [playhead, setPlayhead] = useState<IPlayheadState | null>(null);
  const { currentTime, setCurrentTime } = useCurrentTime();

  const handleIsPlaying = () => {
    if (!isPlaying) {
      const lastNode: any = document.querySelectorAll(
        "[data-between='true']"
      )[0];

      if (lastNode) {
        handleUpdatePlayheadFromNode({
          startNode: lastNode,
        });
      } else {
        const firstNode: any = document.querySelectorAll(
          "[data-between='false']"
        )[0];

        if (firstNode) {
          handleUpdatePlayheadFromNode({
            startNode: firstNode,
          });
        }
      }
    }
  };

  const handleUpdatePlayheadFromNode = ({
    startNode,
  }: {
    startNode: HTMLElement;
  }) => {
    if (textRef.current && startNode) {
      const parentDimensions = textRef.current.getBoundingClientRect();
      const dimensions = startNode.getBoundingClientRect();
      const startTime = startNode.getAttribute('data-st');
      const scrollTop = textRef.current.scrollTop;

      if (startTime !== undefined) {
        setPlayhead({
          startTime: Number(startTime),
          x: dimensions.x - parentDimensions.x,
          y: dimensions.y - parentDimensions.y + scrollTop,
        });

        // setCurrentTime(Number(startTime));
      }
    } else {
      console.log('startNode or textRef is missing...');
    }
  };

  const handleUpdateOnDimensionChange = () => {
    if (textRef.current && videoDimensions) {
      const currentNode = document.querySelectorAll("[data-between='true']")[0];

      if (currentNode) {
        const parentDimensions = textRef.current.getBoundingClientRect();
        const dimensions = currentNode.getBoundingClientRect();
        const startTime = currentNode.getAttribute('data-st');
        const scrollTop = textRef.current.scrollTop;

        setPlayhead({
          startTime: Number(startTime),
          x: dimensions.x - parentDimensions.x,
          y: dimensions.y - parentDimensions.y + scrollTop,
        });
      }
    }
  };

  const handleUpdateOnSelectionStateChange = () => {
    if (
      selectionState?.anchorNode &&
      (selectionState?.anchorNode as HTMLElement)?.getBoundingClientRect
    ) {
      if (
        Array.from(
          (selectionState?.anchorNode as HTMLElement)?.classList
        ).includes('span-word')
      ) {
        const startNode = selectionState.anchorNode as HTMLElement;

        handleUpdatePlayheadFromNode({
          startNode,
        });
      }
    }
  };

  const handleUpdateOnCurrentTimeChange = () => {
    if (!isPlaying) {
      const findNode = document.querySelector(
        `[data-st="${currentTime - durations.introDuration}"]`
      );

      if (findNode) {
        const parentDimensions = textRef.current.getBoundingClientRect();
        const dimensions = findNode.getBoundingClientRect();
        const scrollTop = textRef.current.scrollTop;

        setPlayhead({
          startTime: currentTime,
          x: dimensions.x - parentDimensions.x,
          y: dimensions.y - parentDimensions.y + scrollTop,
        });
      }
    }
  };

  useEffect(handleIsPlaying, [isPlaying]);
  useEffect(handleUpdateOnDimensionChange, [
    videoDimensions,
    setPlayhead,
    textRef.current,
  ]);
  useEffect(handleUpdateOnCurrentTimeChange, [currentTime, isPlaying]);
  useEffect(handleUpdateOnSelectionStateChange, [selectionState?.anchorNode]);

  useEffect(() => {
    setTimeout(() => {
      handleIsPlaying();
    }, 100);
  }, []);

  if (!playhead) return null;

  return (
    <span
      id='playhead'
      className={clsx(
        (isMouseDown || isPlaying) && 'hidden',
        'pointer-events-none absolute z-[3] h-[24px] w-[2px] select-none bg-blue-600 before:pointer-events-none before:absolute before:-left-[1px] before:bottom-0 before:h-[4px] before:w-[4px] before:bg-blue-600'
      )}
      style={
        playhead
          ? {
              top: playhead.y + 3 + 'px',
              left: playhead.x - 3 + 'px',
            }
          : {}
      }
    >
      <span
        className='absolute -left-[20px] -top-[12px] font-bold text-gray-400'
        style={{
          fontSize: 10,
        }}
      >
        {playhead && formatSeconds(playhead.startTime, 'mm:ss')}
      </span>
    </span>
  );
};

export default Playhead;
