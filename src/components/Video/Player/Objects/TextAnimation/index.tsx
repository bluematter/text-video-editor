import React, { FC, memo, useEffect, useRef, useState } from 'react';

import { ASSETS_PATH, CUSTOM_FONTS } from '@/constant/env';
import { setLottieData } from '@/helpers';
import withObjectDisplay from '@/helpers/withObjectDisplay';

import LottieText from './LottieText';

let WebFont: any;

if (typeof window !== 'undefined') {
  WebFont = require('webfontloader');
}

interface ITextAnimationProps {
  animationData: any;
  fontFamilies: string[];
  fontStyles: string[];
  fontWeights: string[];
  objectRef: any;
  currTime?: number;
  onClick: () => void;
  startTime: number;
  style: string;
  uid: string;
}

const TextAnimation: FC<ITextAnimationProps> = memo(
  ({
    animationData,
    fontFamilies,
    fontStyles,
    fontWeights,
    objectRef,
    currTime,
    onClick,
    startTime,
    uid,
  }) => {
    const _isMounted = useRef(true);
    const { animationStyle, animationText, animationColors } = animationData;
    const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);
    const currentTime = currTime;
    const [mutatedAnimationData, setMutated] = useState<any>(null);

    const handleLoadLottieFont = () => {
      if (fontFamilies) {
        (async () => {
          try {
            await Promise.all(
              fontFamilies.map(async (fontFamily: string, index: number) => {
                try {
                  const isCustomFont = CUSTOM_FONTS.includes(fontFamily);
                  const fontVariant =
                    fontWeights && fontWeights[index]
                      ? `${fontFamily}:${fontWeights[index]}`
                      : `${fontFamily}`;

                  if (isCustomFont) {
                    await WebFont.load({
                      custom: {
                        families: [fontVariant],
                      },
                    });
                  } else {
                    await WebFont.load({
                      google: {
                        families: [fontVariant],
                      },
                    });
                  }
                } catch (e) {
                  console.log('Issue with font family', {
                    e,
                  });
                }
              })
            );

            _isMounted.current ? setFontsLoaded(true) : null;
          } catch (error) {
            console.log({
              message: 'There was an issue with the fonts',
              error,
              fontFamilies,
            });
          }
        })();
      }
    };

    const handleSetAnimationData = () => {
      fetch(`${ASSETS_PATH}/lottie/${animationStyle}.json`)
        .then((response) => response.json())
        .then((data) => {
          if (_isMounted.current) {
            setMutated(
              setLottieData({
                animationText,
                animationData: data,
                animationColors,
              })
            );
          } else {
            return null;
          }
        });
    };

    const handleUpdateData = () => {
      if (mutatedAnimationData) {
        setMutated(
          setLottieData({
            animationText,
            animationData: mutatedAnimationData,
            animationColors,
          })
        );
      }
    };

    useEffect(handleUpdateData, [animationText, animationColors]);

    useEffect(() => {
      if (mutatedAnimationData && !fontsLoaded) {
        handleLoadLottieFont();
      }
    }, [mutatedAnimationData]);

    useEffect(() => {
      handleSetAnimationData();
      return () => {
        _isMounted.current = false;
      };
    }, []);

    return (
      <div className='w-100 h-100' ref={objectRef}>
        {!mutatedAnimationData ? null : (
          <LottieText
            animationData={mutatedAnimationData}
            currentTime={currentTime ? currentTime : 0}
            onClick={onClick}
            startTime={startTime}
            uid={uid}
            key={String(fontsLoaded)}
          />
        )}
      </div>
    );
  }
);

export default withObjectDisplay(TextAnimation);
