import clsx from 'clsx';
import React, { useState } from 'react';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';

import 'react-reflex/styles.css';

import Editor from '@/components/Editor';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Video from '@/components/Video';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const videoSrc =
    'https://cdn.jsdelivr.net/npm/big-buck-bunny-1080p@0.0.6/video.mp4';
  const isTabletOrMobile = false;
  const recordingDuration = 30;
  const editorSize = {
    left: 0.6,
    right: 0.4,
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handlePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='mx-auto flex h-[100vh] max-w-7xl items-center bg-white'>
          <ReflexContainer
            orientation={isTabletOrMobile ? 'horizontal' : 'vertical'}
            style={{
              minHeight: 500,
              maxHeight: 600,
            }}
          >
            <ReflexElement
              className='left-pane flex-1 overflow-hidden'
              flex={editorSize.left}
              minSize={250}
            >
              <Video
                medias={{
                  0: {
                    size: 1920,
                    src: videoSrc,
                  },
                }}
                aspect='16/9'
                background='bg-[#121212]'
                captionSettings={{
                  fixed: 4,
                }}
                editData={[]}
                introTemplate={undefined}
                isCaptions={true}
                isPlaying={false}
                loading={false}
                onPause={handlePause}
                onPlay={handlePlay}
                onPlayback={handlePlayback}
                recordingDuration={recordingDuration}
                src={videoSrc}
                thumbnail={undefined}
                transcription={[]}
                videoChunks={[[0, 30]]}
                videoDimensions={{
                  r: 1,
                  width: 1920,
                  height: 1080,
                }}
                onDurations={() => ''}
              />
            </ReflexElement>
            <ReflexSplitter
              className='ml-4 border-blue-600'
              onResize={() => ''}
              onStopResize={() => ''}
            />
            <ReflexElement
              className='right-pane flex-1 overflow-hidden'
              flex={editorSize.right}
              minSize={400}
            >
              <div
                className={clsx(isTabletOrMobile ? 'mt-4' : 'ml-4', 'h-[100%]')}
              >
                <Editor
                  durations={{
                    introDuration: 10,
                    editsDuration: 10,
                    recordingDuration: 60,
                  }}
                  captionSettings={{
                    fixed: 4,
                  }}
                  editData={[]}
                  introEnabled={true}
                  isCaptions={false}
                  isPlaying={false}
                  loading={false}
                  onCaptions={() => ''}
                  onChangeTranscription={() => ''}
                  onEditData={() => ''}
                  onOpenIntroModal={() => ''}
                  onPlayback={() => ''}
                  onSelection={() => ''}
                  onSetCaptionSettings={() => ''}
                  selectionState={null}
                  transcription={[]}
                  videoDimensions={null}
                />
              </div>
            </ReflexElement>
          </ReflexContainer>
        </section>
      </main>
    </Layout>
  );
}
