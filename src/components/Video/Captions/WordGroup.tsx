import { FC, memo } from 'react';

import { IWordGroup } from '../Captions';

import { IWord } from '@/types';

interface IWordGroupProps {
  wordGroup: IWordGroup;
  currentTime: number;
}

const WordGroup: FC<IWordGroupProps> = memo(({ wordGroup, currentTime }) => {
  const { wordsGoogle, startTime, endTime } = wordGroup;

  if (startTime <= currentTime && endTime - 0.1 >= currentTime) {
    return (
      <>
        {wordsGoogle.map((word: IWord, i: number) => {
          const st =
            Number(word.startTime.seconds) +
            word.startTime.nanos / 1000000 / 1000;
          const et =
            Number(word.endTime.seconds) + word.endTime.nanos / 1000000 / 1000;
          const isBetween = st <= currentTime && et - 0.01 >= currentTime;

          const style =
            word.styles && word.styles.color
              ? {
                  color: isBetween ? '#0bf' : word.styles.color,
                }
              : {
                  color: isBetween ? '#0bf' : '',
                };

          return (
            <span key={i} style={style}>
              {word.word}{' '}
            </span>
          );
        })}
      </>
    );
  }

  return null;
});

export default WordGroup;
