import { RefObject, useEffect, useRef, useState } from 'react';

import { getDragParent } from '@/helpers/withObjectDisplay';

import withGL from './withGL';

export interface IUseVideoProps {
  chroma: any;
  currentTime: number;
  endTime: number;
  height: number;
  inFrame: boolean;
  muted: boolean;
  opacity: number;
  playId: string;
  scale: number;
  speed: number;
  src: string;
  startDelta: number;
  startTime: number;
  storyId: string;
  transition: any;
  transitionName?: string;
  uid: string;
  volume: number;
  width: number;
}

interface IWithGLProps {
  id: string;
  map: any;
  initializeGL: () => void;
  locationRef: any;
  drawScene: (location: any, buffer: WebGLBuffer) => void;
  videoCanvasRefGL: RefObject<any>;
  gl: WebGLRenderingContext | null | undefined;
  glBuffer: WebGLBuffer | null;
  glTexture: WebGLTexture | null;
}

const useVideo = withGL(
  ({
    chroma,
    currentTime,
    drawScene,
    endTime,
    gl,
    glBuffer,
    glTexture,
    height,
    id,
    inFrame,
    initializeGL,
    locationRef,
    map,
    muted,
    playId,
    scale,
    speed = 1,
    src,
    startDelta,
    startTime,
    storyId,
    transition,
    uid,
    videoCanvasRefGL,
    volume,
    width,
  }: IWithGLProps & IUseVideoProps) => {
    let raf: any;
    let handle: any;
    const isPlaying = playId === storyId;
    const duration = endTime - Math.abs(startTime);
    const [loaded, setLoaded] = useState<boolean>(false);
    const video = useRef<HTMLVideoElement | null>(null);
    const mainStart = transition
      ? Math.abs(map[transition[0]]?.get('startTime'))
      : Math.abs(startTime);
    const mainEnd = transition
      ? Math.abs(
          map[transition[Object.keys(transition).length - 1]]?.get('endTime')
        )
      : duration + mainStart;

    const handleVideoLoaded = () => {
      if (!loaded) {
        setLoaded(true);

        console.log({
          [`loadedVideo-${id}`]: new Date().toLocaleTimeString(),
        });
      }
    };

    const handlePlayListener = () => {
      if (gl) {
        video.current?.addEventListener('play', drawFrame, false);
        video.current?.addEventListener('pause', cancelDraw, false);

        return () => {
          video.current?.removeEventListener('play', drawFrame);
          video.current?.removeEventListener('pause', cancelDraw);
        };
      }
    };

    const handleVideoError = (err: ErrorEvent) => {
      console.log('error when loading video file', {
        err,
      });
      // video.current?.load();
    };

    const handlePlayback = () => {
      if (video.current && gl) {
        const isPaused = video.current.paused;
        const isBetween =
          Number(currentTime.toFixed(2)) >= mainStart &&
          Number(currentTime.toFixed(2)) <= mainEnd;

        if (isPlaying && isPaused && isBetween) {
          video.current.play();
        }

        // this calls pause when out of frame
        if ((!isBetween && !isPaused) || (!isPlaying && !isPaused)) {
          video.current.pause();
        }
      }
    };

    const drawTexture = () => {
      if (gl) {
        if (!glTexture || !glBuffer) {
          console.log('glTexture and glBuffer are MISSING, solve this', {
            id,
          });
        }

        // render
        if (video.current && glTexture && glBuffer) {
          gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.RGB,
            gl.RGB,
            gl.UNSIGNED_BYTE,
            video.current
          );
          drawScene(locationRef.current, glBuffer);
        }
      }
    };

    const drawFrame = () => {
      if (video.current) {
        drawTexture();
      }

      if (
        'requestVideoFrameCallback' in HTMLVideoElement.prototype &&
        video.current
      ) {
        handle = (video.current as any).requestVideoFrameCallback(drawFrame);
      } else {
        raf = requestAnimationFrame(drawFrame);
      }
    };

    const handleRedrawDimensions = () => {
      if (videoCanvasRefGL.current) {
        videoCanvasRefGL.current.width = width;
        videoCanvasRefGL.current.height = height;

        if (video.current && gl) {
          gl.viewport(0, 0, width, height);
        }
      }
    };

    const handleCurrentTime = () => {
      const isBetween =
        Number(currentTime.toFixed(2)) >= mainStart &&
        Number(currentTime.toFixed(2)) <= mainEnd;

      if (video.current && !isPlaying) {
        video.current.playbackRate = speed;

        if (isBetween) {
          video.current.currentTime =
            Number(currentTime.toFixed(2)) -
            Math.abs(startTime) +
            Math.abs(startDelta);
        } else {
          video.current.currentTime = Math.abs(startDelta);
        }
      }

      if (videoCanvasRefGL.current) {
        const parentEl = getDragParent(videoCanvasRefGL.current);

        if (isBetween && parentEl) {
          parentEl.classList.add('inView');
          parentEl.style['pointerEvents'] = 'all';

          const transitionBetween =
            Number(currentTime.toFixed(2)) >= Math.abs(startTime) &&
            Number(currentTime.toFixed(2)) <= duration + Math.abs(startTime);

          // TODO: This needs testing
          if (transition && transitionBetween) {
            parentEl.setAttribute('data-uid', uid);
            parentEl.id = `object-${uid}`;
          }
        }

        // TODO: if first or last clip in chain and not between remove?
        if (!isBetween && parentEl) {
          parentEl.classList.remove('inView');
          parentEl.style['pointerEvents'] = 'none';
        }
      }
    };

    const cancelDraw = () => {
      if (
        'requestVideoFrameCallback' in HTMLVideoElement.prototype &&
        video.current
      ) {
        video.current?.cancelVideoFrameCallback(handle);
      } else {
        cancelAnimationFrame(raf);
      }
    };

    const handleVolume = () => {
      if (muted && video.current) {
        video.current.muted = true;
      }

      if (!muted && video.current) {
        video.current.muted = false;
      }

      if (muted && inFrame && video.current) {
        video.current.volume = 0;
      }

      if (!muted && inFrame && video.current) {
        video.current.volume = volume !== undefined ? volume / 100 : 1;
      }
    };

    const handleInOutFrame = () => {
      const isInFrame = inFrame && video.current;
      const notInFrame = !inFrame && video.current;

      // draw (needs glTexture, glBuffer in dependency array)
      if (isInFrame && video.current) {
        video.current.muted = false;
        drawTexture();
      }

      // clear
      if (notInFrame && video.current) {
        video.current.muted = true;

        if (gl) {
          gl.clearColor(0, 0, 0, 0);
          gl.clear(gl.COLOR_BUFFER_BIT);
        }
      }
    };

    const handleMount = () => {
      console.log({
        [`mountVideo-${id}`]: new Date().toLocaleTimeString(),
      });

      if (src) {
        video.current = document.createElement('video');
        video.current.preload = 'auto';
        video.current.crossOrigin = 'anonymous';
        video.current.playsInline = true;
        video.current.setAttribute('src', src);
        video.current.load();
        video.current.pause();
        video.current.addEventListener('error', handleVideoError);
        video.current.addEventListener('loadeddata', handleVideoLoaded);

        handleCurrentTime();

        return () => {
          video.current?.pause();
          cancelAnimationFrame(raf);
          video.current?.removeEventListener('error', handleVideoError);
          video.current?.removeEventListener('loadeddata', handleVideoLoaded);
        };
      }
    };

    useEffect(handleMount, []);
    useEffect(initializeGL, [loaded, gl]);
    useEffect(handleVolume, [volume, muted, inFrame, loaded]);
    useEffect(handlePlayback, [currentTime, playId, loaded, gl]);
    useEffect(handleInOutFrame, [inFrame, glTexture, glBuffer]);
    useEffect(handleCurrentTime, [currentTime, isPlaying, speed, loaded, gl]);
    useEffect(handlePlayListener, [
      width,
      height,
      chroma,
      loaded,
      gl,
      glTexture,
      glBuffer,
    ]);
    useEffect(handleRedrawDimensions, [width, height, scale, chroma, gl]);

    return {
      [id]: videoCanvasRefGL,
    };
  }
);

export default useVideo;
