import { FC } from 'react';

import Bold from './Bold';
import Italic from './Italic';
import PlayControls from './Play';
import Strike from './Strike';
import Subtitles from './Subtitles';
import TextColor from './TextColor';

import { ICaptionSettings, IUpdateTranscription } from '@/types';

interface IActionsProps {
  captionSettings: ICaptionSettings;
  isCaptions: boolean;
  isPlaying: boolean;
  onCaptions: (isCaptions: boolean) => void;
  onChangeTranscription: (update: IUpdateTranscription) => void;
  onPause: () => void;
  onPlay: () => void;
  onSetCaptionSettings: (captionSettings: ICaptionSettings) => void;
  selectionState: Selection | null;
}

const Actions: FC<IActionsProps> = ({
  captionSettings,
  isCaptions,
  isPlaying,
  onCaptions,
  onChangeTranscription,
  onPause,
  onPlay,
  onSetCaptionSettings,
  selectionState,
}) => {
  return (
    <div className='flex items-center justify-between border-b px-4 py-3 font-bold'>
      <PlayControls isPlaying={isPlaying} onPause={onPause} onPlay={onPlay} />
      <div className='flex items-center'>
        <Subtitles
          captionSettings={captionSettings}
          isCaptions={isCaptions}
          onCaptions={onCaptions}
          onSetCaptionSettings={onSetCaptionSettings}
        />
        <div className='mx-1 h-[25px] w-[1px] bg-gray-200' />
        <TextColor
          selectionState={selectionState}
          onChangeTranscription={onChangeTranscription}
        />
        <Strike
          selectionState={selectionState}
          onChangeTranscription={onChangeTranscription}
        />
        <Bold
          selectionState={selectionState}
          onChangeTranscription={onChangeTranscription}
        />
        <Italic
          selectionState={selectionState}
          onChangeTranscription={onChangeTranscription}
        />
      </div>
    </div>
  );
};

export default Actions;
