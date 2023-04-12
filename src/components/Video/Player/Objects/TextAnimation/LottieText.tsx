import lottie from 'lottie-web';
import React, { FC, memo, useEffect, useRef } from 'react';

interface ILottieTextProps {
  animationData: any;
  currentTime: number;
  onClick: () => void;
  startTime: number;
  uid: string;
}

const LottieText: FC<ILottieTextProps> = memo(
  ({ uid, animationData, currentTime, startTime, onClick }) => {
    const lottieRef = useRef<any>(null);
    const lottieAnim = useRef<any>(null);

    const handleUpdateLottieTime = () => {
      if (lottieAnim.current) {
        const actualCurrentTime = currentTime + startTime;

        try {
          lottieAnim.current.goToAndStop(actualCurrentTime * 1000);
        } catch (err) {
          console.log(`Error ${err}`);
        }
      }
    };

    const handleUpdateLottie = () => {
      if (lottieAnim.current) {
        lottieAnim.current.destroy();
        lottieAnim.current = lottie.loadAnimation({
          container: lottieRef.current,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        });

        handleUpdateLottieTime();
      }
    };

    const handleLottie = () => {
      if (lottieRef.current) {
        lottieAnim.current = lottie.loadAnimation({
          container: lottieRef.current,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        });

        setTimeout(() => {
          handleUpdateLottie();
        }, 500);

        handleUpdateLottieTime();

        return () => {
          lottieAnim.current.destroy();
        };
      }
    };

    const handleAnimatedData = () => {
      if (lottieAnim.current) {
        const gNodes: any[] = Array.from(
          lottieRef.current.getElementsByTagName('g')
        ).filter((g: any) => !g.closest('defs'));
        const innerText = gNodes[0];

        if (innerText) {
          const innerTextParent: HTMLDivElement | null = innerText.closest(
            `#object-${uid}`
          );
          innerText.addEventListener('click', onClick);
          innerText.style.pointerEvents = 'all';

          if (innerTextParent) {
            innerTextParent.classList.add('managed-target');
          }

          innerText.classList.add('inView');
          innerText.classList.add('target');
          innerText.setAttribute('data-uid', uid);

          return () => {
            innerText.removeEventListener('click', onClick);
          };
        }
      }
    };

    useEffect(handleUpdateLottieTime, [currentTime, lottieAnim]);
    useEffect(handleAnimatedData, [
      animationData,
      lottieAnim.current,
      lottieRef.current,
    ]);
    useEffect(handleUpdateLottie, [animationData]);
    useEffect(handleLottie, []);

    return <div className='lottie' ref={lottieRef} />;
  }
);

export default LottieText;
