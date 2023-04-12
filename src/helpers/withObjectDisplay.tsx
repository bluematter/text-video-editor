/* eslint-disable @typescript-eslint/ban-types */
import React, { ComponentType, useEffect, useRef } from 'react';

import { useTimelineStore } from '@/hooks/useTimeline';

export const getDragParent = (el: Element | null) => {
  if (!el) return;

  let parent = el.parentElement;

  while (parent) {
    if (parent.matches('.target') || parent.matches('.managed-target'))
      return parent;
    parent = parent.parentElement;
  }
};

const withObjectDisplay =
  <P extends {}>(Component: ComponentType<P>) =>
  ({ ...props }: any) => {
    const { currTime, disable, endTime, startTime, isActiveEditor } = props;
    const currentTime =
      currTime !== undefined
        ? currTime
        : useTimelineStore((state: any) => state.currentTime);
    const objectRef = useRef<any>(null);

    // TODO: When clips swap the indexes remain the same and isFirstMedia is incorrect
    const handleDisplay = () => {
      const ref = objectRef.current;
      const parentEl = getDragParent(ref);
      const displayEl = parentEl ? parentEl : ref;

      if (ref && parentEl) {
        const isManagedTarget = displayEl.matches('.managed-target');
        const cTime = Number(currentTime?.toFixed(2));
        const isBetween =
          cTime >= Number(Math.abs(startTime)?.toFixed(2)) &&
          cTime <= Number(endTime?.toFixed(2));

        if (isBetween) {
          !isManagedTarget && displayEl.classList.add('inView');
          displayEl.style['opacity'] = '1';
          displayEl.style['visibility'] = 'visible';
          displayEl.style['pointerEvents'] =
            disable || isManagedTarget ? 'none' : 'all';
        } else {
          !isManagedTarget && displayEl.classList.remove('inView');
          displayEl.style['opacity'] = '0';
          displayEl.style['visibility'] = 'hidden';
          displayEl.style['pointerEvents'] = 'none';
        }
      }
    };

    useEffect(handleDisplay, [currentTime, isActiveEditor, disable]);

    return <Component {...(props as P)} objectRef={objectRef} />;
  };

export default withObjectDisplay;
