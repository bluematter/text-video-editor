import { FC, SyntheticEvent } from 'react';
import { BiItalic } from 'react-icons/bi';

import Tooltip from '@/components/Tooltip';

import { IUpdateTranscription, IWord } from '@/types';

interface IItalicProps {
  selectionState: Selection | null;
  onChangeTranscription: (update: IUpdateTranscription) => void;
}

const Italic: FC<IItalicProps> = ({
  selectionState,
  onChangeTranscription,
}) => {
  const handleItalic = (e: SyntheticEvent) => {
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
              isItalic: true,
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
          console.log('Add italic to all selected words', {
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
          'Cannot highlight word(s) because there is no selectionState... The italic button probably should have been disabled...'
        );
      }
    } catch (e: any) {
      console.log('Error with italic', {
        e,
      });
    }
  };

  return (
    <Tooltip tip='Italic'>
      <div
        className='flex h-[25px] w-[25px] cursor-pointer select-none items-center justify-center rounded hover:bg-gray-100'
        onClick={handleItalic}
      >
        <BiItalic style={{ fontSize: 18 }} />
      </div>
    </Tooltip>
  );
};

export default Italic;
