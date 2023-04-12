import React, { memo } from 'react';

import useVideo, { IUseVideoProps } from './useVideo';

interface ICanvasProps {
  id: string;
  map: any;
  children: any;
  videoProps: IUseVideoProps;
}

const Canvas = memo(({ id, map, children, videoProps }: ICanvasProps) => {
  const video = useVideo({
    ...videoProps,
    map,
    id,
  });

  return (
    <>
      {React.cloneElement(children, {
        ref: (ref: any) => (video[id].current = ref),
      })}
    </>
  );
});

export default Canvas;
