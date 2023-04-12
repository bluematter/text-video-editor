import { FC, RefObject, useEffect, useState } from 'react';
import { MdOutlineEdit } from 'react-icons/md';
import { useKey } from 'react-use';

import { ITranscription, IUpdateTranscription, IWord } from '@/types';

export interface ICorrector {
  state: 'correcting';
  startIndex: number;
  endIndex: number;
  parentIndex: number;
  words: any[];
}

interface ICorrectorProps {
  corrector:
    | ICorrector
    | {
        state: 'initial';
      }
    | null;
  setCorrector: (corrector: ICorrector | null) => void;
  transcription: ITranscription[];
  correctorInputRef: RefObject<HTMLInputElement>;
  onChangeTranscription: (update: IUpdateTranscription) => void;
}

const Corrector: FC<ICorrectorProps> = ({
  corrector,
  setCorrector,
  transcription,
  correctorInputRef,
  onChangeTranscription,
}) => {
  const [value, setValue] = useState<string>('');

  const handleBlur = () => {
    if (corrector) {
      const newWords: IWord[] = value.split(' ').map((word: string) => ({
        word,
        confidence: 0,
        speakerTag: 0,
        startTime: {
          seconds: '',
          nanos: 0,
        },
        endTime: {
          seconds: '',
          nanos: 0,
        },
      }));

      if (corrector.state === 'correcting') {
        // TODO: Use selectionState over "corrector"?
        onChangeTranscription({
          newWords,
          startIndex: corrector.startIndex,
          endIndex: corrector.endIndex,
          transcriptionIndex: corrector.parentIndex,
        });
      } else {
        console.log('Corrector state shape is invalid...', {
          corrector,
        });
      }

      setCorrector(null);
    }
  };

  const handleFocus = (e: any) => {
    e.target.select();
  };

  const handleCorrectWord = (e: any) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    e.stopPropagation();

    if (e.key === 'Enter' && correctorInputRef.current) {
      correctorInputRef.current.blur();
    }
  };

  const handleEnableEditMode = () => {
    const selected = window.getSelection();

    if (selected) {
      const startNode: any = selected.anchorNode;
      const endNode: any = selected.focusNode;

      if (startNode && endNode) {
        const startIndex = Number(startNode.getAttribute('data-index'));
        const endIndex = Number(endNode.getAttribute('data-index'));
        const startParentIndex = Number(
          startNode.parentElement.getAttribute('data-transcription-index')
        );
        const endParentIndex = Number(
          endNode.parentElement.getAttribute('data-transcription-index')
        );

        // TODO: Its possible startNode and endNode share different parents
        console.log(
          'Handle when endParentIndex && startParentIndex are not the same',
          {
            startParentIndex,
            endParentIndex,
            startNode,
            endNode,
          }
        );

        setCorrector({
          state: 'correcting',
          startIndex,
          endIndex,
          parentIndex: startParentIndex, // TODO: needs to account for if endParentIndex is different
          words: transcription[startParentIndex].alternatives[0].words.slice(
            startIndex,
            endIndex + 1
          ), // TODO: needs to account for if endParentIndex is different
        });
      }
    }
  };

  useEffect(() => {
    if (corrector?.state === 'correcting' && corrector?.words) {
      setValue(corrector.words.map((word: any) => word.word).join(' '));
    }
  }, [corrector]);

  useKey(
    (e: KeyboardEvent) => e.key === 'e',
    (e: KeyboardEvent) => {
      e.preventDefault();

      if (corrector?.state === 'initial') {
        handleEnableEditMode();
      }
    }
  );

  if (corrector?.state === 'initial') {
    return (
      <button
        className='absolute bottom-[10px] left-0 right-0 z-[2] m-auto flex h-[50px] w-[120px] items-center justify-center rounded-full bg-gray-900 px-2 text-white hover:bg-gray-700'
        onClick={handleEnableEditMode}
      >
        <div className='flex items-center text-sm'>
          <MdOutlineEdit
            className='text-lg'
            style={{
              fontSize: 22,
            }}
          />
          <span className='-mb-[4px] ml-1 font-bold'>Edit</span>
          <div className='ml-2 flex h-[20px] w-[20px] items-center justify-center rounded-sm bg-gray-600'>
            <span className='-mb-[3px] text-sm text-gray-300'>E</span>
          </div>
        </div>
      </button>
    );
  }

  return (
    <>
      {corrector ? (
        <div className='absolute bottom-0 z-[9] w-[100%] rounded-b bg-gray-800 p-2'>
          <input
            ref={correctorInputRef}
            value={value}
            className='w-[100%]'
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleCorrectWord}
            onKeyDown={handleKeyDown}
          />
        </div>
      ) : null}
    </>
  );
};

export default Corrector;
