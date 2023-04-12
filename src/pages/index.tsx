import clsx from 'clsx';
import * as React from 'react';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';

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
  const isTabletOrMobile = false;
  const editorSize = {
    left: 0.6,
    right: 0.4,
  };

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <ReflexContainer
            orientation={isTabletOrMobile ? 'horizontal' : 'vertical'}
            style={{
              minHeight: 500,
            }}
          >
            <ReflexElement
              className='left-pane flex-1 overflow-hidden'
              flex={editorSize.left}
              minSize={250}
            >
              <Video
                medias={{}}
                aspect='9/16'
                background='bg-[#121212]'
                captionSettings={{
                  fixed: 4,
                }}
                editData={[]}
                introTemplate={undefined}
                isCaptions={true}
                isPlaying={false}
                loading={false}
                onPause={() => ''}
                onPlay={() => ''}
                onPlayback={() => ''}
                recordingDuration={60}
                src='videoSrc'
                thumbnail='thumbnail'
                transcription={[]}
                videoChunks={[]}
                videoDimensions={null}
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
