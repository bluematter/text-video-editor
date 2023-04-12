import { FC, Fragment, memo } from 'react';

import { ICorrector } from './Corrector';
import { Span } from './Styles';

import { IWordStyles } from '@/types';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

interface IWordProps {
  word: string;
  index: number;
  styles?: IWordStyles;
  endTime: {
    seconds: string;
    nanos: number;
  };
  startTime: {
    seconds: string;
    nanos: number;
  };
  corrector:
    | ICorrector
    | {
        state: 'initial';
      }
    | null;
  isPlaying: boolean;
  parentIndex: number;
  currentTime: number;
}

const Word: FC<IWordProps> = memo(
  ({
    word,
    index,
    styles,
    endTime,
    startTime,
    corrector,
    isPlaying,
    parentIndex,
    currentTime,
  }) => {
    const st = Number(
      (Number(startTime.seconds) + startTime.nanos / 1000000 / 1000).toFixed(2)
    );
    const et = Number(
      (Number(endTime.seconds) + endTime.nanos / 1000000 / 1000).toFixed(2)
    );
    const isBetween = currentTime >= st && currentTime <= et - 0.01;

    return (
      <Fragment>
        <Span
          bold={styles?.isBold}
          color={styles?.color}
          italic={styles?.isItalic}
          strike={styles?.isStrike}
          className={classNames(
            corrector &&
              corrector.state === 'correcting' &&
              corrector.parentIndex === parentIndex &&
              index >= corrector?.startIndex &&
              index <= corrector?.endIndex &&
              'bg-green-100',
            'span-word pointer-events-auto relative inline-block hover:before:bg-gray-200'
          )}
          data-st={st}
          data-et={et}
          data-index={index}
          data-between={isBetween}
        >
          <span className='span-word relative z-[2]'>{word}</span>
        </Span>{' '}
      </Fragment>
    );
  }
);

export default Word;
