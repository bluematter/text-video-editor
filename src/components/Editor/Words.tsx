import clsx from 'clsx';
import { FC, SyntheticEvent } from 'react';
import { RiAddCircleLine } from 'react-icons/ri';

import { useCurrentTime } from '@/hooks/useCurrentTime';

import Tooltip from '@/components/Tooltip';
import { IDurations } from '@/components/Video/Player';

import { WordsStyle } from './Styles';
import Word from './Word';

import { IAlternative, ITranscription, IWord } from '@/types';

interface IWordsProps {
  durations: IDurations;
  editData: number[][][];
  corrector: any;
  introEnabled?: boolean;
  isPlaying: boolean;
  transcription: ITranscription[];
  onOpenIntroModal: (e: SyntheticEvent) => void;
}

const Words: FC<IWordsProps> = ({
  durations,
  editData,
  corrector,
  introEnabled,
  isPlaying,
  transcription,
  onOpenIntroModal,
}) => {
  const { currentTime } = useCurrentTime();

  const noop = (e: any) => {
    const shiftKey = e.shiftKey;
    const rightArrow = e.key === 'ArrowRight';
    const leftArrow = e.key === 'ArrowLeft';
    const upArrow = e.key === 'ArrowUp';
    const downArrow = e.key === 'ArrowDown';
    const backspaceKey = e.key === 'Backspace';
    const deleteKey = e.key === 'Delete';
    const isArrow = rightArrow || leftArrow;
    const isKeyCombo = shiftKey && isArrow;

    if (!isArrow && !backspaceKey && !deleteKey && !isKeyCombo) {
      e.preventDefault();
      return console.warn('Key is not permitted');
    }
  };

  return (
    <WordsStyle
      className={clsx(
        isPlaying && 'is-playing',
        'pointer-events-none relative z-[2] block h-[0px]'
      )}
    >
      {transcription.map((result: ITranscription, tIndex: number) => {
        return (
          <p
            key={tIndex}
            // contentEditable={true}
            data-transcription-index={tIndex}
            className={clsx(
              isPlaying && 'caret-transparent',
              tIndex > 0 && 'mt-8',
              tIndex === transcription.length - 1 && 'pb-24',
              'alternative-block content-editable block outline-0'
            )}
            suppressContentEditableWarning={true}
            onKeyDown={noop}
          >
            <>
              {tIndex === 0 && introEnabled && (
                <Tooltip tip='Add Intro'>
                  <span
                    key='intro'
                    className='pointer-events-auto -mb-[3px] mr-2 inline-block cursor-pointer hover:text-blue-600'
                    onClick={onOpenIntroModal}
                  >
                    <RiAddCircleLine />
                  </span>
                </Tooltip>
              )}
              {result.alternatives.map((alternative: IAlternative) => {
                return alternative.words.map(
                  (
                    { word, styles, startTime, endTime }: IWord,
                    index: number
                  ) => {
                    const isBetweenSelection = editData[tIndex]?.some(
                      (trim: number[]) => index >= trim[0] && index <= trim[1]
                    );

                    if (isBetweenSelection) return null;

                    return (
                      <Word
                        key={index}
                        word={word}
                        index={index}
                        styles={styles}
                        endTime={endTime}
                        startTime={startTime}
                        corrector={corrector}
                        isPlaying={isPlaying}
                        parentIndex={tIndex}
                        currentTime={currentTime - durations.introDuration}
                      />
                    );
                  }
                );
              })}
            </>
          </p>
        );
      })}
    </WordsStyle>
  );
};

export default Words;
