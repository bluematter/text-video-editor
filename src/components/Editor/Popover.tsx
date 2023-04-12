import { Popover, Transition } from '@headlessui/react';
import { cloneElement, FC, Fragment } from 'react';

import Tooltip from '@/components/Tooltip';

interface IPopoverProps {
  tip?: string;
  children: any;
}

const PopoverElement: FC<IPopoverProps> = ({ tip, children }) => {
  return (
    <Popover className='relative'>
      {({ open, close }: any) => {
        return (
          <>
            <Popover.Button className='flex items-center rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
              {tip ? <Tooltip tip={tip}>{children[0]}</Tooltip> : children[0]}
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                {cloneElement(children[1], {
                  close,
                })}
              </Popover.Panel>
            </Transition>
          </>
        );
      }}
    </Popover>
  );
};

export default PopoverElement;
