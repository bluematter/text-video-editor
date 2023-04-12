import { FC, useEffect, useMemo, useRef, useState } from 'react';

import { useCurrentTime } from '@/hooks/useCurrentTime';

import WordGroup from './WordGroup';
import { IDurations } from '../Player';

import {
  ICaptionSettings,
  ITranscription,
  IVideoDimensions,
  IWord,
} from '@/types';

interface ICaptionsProps {
  durations: IDurations;
  captionSettings: ICaptionSettings;
  customFontSize?: number;
  editData: number[][][];
  transcription: ITranscription[];
  videoDimensions: IVideoDimensions | null;
}

// RULES
// Select words where there is no gap between end and next start
// Do this up until the max defined count
//

// OTHER IDEA
// Start with finding the word that matches currentTime
// Set an offset based on the current time
// Let the amount of words naturally fall in based on offset

interface IProps {
  index: number;
  endTime: number;
  startTime: number;
  wordsGoogle: IWord[];
}

interface IOpts {
  fixed?: number;
  props?: (args: IProps) => void;
}

export interface IWordGroup {
  endTime: number;
  startTime: number;
  wordsGoogle: IWord[];
}

// TODO: Move to a helpers file
// TODO: Rename to groupWords?
export const group = (array: IWord[], opts: IOpts) => {
  const chunks: IWordGroup[] = [];

  // TODO: add more options to make it smarter
  if (opts.fixed) {
    for (let i = 0; i < array.length; i += opts.fixed) {
      const lastWord = array[i + opts.fixed - 1];
      const firstWord = array[i];
      const endTime = lastWord
        ? Number(lastWord.endTime.seconds) +
          lastWord.endTime.nanos / 1000000 / 1000
        : 0; // TODO: Do not default to 0 need to fix this
      const startTime = firstWord
        ? Number(firstWord.startTime.seconds) +
          firstWord.startTime.nanos / 1000000 / 1000
        : 0; // TODO: Do not default to 0 need to fix this

      const wordsGoogle: IWord[] = array.slice(i, i + opts.fixed);

      chunks.push({
        endTime,
        startTime,
        wordsGoogle,
        ...(opts.props
          ? opts.props({
              index: chunks.length,
              endTime,
              startTime,
              wordsGoogle,
            })
          : {}),
      });
    }

    return chunks;
  }

  return [];
};

// TODO: Pass in opts from subtitle options UI
const Captions: FC<ICaptionsProps> = ({
  durations,
  captionSettings,
  customFontSize,
  editData,
  transcription,
  videoDimensions,
}) => {
  const captionsRef = useRef<HTMLDivElement>(null);
  const defaultFont = 80;
  const [dimensions, setDimensions] = useState<any>({
    width: 0,
    height: 0,
  });
  const [fontSize, setFontSize] = useState<number>(defaultFont);
  const { currentTime } = useCurrentTime();

  // This could be cached?
  const wordGroups: IWordGroup[] = useMemo(
    () =>
      transcription
        .map((t: ITranscription, i) => {
          const filtered = t.alternatives[0].words.filter(
            (word, index: number) => {
              const isBetweenSelection = editData[i]?.some(
                (trim: number[]) => index >= trim[0] && index <= trim[1]
              );

              if (isBetweenSelection) return false;
              return true;
            }
          );

          return group(filtered, {
            fixed: captionSettings.fixed ? captionSettings.fixed : 1,
          });
        })
        .flat(),
    [transcription, captionSettings, editData]
  );

  const handleMount = () => {
    setTimeout(() => {
      if (captionsRef.current) {
        const siblingDimension: any =
          captionsRef.current?.previousElementSibling?.firstElementChild;
        const thumbnailDimension: any =
          document.getElementById('video-thumbnail');

        if (
          thumbnailDimension &&
          (!siblingDimension || siblingDimension.offsetWidth === 0)
        ) {
          setDimensions({
            width: thumbnailDimension.offsetWidth,
            height: thumbnailDimension.offsetHeight,
          });
        } else {
          if (siblingDimension) {
            setDimensions({
              width: siblingDimension.offsetWidth,
              height: siblingDimension.offsetHeight,
            });
          } else {
            console.warn('Missing siblingDimension in captions?');
          }
        }
      }
    }, 1000);
  };

  const handleChangeFontSize = () => {
    if (dimensions && videoDimensions) {
      setFontSize(defaultFont / (videoDimensions.width / dimensions.width));
    }
  };

  useEffect(handleMount, []);
  useEffect(handleChangeFontSize, [setFontSize, dimensions, videoDimensions]);

  return (
    <div
      id='captions'
      ref={captionsRef}
      className='w-100 pointer-events-none absolute inset-0 z-[1] m-auto flex items-center justify-center'
      style={{
        fontFamily: "'Montserrat', sans-serif",
        height: dimensions?.height,
      }}
    >
      <div className='captions-text-container absolute bottom-[25%] text-center'>
        <span
          className='caption-span select-none text-white'
          style={{
            fontSize: customFontSize ? customFontSize : fontSize,
            textShadow: '0 0 10px black, 0 0 10px black',
          }}
        >
          {wordGroups.map((wordGroup: IWordGroup, gIndex: number) => (
            <WordGroup
              key={gIndex}
              currentTime={currentTime - durations.introDuration}
              wordGroup={wordGroup}
            />
          ))}
        </span>
      </div>
    </div>
  );
};

export default Captions;
