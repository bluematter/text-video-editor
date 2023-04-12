import { FC, useEffect, useState } from 'react';

import { useCurrentTime } from '@/hooks/useCurrentTime';

import Element from '@/components/Video/Player/Objects/Element';
import Shape from '@/components/Video/Player/Objects/Shape';
import Text from '@/components/Video/Player/Objects/Text';
import TextAnimation from '@/components/Video/Player/Objects/TextAnimation';
import Video from '@/components/Video/Player/Objects/Video';

import { getTemplate } from '@/helpers';
import { indexManager } from '@/helpers/indexManager';

import { IDurations } from '.';

interface IRawPlayerProps {
  muted: boolean;
  volume: number;
  editData: number[][][];
  isPlaying: boolean;
  durations: IDurations;
  videoChunks: number[][];
  introTemplate?: {
    slug: string;
  };
  recordingData: {
    src?: string;
    edits: number[][][];
    duration: number;
  };
  onPlay: () => void;
  onPause: () => void;
  onDurations: (durations: IDurations) => void;
}

const RawPlayer: FC<IRawPlayerProps> = ({
  muted,
  volume,
  editData,
  durations,
  videoChunks,
  recordingData,
  isPlaying,
  introTemplate,
  onPlay,
  onPause,
  onDurations,
}) => {
  let timeBegan: any = null;
  let started: any = null;
  const [scale, setScale] = useState<number>(1);
  const [rawData, setRawData] = useState<any>(null);
  const [dataWithEdits, setDataWithEdits] = useState<any>(null);
  const { currentTime, setCurrentTime } = useCurrentTime();

  // TODO: Hardcoding is dangerous
  const videoDimensions = {
    r: 1, // TODO: Hardcoding is dangerous
    width: 1920, // TODO: Hardcoding is dangerous
    height: 1080, // TODO: Hardcoding is dangerous
  };

  const handleCurrentTime = () => {
    const nowTime: any = new Date();
    const timeElapsed = new Date(nowTime - timeBegan);
    const min = timeElapsed.getUTCMinutes();
    const sec = timeElapsed.getUTCSeconds();
    const ms = timeElapsed.getUTCMilliseconds();
    const total = min * 60 + sec + ms / 1000;
    const updatedTime = currentTime + total;
    // TODO: These durations are important, and scattered throughout the codebase
    const endTime = durations.editsDuration
      ? durations.editsDuration
      : durations.introDuration + durations.recordingDuration;

    if (updatedTime >= endTime) {
      onPause();
      clearInterval(started);
      setCurrentTime(endTime);
    } else {
      setCurrentTime(updatedTime);
    }
  };

  const handlePlayback = () => {
    // TODO: These durations are important, and scattered throughout the codebase
    const endTime = durations.editsDuration
      ? durations.editsDuration
      : durations.introDuration + durations.recordingDuration;

    if (isPlaying) {
      if (timeBegan === null) {
        timeBegan = new Date();
      }

      started = setInterval(handleCurrentTime, 10);
    }

    if (isPlaying && currentTime >= endTime) {
      onPause();
      setCurrentTime(0);
      setTimeout(() => {
        onPlay();
      }, 100);
    }

    return () => clearInterval(started);
  };

  const handleEditData = () => {
    if (rawData) {
      // TODO: Duration needs to factor in all the edits

      // TODO: Need to figure out end time for each chunk
      const splitVideo = videoChunks
        .map((chunk: any, i: number) => {
          const baseClip = rawData['custom-recording-chunk-0'];
          const lastChunk = videoChunks[i - 1];
          const introOffset = durations.introDuration;

          console.log({
            chunk,
            durations,
            lastChunk,
          });

          // time should be fluent from one chunk to the next
          // i.e 0-2, 2-4, 4-6, 6-8
          // the deltas respect chunk[0] and chunk[1]

          // RULES
          // if its first clip, start time is 0
          //
          // if no trims we should leave alone

          const startTime =
            i === 0
              ? 0 + introOffset
              : Number((lastChunk[1] - lastChunk[0]).toFixed(2)) + 0.31;

          const edited = {
            ...baseClip,
            startTime,
            startDelta: chunk[0],
            endTime: Number(
              (startTime + chunk[1] - chunk[0] + introOffset + 0.3).toFixed(2)
            ),
            endDelta: chunk[1],
          };

          console.log(`MONITOR ME ${i}`, {
            edited,
          });

          // TODO: Somewhere we need to connect to the last chunk
          return edited;
        })
        .reduce((acc: any, curr: any, i: number) => {
          return {
            ...acc,
            [`custom-recording-chunk-${i}`]: {
              ...curr,
            },
          };
        }, {});

      // todo: this needs to create new videos per chunk?
      if (editData?.length) {
        setDataWithEdits({
          ...rawData,
          ...splitVideo,
        });
      } else {
        setDataWithEdits(rawData);
      }
    }
  };

  const handleMount = () => {
    const playerContainer = document.getElementById('player-container');

    (async () => {
      try {
        // TODO: recordingData.duration needs to be available on mount or this will cause a bug
        const { introDuration, templateData } = await getTemplate({
          slug: introTemplate?.slug,
          recordingData,
          videoDimensions,
        });

        if (playerContainer) {
          setScale(playerContainer.offsetWidth / videoDimensions.width);
        }

        setRawData(templateData);
        onDurations({
          introDuration,
          editsDuration: 0,
          recordingDuration: recordingData.duration,
        });
      } catch (e: any) {
        console.warn('Error in handleMount RawPlayer.tsx: ', e.message || '');
      }
    })();

    const myObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setScale(entry.contentRect.width / videoDimensions.width);
      });
    });

    if (playerContainer) {
      myObserver.observe(playerContainer);
    }

    return () => {
      myObserver.disconnect();
    };
  };

  useEffect(handleEditData, [rawData, videoChunks]);
  useEffect(handlePlayback, [isPlaying]);
  useEffect(handleMount, []);

  return (
    <div
      className='relative'
      style={{
        height: videoDimensions.height,
        width: videoDimensions.width,
        transform: `scale(${scale})`,
        transformOrigin: '0',
      }}
    >
      {dataWithEdits &&
        Object.keys(dataWithEdits).map((key: string) => {
          const {
            animationData,
            animationStyle,
            background,
            barGap,
            barWidth,
            clipPath,
            color,
            chroma,
            connectedUid,
            device,
            duration,
            effect,
            elementIndex,
            emoji,
            endDelta,
            endTime,
            fontFamilies,
            fontFamily,
            fontPaths,
            fontSize,
            fontStyles,
            fontWeight,
            fontWeights,
            giphy,
            height,
            highlighter,
            index,
            keyframes,
            language,
            layerIndex,
            left,
            lineHeight,
            link,
            loading,
            metadata,
            mirrored,
            motion,
            objects,
            opacity,
            progressbar,
            radius,
            rotation,
            shape,
            song,
            speed,
            startDelta,
            startTime,
            stroke,
            text,
            textAlignment,
            thumbnailSprites,
            thumbnails,
            top,
            trackIndex,
            trackWidth,
            transition,
            transitionName,
            type,
            uid,
            visualizer,
            width,
            words,
          } = dataWithEdits[key];

          return (
            <div
              key={key}
              className='target'
              style={{
                width,
                height,
                position: 'absolute',
                overflow: 'hidden',
                borderRadius: `${radius ? radius[0] : 0}px`,
                pointerEvents: type !== 'animated_text' ? 'all' : 'none',
                transform: `translate(${left}px, ${top}px) rotate(${
                  rotation ? rotation : 0
                }deg)`,
                zIndex: indexManager({
                  type,
                  isActive: false,
                  isGrouped: false,
                  trackIndex,
                  elementIndex,
                }),
              }}
            >
              {type === 'animated_text' && (
                <TextAnimation
                  uid={uid}
                  style={animationStyle}
                  disable={false}
                  currTime={currentTime}
                  endTime={endTime}
                  startTime={startTime}
                  fontPaths={fontPaths}
                  fontStyles={fontStyles}
                  fontWeights={fontWeights}
                  fontFamilies={fontFamilies}
                  animationData={animationData}
                  isActiveEditor={true}
                  onClick={() => {
                    return '';
                  }}
                />
              )}
              {type === 'video' && (
                <Video
                  chroma={chroma}
                  endDelta={endDelta}
                  endTime={endTime}
                  height={height}
                  muted={muted}
                  opacity={opacity}
                  playId={isPlaying ? 'play' : 'pause'}
                  poster=''
                  map={rawData}
                  scale={1}
                  speed={speed}
                  storyId={isPlaying ? 'play' : ''}
                  src={link}
                  currTime={currentTime}
                  startDelta={startDelta}
                  startTime={startTime}
                  transition={transition}
                  transitionName={transitionName}
                  uid={uid}
                  volume={volume * 100}
                  width={width}
                />
              )}
              {type === 'shape' && (
                <Shape
                // background={background}
                // disable={false}
                // endDelta={endDelta}
                // endTime={endTime}
                // height={height}
                // isActiveEditor={true}
                // keyframes={keyframes}
                // left={left}
                // opacity={opacity}
                // radius={radius}
                // startDelta={startDelta}
                // startTime={startTime}
                // top={top}
                // width={width}
                />
              )}
              {type === 'element' && (
                <Element
                // animationData={animationData}
                // background={background}
                // barGap={barGap}
                // barWidth={barWidth}
                // color={color}
                // connectedUid={connectedUid}
                // currTime={currentTime}
                // device={device}
                // disable={false}
                // effect={effect}
                // emoji={emoji}
                // endDelta={endDelta}
                // endTime={endTime}
                // giphy={giphy}
                // height={height}
                // isActiveEditor={true}
                // mirrored={mirrored}
                // motion={motion}
                // opacity={opacity}
                // playId=''
                // progressbar={progressbar}
                // scale={1}
                // shape={shape}
                // startDelta={startDelta}
                // startTime={startTime}
                // storyId=''
                // stroke={stroke}
                // uid={uid}
                // visualizer={visualizer}
                // width={width}
                />
              )}
              {type === 'text' && (
                <Text
                // uid={uid}
                // disable={false}
                // value={text}
                // width={width}
                // height={height}
                // left={left}
                // top={top}
                // color={color}
                // stroke={stroke}
                // opacity={opacity}
                // language={language}
                // background={background}
                // lineHeight={lineHeight}
                // fontSize={fontSize}
                // fontWeight={fontWeight}
                // fontFamily={fontFamily}
                // liveObject={rawData[key]}
                // textAlignment={textAlignment}
                // scale={1}
                // disabled={true}
                // startTime={startTime}
                // endTime={endTime}
                // isActive={false}
                // keyframes={keyframes}
                // editingObject=''
                // isActiveEditor={true}
                // isEditing={false}
                // isResizing={false}
                // onEditing={() => {
                //   return '';
                // }}
                // onSetLiveObject={() => {
                //   return '';
                // }}
                />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default RawPlayer;
