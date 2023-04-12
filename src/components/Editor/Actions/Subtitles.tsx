import { Switch } from '@headlessui/react';
import { FC } from 'react';
import { BiCaptions } from 'react-icons/bi';

import Popover from '../Popover';

import { ICaptionSettings } from '@/types';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

interface ISubtitlesProps {
  captionSettings: ICaptionSettings;
  isCaptions: boolean;
  onCaptions: (isCaptions: boolean) => void;
  onSetCaptionSettings: (captionSettings: ICaptionSettings) => void;
}

const Subtitles: FC<ISubtitlesProps> = ({
  captionSettings,
  isCaptions,
  onCaptions,
  onSetCaptionSettings,
}) => {
  const handleToggleCaptions = () => {
    onCaptions(!isCaptions);
  };

  const handleKeyDown = (e: any) => {
    e.stopPropagation();

    if (e.key === 'Enter') {
      e.preventDefault();
      e.target.blur();
    }
  };

  const handleFixedWordCount = (e: any) => {
    onSetCaptionSettings({
      ...captionSettings,
      fixed: Number(e.target.value),
    });
  };

  return (
    <Popover tip='Subtitle Settings'>
      <div className='flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded hover:bg-gray-100'>
        <BiCaptions style={{ fontSize: 20 }} />
      </div>
      <div className='w-[240px] p-3'>
        <div className='mb-2 flex justify-between'>
          <span className='text-sm text-gray-600'>Enable Subtitles</span>
          <Switch
            checked={isCaptions}
            onChange={handleToggleCaptions}
            className='group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          >
            <span className='sr-only'>Toggle Subtitles</span>
            <span
              aria-hidden='true'
              className='pointer-events-none absolute h-full w-full rounded-md bg-white'
            />
            <span
              aria-hidden='true'
              className={classNames(
                isCaptions ? 'bg-blue-600' : 'bg-gray-200',
                'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out'
              )}
            />
            <span
              aria-hidden='true'
              className={classNames(
                isCaptions ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out'
              )}
            />
          </Switch>
        </div>
        <div className='flex items-center justify-between'>
          <span className='flex-1 text-sm text-gray-600'>Fixed Word Count</span>
          <span className='text-sm'>
            <input
              type='text'
              value={captionSettings.fixed ? captionSettings.fixed : ''}
              onChange={handleFixedWordCount}
              className='h-[30px] max-w-[60px] rounded border-gray-300 px-2 py-1'
              onKeyDown={handleKeyDown}
            />
          </span>
        </div>
      </div>
    </Popover>
  );
};

export default Subtitles;
