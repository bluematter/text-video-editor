import clsx from 'clsx';
import { FC, useEffect, useRef, useState } from 'react';

interface ITipProps {
  tip: string;
  coords: {
    x: number;
    y: number;
  };
}

const Tip: FC<ITipProps> = ({ tip, coords }) => {
  const tipRef = useRef<HTMLSpanElement | null>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (tipRef.current) {
      setWidth(tipRef.current.offsetWidth);
    }
  }, []);

  return (
    <span
      ref={tipRef}
      className={clsx(
        !width && 'opacity-0',
        'absolute z-[99] flex h-[22px] items-center rounded bg-gray-800 px-2 text-[0.7rem] text-white'
      )}
      style={{
        left: coords.x - width / 2,
        top: coords.y,
      }}
    >
      <span className='-mb-[3px]'>{tip}</span>
    </span>
  );
};

export default Tip;
