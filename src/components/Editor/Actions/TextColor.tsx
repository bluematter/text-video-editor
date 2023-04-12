import { FC } from 'react';

import Popover from '../Popover';

import { IUpdateTranscription, IWord } from '@/types';

const colors = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
  '#ff5722',
  '#795548',
  '#607d8b',
];

interface ITextColorProps {
  selectionState: Selection | null;
  onChangeTranscription: (update: IUpdateTranscription) => void;
}

interface IColorProps {
  color: string;
  onColorSelection: (color: string) => void;
}

const TextColor: FC<ITextColorProps> = ({
  selectionState,
  onChangeTranscription,
}) => {
  const handleColorSelection = (color: string) => {
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
              color,
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
          console.log('Add color to all selected words', {
            color,
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
          'Cannot highlight word(s) because there is no selectionState... The color picker probably should have been disabled...'
        );
      }
    } catch (e: any) {
      console.log('Error with color selection', {
        e,
      });
    }
  };

  return (
    <Popover tip='Text Color'>
      <div className='flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded hover:bg-gray-100'>
        <div
          className='h-[18px] w-[18px] rounded bg-yellow-400'
          style={{
            boxShadow: 'inset 0 0 0 2px #192646, inset 0 0 0 4px white',
          }}
        />
      </div>
      <PopoverUI onColorSelection={handleColorSelection} />
    </Popover>
  );
};

const PopoverUI: FC<any> = ({ close, onColorSelection }) => {
  const handleSelection = (color: string) => {
    onColorSelection(color);

    if (close) {
      close();
    }
  };
  return (
    <div className='select-none p-3'>
      <div className='flex w-[270px] flex-wrap'>
        {colors.map((color: any, i: number) => (
          <Color key={i} color={color} onColorSelection={handleSelection} />
        ))}
        <div
          data-tip='Custom'
          className='mb-2 mr-2 flex h-[25px] w-[25px] cursor-pointer items-center justify-center overflow-hidden rounded'
        >
          <div
            className='h-[30px] w-[30px]'
            style={{
              background:
                'radial-gradient(50% 50% at 50% 50%,#ffffff 0%,transparent 100%),conic-gradient(from 0deg at 50% 50%,#ff0000 0deg,#ffa800 47.73deg,#ffff00 79.56deg,#00ff00 121.33deg,#00ffff 180.99deg,#0000ff 238.67deg,#ff00ff 294.36deg,#ff0000 360deg),#c4c4c4',
            }}
          />
        </div>
      </div>
    </div>
  );
};

const Color: FC<IColorProps> = ({ color, onColorSelection }) => {
  const handleInsideColorClick = () => {
    onColorSelection(color);
  };

  return (
    <div
      data-tip={color}
      className='mb-2 mr-2 h-[25px] w-[25px] cursor-pointer rounded'
      style={{
        backgroundColor: color,
      }}
      onClick={handleInsideColorClick}
    />
  );
};

export default TextColor;
