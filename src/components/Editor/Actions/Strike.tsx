import { FC, SyntheticEvent } from 'react';
import { BiStrikethrough } from 'react-icons/bi';

import Tooltip from '@/components/Tooltip';

import { IUpdateTranscription, IWord } from '@/types';

interface IStrikethroughProps {
  selectionState: Selection | null;
  onChangeTranscription: (update: IUpdateTranscription) => void;
}

const Strikethrough: FC<IStrikethroughProps> = ({
  selectionState,
  onChangeTranscription,
}) => {
  const handleStrike = (e: SyntheticEvent) => {
    try {
      if (selectionState && selectionState.toString()) {
        const startNode = selectionState.anchorNode as any;
        const endNode = selectionState.focusNode as any;
        const startIndex = Number(startNode?.getAttribute('data-index'));
        const endIndex = Number(endNode?.getAttribute('data-index'));
        const startParentIndex = Number(
          startNode.parentElement.getAttribute('data-transcription-index')
        );
        const endParentIndex = Number(
          startNode.parentElement.getAttribute('data-transcription-index')
        );
        const selectedWords = selectionState.toString()?.split(' ');
        const newWords: IWord[] | undefined = selectedWords.map(
          (word: string, i: number) => ({
            word,
            confidence: 0,
            speakerTag: 0,
            styles: {
              isStrike: true,
              isLast: selectedWords.length - 1 === i,
              isFirst: i === 0,
            },
            startTime: {
              seconds: '',
              nanos: 0,
            },
            endTime: {
              seconds: '',
              nanos: 0,
            },
          })
        );

        if (newWords) {
          console.log('Add strike to all selected words', {
            endIndex,
            startIndex,
            newWords,
            selectionState,
          });

          onChangeTranscription({
            newWords,
            endIndex,
            startIndex,
            transcriptionIndex: startParentIndex, // TODO: needs to account for if endParentIndex is different
          });
        }
      } else {
        console.log(
          'Cannot highlight word(s) because there is no selectionState... The strike button probably should have been disabled...'
        );
      }
    } catch (e: any) {
      console.log('Error with strike', {
        e,
      });
    }
  };

  return (
    <Tooltip tip='Strikethrough'>
      <div
        className='flex h-[25px] w-[25px] cursor-pointer select-none items-center justify-center rounded hover:bg-gray-100'
        onClick={handleStrike}
      >
        <BiStrikethrough style={{ fontSize: 18 }} />
      </div>
    </Tooltip>
  );
};

export default Strikethrough;
