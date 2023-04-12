import { FC } from 'react';

import Actions from './Actions';
import TextView from './TextView';
import { IDurations } from '../Video/Player';

import {
  ICaptionSettings,
  ITranscription,
  IUpdateTranscription,
  IVideoDimensions,
} from '@/types';

interface ITranscriptionProps {
  durations: IDurations;
  captionSettings: ICaptionSettings;
  editData: number[][][];
  introEnabled?: boolean;
  isCaptions: boolean;
  isPlaying: boolean;
  loading: boolean;
  onCaptions: (isCaptions: boolean) => void;
  onChangeTranscription: (update: IUpdateTranscription) => void;
  onEditData: (editData: number[][][]) => void;
  onOpenIntroModal: (e: any) => void;
  onPlayback: () => void;
  onSelection: (selection: Selection) => void;
  onSetCaptionSettings: (captionSettings: ICaptionSettings) => void;
  selectionState: Selection | null;
  transcription: ITranscription[] | undefined;
  videoDimensions: IVideoDimensions | null;
}

const Transcription: FC<ITranscriptionProps> = ({
  durations,
  captionSettings,
  editData,
  introEnabled,
  isCaptions,
  isPlaying,
  loading,
  onCaptions,
  onChangeTranscription,
  onEditData,
  onOpenIntroModal,
  onPlayback,
  onSelection,
  onSetCaptionSettings,
  selectionState,
  transcription,
  videoDimensions,
}) => {
  return (
    <div className='flex h-[100%] flex-col rounded-xl border bg-white'>
      <Actions
        captionSettings={captionSettings}
        isCaptions={isCaptions}
        isPlaying={isPlaying}
        onCaptions={onCaptions}
        onChangeTranscription={onChangeTranscription}
        onPause={onPlayback}
        onPlay={onPlayback}
        onSetCaptionSettings={onSetCaptionSettings}
        selectionState={selectionState}
      />
      <TextView
        durations={durations}
        editData={editData}
        introEnabled={introEnabled}
        isPlaying={isPlaying}
        loading={loading}
        onChangeTranscription={onChangeTranscription}
        onEditData={onEditData}
        onOpenIntroModal={onOpenIntroModal}
        onSelection={onSelection}
        selectionState={selectionState}
        transcription={transcription}
        videoDimensions={videoDimensions}
      />
    </div>
  );
};

export default Transcription;
