import { FC, SyntheticEvent, useState } from 'react';
import ReactDOM from 'react-dom';

import Tip from './Tip';

interface ITooltipProps {
  tip: string;
  children: any;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: FC<ITooltipProps> = ({ tip, children, position }) => {
  const [coords, setCoords] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleMouseEnter = (e: SyntheticEvent) => {
    if (e.target) {
      const { x, y, width } = (e.target as HTMLElement).getBoundingClientRect();

      // TODO: Support other positions
      if (position === 'left') {
        setCoords({
          x: x - 55,
          y,
        });
      } else {
        setCoords({
          x: x + (width ? width / 2 : 0),
          y: y - 25,
        });
      }
    }
  };

  const handleMouseLeave = () => {
    setCoords(null);
  };

  return (
    <span
      className='relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {coords &&
        ReactDOM.createPortal(<Tip tip={tip} coords={coords} />, document.body)}
      {children}
    </span>
  );
};

export default Tooltip;
