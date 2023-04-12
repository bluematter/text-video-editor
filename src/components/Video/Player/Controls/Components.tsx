import { FC, useEffect, useRef, useState } from 'react';

interface IProgressTrackProps {
  duration: number;
  isPlaying: boolean;
  currentTime: number;
  formattedTime: any;
  onPlayback: () => void;
  onChangeCurrentTime: (time: number) => void;
}

interface IPlayProps {
  isPlaying: boolean;
  onPlayback: () => void;
}

interface IVolumeProps {
  muted: boolean;
  volume: number;
  onMuted: (muted: boolean) => void;
  onVolume: (volume: number) => void;
}

export const ProgressTrack: FC<IProgressTrackProps> = ({
  duration,
  isPlaying,
  currentTime,
  formattedTime,
  onPlayback,
  onChangeCurrentTime,
}) => {
  const rangeSliderRef = useRef<HTMLDivElement>(null);
  const progress = (currentTime / duration) * 100;

  const handleMouseUp = (e: any) => {
    const { x } = e.target.getBoundingClientRect();
    const pageX = e.pageX;

    if (rangeSliderRef.current) {
      const clickedPercentage =
        ((pageX - x) / rangeSliderRef.current.offsetWidth) * 100;
      const changedTime = (clickedPercentage / 100) * duration;

      if (changedTime >= 0) {
        onChangeCurrentTime(changedTime);
      } else {
        console.warn('changedTime is less than 0');
      }
    }
  };

  const handleMouseDown = (e: any) => {
    if (isPlaying) {
      onPlayback();
    }
  };

  return (
    <section
      ref={rangeSliderRef}
      className='css-y6j7gp'
      tabIndex={0}
      color='var(--lns-color-blue)'
      data-name='RangeSlider'
      role='slider'
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuetext={`${formattedTime} of 0:15`}
      style={{
        ['--progressValue' as string]: `${progress}%`,
      }}
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseDown}
    >
      <div data-name='ProgressTrack' className='css-1uofusf'>
        <div className='css-3ftbbt'>
          <div data-name='BufferedTimeline' className='css-4mf3eb'>
            <div
              className='css-1vn9cwm'
              style={{ left: '0%', width: '100%' }}
            />
          </div>
          <time
            className='progressValueTooltip css-rlenjc'
            style={{
              // opacity: 0,
              left: 'clamp(33.3281px, 18.4985%, 100% - 33.3281px)',
            }}
          >
            0:03
          </time>
        </div>
        <div data-name='ProgressFilled' className='css-nf0072' />
        <div data-name='ProgressThumb' className='css-1wct823' />
        <div data-name='ProgressBackground' className='css-ghvljy' />
      </div>
    </section>
  );
};

export const Play: FC<IPlayProps> = ({ isPlaying, onPlayback }) => {
  return (
    <div className='css-utvy5'>
      <span>
        <div>
          <button
            aria-label={isPlaying ? 'Pause' : 'Play'}
            className='css-1ncqx8v'
            onClick={onPlayback}
          >
            <span color='body' className='css-bkdk6o'>
              {!isPlaying ? (
                <svg viewBox='0 0 24 24' fill='none'>
                  <path
                    d='M6 6.134v11.732c0 .895 1.03 1.438 1.822.951l9.628-5.866c.733-.441.733-1.46 0-1.914L7.822 5.183C7.029 4.696 6 5.239 6 6.134z'
                    fill='currentColor'
                  />
                </svg>
              ) : (
                <svg viewBox='0 0 24 24' fill='none'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M8.188 5C6.979 5 6 5.98 6 7.188v9.625a2.188 2.188 0 004.375 0V7.188C10.375 5.979 9.395 5 8.187 5zm7.874 0c-1.208 0-2.187.98-2.187 2.188v9.625a2.188 2.188 0 004.375 0V7.188C18.25 5.979 17.27 5 16.062 5z'
                    fill='currentColor'
                  ></path>
                </svg>
              )}
            </span>
          </button>
        </div>
      </span>
      <div className='css-xuhww0' style={{ left: '4px', top: '-552.25px' }}>
        <div className='css-uu6h57'>
          <div data-lens-theme='dark' className='css-glgapd'>
            <div className='css-1qk3pj0'>
              <span className='css-1kcr850'>Play</span>
              <div className='css-1wtux5t' style={{ borderRadius: '3px' }}>
                <span color='var(--lns-color-grey3)' className='css-j950af'>
                  K
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="css-utvy5">
  //     <span>
  //       <div>
  //         <button aria-label="Play" className="css-1ncqx8v">
  //           <span color="body" className="css-bkdk6o">
  //             <svg viewBox="0 0 24 24" fill="none">
  //               <path
  //                 d="M6 6.134v11.732c0 .895 1.03 1.438 1.822.951l9.628-5.866c.733-.441.733-1.46 0-1.914L7.822 5.183C7.029 4.696 6 5.239 6 6.134z"
  //                 fill="currentColor"
  //               />
  //             </svg>
  //           </span>
  //         </button>
  //       </div>
  //     </span>
  //     <div className="css-xuhww0" style={{ left: "-7px", top: "-48px" }}>
  //       <div className="css-uu6h57">
  //         <div data-lens-theme="dark" className="css-glgapd">
  //           <div className="css-1qk3pj0">
  //             <span className="css-1kcr850">Play</span>
  //             <div className="css-1wtux5t" style={{ borderRadius: "3px" }}>
  //               <span color="var(--lns-color-grey3)" className="css-j950af">
  //                 K
  //               </span>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export const Volume: FC<IVolumeProps> = ({
  muted,
  volume,
  onMuted,
  onVolume,
}) => {
  const sliderRef = useRef<HTMLSelectElement>(null);
  const [mouseDown, setMouseDown] = useState<boolean>(false);

  const handleToggleMute = () => {
    onMuted(!muted);
  };

  const handleMouseUp = (e: any) => {
    setMouseDown(false);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = () => {
    setMouseDown(true);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleClick = (e: any) => {
    if (sliderRef.current) {
      const { x } = sliderRef.current.getBoundingClientRect();
      const dynamicVolume = (e.clientX - x) / sliderRef.current.offsetWidth;

      if (dynamicVolume >= 0 && dynamicVolume <= 1) {
        onVolume(dynamicVolume);
      }
    }
  };

  const handleMouseMove = (e: any) => {
    if (mouseDown && sliderRef.current) {
      const { x } = sliderRef.current.getBoundingClientRect();
      const dynamicVolume = (e.clientX - x) / sliderRef.current.clientWidth;

      if (dynamicVolume >= 0 && dynamicVolume <= 1) {
        onVolume(dynamicVolume);
      }
    }
  };

  useEffect(() => {
    if (mouseDown) {
      document.addEventListener('mousemove', handleMouseMove);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseDown]);

  return (
    <div className='VolumeBtnWrapper css-utvy5'>
      <div className='css-utvy5'>
        <span>
          <div>
            <button
              aria-label='Mute'
              data-name='MuteBtn'
              className='css-1ncqx8v'
              onClick={handleToggleMute}
            >
              <span color='body' className='css-bkdk6o'>
                {muted || volume === 0 ? (
                  <svg viewBox='0 0 24 24' fill='none'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M11.533 5.099A1 1 0 0112.1 6v12.6a1 1 0 01-1.625.78L6.25 16H3a1 1 0 01-1-1V9.6a1 1 0 011-1h3.25l4.225-3.38a1 1 0 011.058-.121zM10.1 8.08l-2.875 2.3a1 1 0 01-.625.219H4V14h2.6a1 1 0 01.625.22l2.875 2.3V8.08zM21.707 9.293a1 1 0 010 1.414l-5.143 5.143a1 1 0 01-1.414-1.414l5.143-5.143a1 1 0 011.414 0z'
                      fill='currentColor'
                    ></path>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M15.15 9.293a1 1 0 011.414 0l5.143 5.143a1 1 0 01-1.414 1.414l-5.143-5.143a1 1 0 010-1.414z'
                      fill='currentColor'
                    ></path>
                  </svg>
                ) : (
                  <>
                    {volume < 0.5 ? (
                      <svg viewBox='0 0 24 24' fill='none'>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M11.533 5.099A1 1 0 0112.1 6v12.6a1 1 0 01-1.625.78L6.25 16H3a1 1 0 01-1-1V9.6a1 1 0 011-1h3.25l4.225-3.38a1 1 0 011.058-.121zM10.1 8.08l-2.875 2.3a1 1 0 01-.625.219H4V14h2.6a1 1 0 01.625.22l2.875 2.3V8.08zM15.833 7.753a1 1 0 011.414 0 6 6 0 010 8.484 1 1 0 01-1.414-1.414 4 4 0 000-5.656 1 1 0 010-1.414z'
                          fill='currentColor'
                        ></path>
                      </svg>
                    ) : (
                      <svg viewBox='0 0 24 24' fill='none'>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M17.658 5.293a1 1 0 011.414 0 10 10 0 010 14.141 1 1 0 11-1.415-1.414 8 8 0 000-11.313 1 1 0 010-1.414zm-6.124-.131a1 1 0 01.567.9v12.602a1 1 0 01-1.625.781L6.25 16.064H3a1 1 0 01-1-1v-5.4a1 1 0 011-1h3.25l4.226-3.382a1 1 0 011.058-.12zm-1.433 2.982l-2.876 2.3a1 1 0 01-.625.22H4v3.4h2.6a1 1 0 01.625.219l2.876 2.3v-8.44zm4.38.326a1 1 0 011.414 0 5.5 5.5 0 010 7.778 1 1 0 11-1.415-1.414 3.5 3.5 0 000-4.95 1 1 0 010-1.414z'
                          fill='currentColor'
                        />
                      </svg>
                    )}
                  </>
                )}
              </span>
            </button>
          </div>
        </span>
        <div className='css-xuhww0' style={{ left: '-33px', top: '-48px' }}>
          <div className='css-uu6h57'>
            <div data-lens-theme='dark' className='css-glgapd'>
              <div className='css-1qk3pj0'>
                <span className='css-1kcr850'>Mute</span>
                <div className='css-1wtux5t' style={{ borderRadius: '3px' }}>
                  <span color='var(--lns-color-grey3)' className='css-j950af'>
                    M
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='css-1fkvtp6'>
        <section
          ref={sliderRef}
          className='alwaysVisible css-vtad7s'
          tabIndex={0}
          color='var(--lns-color-body)'
          role='slider'
          aria-valuemin={0}
          aria-valuemax={100}
          data-continuous-updates='true'
          aria-valuenow={volume}
          style={{
            ['--progressValue' as string]: `${volume * 100}%`,
          }}
          onClick={handleClick}
        >
          <div
            data-name='ProgressTrack'
            className='css-1uofusf'
            onMouseDown={handleMouseDown}
          >
            <div className='css-3ftbbt' />
            <div data-name='ProgressFilled' className='css-nf0072' />
            <div data-name='ProgressThumb' className='css-1wct823' />
            <div data-name='ProgressBackground' className='css-ghvljy' />
          </div>
        </section>
      </div>
    </div>
  );

  // return (
  //   <div className="VolumeBtnWrapper css-utvy5">
  //     <div className="css-utvy5">
  //       <span>
  //         <div>
  //           <button
  //             aria-label="Mute"
  //             data-name="MuteBtn"
  //             className="css-1ncqx8v"
  //           >
  //             <span color="body" className="css-bkdk6o">
  //               <svg viewBox="0 0 24 24" fill="none">
  //                 <path
  //                   fillRule="evenodd"
  //                   clipRule="evenodd"
  //                   d="M17.658 5.293a1 1 0 011.414 0 10 10 0 010 14.141 1 1 0 11-1.415-1.414 8 8 0 000-11.313 1 1 0 010-1.414zm-6.124-.131a1 1 0 01.567.9v12.602a1 1 0 01-1.625.781L6.25 16.064H3a1 1 0 01-1-1v-5.4a1 1 0 011-1h3.25l4.226-3.382a1 1 0 011.058-.12zm-1.433 2.982l-2.876 2.3a1 1 0 01-.625.22H4v3.4h2.6a1 1 0 01.625.219l2.876 2.3v-8.44zm4.38.326a1 1 0 011.414 0 5.5 5.5 0 010 7.778 1 1 0 11-1.415-1.414 3.5 3.5 0 000-4.95 1 1 0 010-1.414z"
  //                   fill="currentColor"
  //                 />
  //               </svg>
  //             </span>
  //           </button>
  //         </div>
  //       </span>
  //       <div
  //         className="css-xuhww0"
  //         style={{
  //           left: "4px",
  //           top: "-552.25px",
  //         }}
  //       >
  //         <div className="css-uu6h57">
  //           <div data-lens-theme="dark" className="css-glgapd">
  //             <div className="css-1qk3pj0">
  //               <span className="css-1kcr850">Mute</span>
  //               <div
  //                 className="css-1wtux5t"
  //                 style={{
  //                   borderRadius: "3px",
  //                 }}
  //               >
  //                 <span color="var(--lns-color-grey3)" className="css-j950af">
  //                   M
  //                 </span>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="css-1fkvtp6">
  //       <section
  //         className="alwaysVisible css-vtad7s"
  //         tabIndex={0}
  //         color="var(--lns-color-body)"
  //         role="slider"
  //         aria-valuemin={0}
  //         aria-valuemax={100}
  //         data-continuous-updates="true"
  //         aria-valuenow={100}
  //         style={{ ["-progressvalue" as string]: "100%" }}
  //       >
  //         <div data-name="ProgressTrack" className="css-1uofusf">
  //           <div className="css-3ftbbt" />
  //           <div data-name="ProgressFilled" className="css-nf0072" />
  //           <div data-name="ProgressThumb" className="css-1wct823" />
  //           <div data-name="ProgressBackground" className="css-ghvljy" />
  //         </div>
  //       </section>
  //     </div>
  //   </div>
  // );
};

export const FFRR = () => {
  return (
    <div className='css-1qk3pj0'>
      <div className='css-utvy5'>
        <span>
          <div>
            <button
              aria-label='Step Back'
              data-name='StepBackBtn'
              className='css-1ncqx8v'
            >
              <span color='body' className='css-bkdk6o'>
                <svg viewBox='0 0 24 24' fill='none'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M8.136 11.736a.9.9 0 01-1.272 0l-3.6-3.6a.9.9 0 010-1.272l3.6-3.6a.9.9 0 111.272 1.272L5.173 7.5l2.963 2.964a.9.9 0 010 1.272z'
                    fill='currentColor'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M12.636 11.736a.9.9 0 01-1.272 0l-3.6-3.6a.9.9 0 010-1.272l3.6-3.6a.9.9 0 011.272 1.272L9.673 7.5l2.963 2.964a.9.9 0 010 1.272z'
                    fill='currentColor'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M10.894 6.618c-.275.007-.507.013-.694.013a.9.9 0 000 1.8c.211 0 .467-.007.737-.013l.107-.003c.314-.007.653-.015 1-.015.706 0 1.39.031 1.91.134a5.405 5.405 0 012.765 1.474 5.38 5.38 0 011.17 5.867 5.388 5.388 0 01-1.988 2.417 5.41 5.41 0 01-3.001.908.9.9 0 000 1.8 7.21 7.21 0 004-1.21A7.17 7.17 0 0017.99 8.734a7.205 7.205 0 00-3.687-1.965c-.702-.14-1.533-.17-2.26-.169-.37 0-.728.008-1.044.016l-.106.002z'
                    fill='currentColor'
                  />
                  <path
                    d='M3 18.621C3.103 19.866 4.343 21 6.15 21c1.936 0 3.15-1.244 3.15-2.733 0-1.659-1.2-2.634-2.866-2.634-.594 0-1.24.195-1.6.548l.516-2h3.537V12.9H4.304L3.27 16.889l1.459.5c.297-.317.8-.549 1.394-.549.852 0 1.614.488 1.614 1.464 0 .878-.71 1.44-1.588 1.44-.968 0-1.627-.635-1.691-1.477L3 18.621z'
                    fill='currentColor'
                  />
                </svg>
              </span>
            </button>
          </div>
        </span>
        <div
          className='css-xuhww0'
          style={{
            left: '4px',
            top: '-552.25px',
          }}
        >
          <div className='css-uu6h57'>
            <div data-lens-theme='dark' className='css-glgapd'>
              <div className='css-1qk3pj0'>
                <span className='css-1kcr850'>Step Back</span>
                <div
                  className='css-1wtux5t'
                  style={{
                    borderRadius: '3px',
                  }}
                >
                  <span color='var(--lns-color-grey3)' className='css-j950af'>
                    J
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='css-utvy5'>
        <span>
          <div>
            <button
              aria-label='Step Forward'
              data-name='StepForwardBtn'
              className='css-1ncqx8v'
            >
              <span color='body' className='css-bkdk6o'>
                <svg viewBox='0 0 24 24' fill='none'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M10.464 3.264a.9.9 0 011.272 0l3.6 3.6a.9.9 0 010 1.272l-3.6 3.6a.9.9 0 11-1.272-1.272L13.427 7.5l-2.963-2.964a.9.9 0 010-1.272z'
                    fill='currentColor'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M14.964 3.264a.9.9 0 011.272 0l3.6 3.6a.9.9 0 010 1.272l-3.6 3.6a.9.9 0 11-1.272-1.272L17.927 7.5l-2.963-2.964a.9.9 0 010-1.272z'
                    fill='currentColor'
                  />
                  <path
                    d='M13.8 18.621C13.903 19.866 15.142 21 16.95 21c1.936 0 3.15-1.244 3.15-2.733 0-1.659-1.2-2.634-2.866-2.634-.594 0-1.24.195-1.6.548l.515-2h3.538V12.9h-4.583l-1.033 3.989 1.459.5c.297-.317.8-.549 1.394-.549.852 0 1.614.488 1.614 1.464 0 .878-.71 1.44-1.588 1.44-.968 0-1.627-.635-1.691-1.477l-1.46.354z'
                    fill='currentColor'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M12.206 6.618c.275.007.507.013.694.013a.9.9 0 010 1.8c-.211 0-.467-.007-.737-.013l-.107-.003a41.495 41.495 0 00-1-.015c-.706 0-1.39.031-1.91.134a5.405 5.405 0 00-2.765 1.474 5.38 5.38 0 00-1.17 5.867 5.388 5.388 0 001.988 2.417 5.41 5.41 0 003.001.908.9.9 0 010 1.8 7.21 7.21 0 01-4-1.21 7.188 7.188 0 01-2.652-3.224A7.17 7.17 0 015.11 8.733 7.205 7.205 0 018.796 6.77c.702-.14 1.533-.17 2.26-.169.37 0 .728.008 1.044.016l.106.002z'
                    fill='currentColor'
                  />
                </svg>
              </span>
            </button>
          </div>
        </span>
        <div
          className='css-xuhww0'
          style={{
            left: '4px',
            top: '-552.25px',
          }}
        >
          <div className='css-uu6h57'>
            <div data-lens-theme='dark' className='css-glgapd'>
              <div className='css-1qk3pj0'>
                <span className='css-1kcr850'>Step Forward</span>
                <div
                  className='css-1wtux5t'
                  style={{
                    borderRadius: '3px',
                  }}
                >
                  <span color='var(--lns-color-grey3)' className='css-j950af'>
                    L
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="css-1qk3pj0 !hidden">
  //     <div className="css-utvy5">
  //       <span>
  //         <div>
  //           <button
  //             aria-label="Step Back"
  //             data-name="StepBackBtn"
  //             className="css-1ncqx8v"
  //           >
  //             <span color="body" className="css-bkdk6o">
  //               <svg viewBox="0 0 24 24" fill="none">
  //                 <path
  //                   fillRule="evenodd"
  //                   clipRule="evenodd"
  //                   d="M8.136 11.736a.9.9 0 01-1.272 0l-3.6-3.6a.9.9 0 010-1.272l3.6-3.6a.9.9 0 111.272 1.272L5.173 7.5l2.963 2.964a.9.9 0 010 1.272z"
  //                   fill="currentColor"
  //                 />
  //                 <path
  //                   fillRule="evenodd"
  //                   clipRule="evenodd"
  //                   d="M12.636 11.736a.9.9 0 01-1.272 0l-3.6-3.6a.9.9 0 010-1.272l3.6-3.6a.9.9 0 011.272 1.272L9.673 7.5l2.963 2.964a.9.9 0 010 1.272z"
  //                   fill="currentColor"
  //                 />
  //                 <path
  //                   fillRule="evenodd"
  //                   clipRule="evenodd"
  //                   d="M10.894 6.618c-.275.007-.507.013-.694.013a.9.9 0 000 1.8c.211 0 .467-.007.737-.013l.107-.003c.314-.007.653-.015 1-.015.706 0 1.39.031 1.91.134a5.405 5.405 0 012.765 1.474 5.38 5.38 0 011.17 5.867 5.388 5.388 0 01-1.988 2.417 5.41 5.41 0 01-3.001.908.9.9 0 000 1.8 7.21 7.21 0 004-1.21A7.17 7.17 0 0017.99 8.734a7.205 7.205 0 00-3.687-1.965c-.702-.14-1.533-.17-2.26-.169-.37 0-.728.008-1.044.016l-.106.002z"
  //                   fill="currentColor"
  //                 />
  //                 <path
  //                   d="M3 18.621C3.103 19.866 4.343 21 6.15 21c1.936 0 3.15-1.244 3.15-2.733 0-1.659-1.2-2.634-2.866-2.634-.594 0-1.24.195-1.6.548l.516-2h3.537V12.9H4.304L3.27 16.889l1.459.5c.297-.317.8-.549 1.394-.549.852 0 1.614.488 1.614 1.464 0 .878-.71 1.44-1.588 1.44-.968 0-1.627-.635-1.691-1.477L3 18.621z"
  //                   fill="currentColor"
  //                 />
  //               </svg>
  //             </span>
  //           </button>
  //         </div>
  //       </span>
  //       <div className="css-xuhww0" style={{ left: "-47px", top: "-48px" }}>
  //         <div className="css-uu6h57">
  //           <div data-lens-theme="dark" className="css-glgapd">
  //             <div className="css-1qk3pj0">
  //               <span className="css-1kcr850">Step Back</span>
  //               <div className="css-1wtux5t" style={{ borderRadius: "3px" }}>
  //                 <span color="var(--lns-color-grey3)" className="css-j950af">
  //                   J
  //                 </span>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="css-utvy5">
  //       <span>
  //         <div>
  //           <button
  //             aria-label="Step Forward"
  //             data-name="StepForwardBtn"
  //             className="css-1ncqx8v"
  //           >
  //             <span color="body" className="css-bkdk6o">
  //               <svg viewBox="0 0 24 24" fill="none">
  //                 <path
  //                   fillRule="evenodd"
  //                   clipRule="evenodd"
  //                   d="M10.464 3.264a.9.9 0 011.272 0l3.6 3.6a.9.9 0 010 1.272l-3.6 3.6a.9.9 0 11-1.272-1.272L13.427 7.5l-2.963-2.964a.9.9 0 010-1.272z"
  //                   fill="currentColor"
  //                 />
  //                 <path
  //                   fillRule="evenodd"
  //                   clipRule="evenodd"
  //                   d="M14.964 3.264a.9.9 0 011.272 0l3.6 3.6a.9.9 0 010 1.272l-3.6 3.6a.9.9 0 11-1.272-1.272L17.927 7.5l-2.963-2.964a.9.9 0 010-1.272z"
  //                   fill="currentColor"
  //                 />
  //                 <path
  //                   d="M13.8 18.621C13.903 19.866 15.142 21 16.95 21c1.936 0 3.15-1.244 3.15-2.733 0-1.659-1.2-2.634-2.866-2.634-.594 0-1.24.195-1.6.548l.515-2h3.538V12.9h-4.583l-1.033 3.989 1.459.5c.297-.317.8-.549 1.394-.549.852 0 1.614.488 1.614 1.464 0 .878-.71 1.44-1.588 1.44-.968 0-1.627-.635-1.691-1.477l-1.46.354z"
  //                   fill="currentColor"
  //                 />
  //                 <path
  //                   fillRule="evenodd"
  //                   clipRule="evenodd"
  //                   d="M12.206 6.618c.275.007.507.013.694.013a.9.9 0 010 1.8c-.211 0-.467-.007-.737-.013l-.107-.003a41.495 41.495 0 00-1-.015c-.706 0-1.39.031-1.91.134a5.405 5.405 0 00-2.765 1.474 5.38 5.38 0 00-1.17 5.867 5.388 5.388 0 001.988 2.417 5.41 5.41 0 003.001.908.9.9 0 010 1.8 7.21 7.21 0 01-4-1.21 7.188 7.188 0 01-2.652-3.224A7.17 7.17 0 015.11 8.733 7.205 7.205 0 018.796 6.77c.702-.14 1.533-.17 2.26-.169.37 0 .728.008 1.044.016l.106.002z"
  //                   fill="currentColor"
  //                 />
  //               </svg>
  //             </span>
  //           </button>
  //         </div>
  //       </span>
  //       <div className="css-xuhww0" style={{ left: "-59.5px", top: "-48px" }}>
  //         <div className="css-uu6h57">
  //           <div data-lens-theme="dark" className="css-glgapd">
  //             <div className="css-1qk3pj0">
  //               <span className="css-1kcr850">Step Forward</span>
  //               <div className="css-1wtux5t" style={{ borderRadius: "3px" }}>
  //                 <span color="var(--lns-color-grey3)" className="css-j950af">
  //                   L
  //                 </span>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export const ExtraButtons = () => {
  return (
    <div className='css-1gadnng'>
      <div>
        <div className='css-utvy5'>
          <span>
            <div className='css-utvy5'>
              <span>
                <div>
                  <button data-name='SpeedBtn' className='css-1ncqx8v'>
                    <span className='css-rnapth'>1×</span>
                  </button>
                </div>
              </span>
              <div
                className='css-xuhww0'
                style={{ left: '-62.5px', top: '-48px' }}
              >
                <div className='css-uu6h57'>
                  <div data-lens-theme='dark' className='css-glgapd'>
                    <div className='css-1qk3pj0'>
                      <span className='css-1kcr850'>Playback Rate</span>
                      <div
                        className='css-1wtux5t'
                        style={{ borderRadius: '3px' }}
                      >
                        <span
                          color='var(--lns-color-grey3)'
                          className='css-j950af'
                        >
                          S
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </span>
          <div
            className='css-ld7uvw'
            style={{ left: '-157.5px', top: '-135px' }}
          >
            <div className='css-1bkmert'>
              <div className='css-gb8zr7'>
                <div className='css-1qk3pj0'>
                  <span className='css-1kcr850'>Playback Speed</span>
                  <div className='css-1wtux5t' style={{ borderRadius: '3px' }}>
                    <span color='var(--lns-color-grey3)' className='css-j950af'>
                      S
                    </span>
                  </div>
                </div>
                <div className='css-1lifjlz'>
                  <div className='css-7kp13n'>
                    <button className='css-19fgn76'>1×</button>
                  </div>
                  <div className='css-7kp13n'>
                    <button className='css-14nn886'>1.2×</button>
                  </div>
                  <div className='css-7kp13n'>
                    <button className='css-14nn886'>1.5×</button>
                  </div>
                  <div className='css-7kp13n'>
                    <button className='css-14nn886'>1.7×</button>
                  </div>
                  <div className='css-7kp13n'>
                    <button className='css-14nn886'>2×</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-hide-if-fullscreen='true'>
        <div data-hide-ifnot-theater='true'>
          <div className='css-utvy5'>
            <span>
              <div>
                <button aria-label='Default Mode' className='css-1ncqx8v'>
                  <span color='body' className='css-bkdk6o'>
                    <svg viewBox='0 0 24 24' fill='none'>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M5 6h14c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2zm1 10h12c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1z'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </span>
            <div className='css-xuhww0' style={{ left: '-61px', top: '-48px' }}>
              <div className='css-uu6h57'>
                <div data-lens-theme='dark' className='css-glgapd'>
                  <div className='css-1qk3pj0'>
                    <span className='css-1kcr850'>Default Mode</span>
                    <div
                      className='css-1wtux5t'
                      style={{ borderRadius: '3px' }}
                    >
                      <span
                        color='var(--lns-color-grey3)'
                        className='css-j950af'
                      >
                        T
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-hide-if-theater='true'>
          <div className='css-utvy5'>
            <span>
              <div>
                <button aria-label='Theatre Mode' className='css-1ncqx8v'>
                  <span color='body' className='css-bkdk6o'>
                    <svg viewBox='0 0 24 24' fill='none'>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M20 8a1 1 0 00-1-1H5a1 1 0 00-1 1v8a1 1 0 001 1h14a1 1 0 001-1V8zM4 5a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2H4z'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </span>
            <div
              className='css-xuhww0'
              style={{ left: '4px', top: '-552.25px' }}
            >
              <div className='css-uu6h57'>
                <div data-lens-theme='dark' className='css-glgapd'>
                  <div className='css-1qk3pj0'>
                    <span className='css-1kcr850'>Theatre Mode</span>
                    <div
                      className='css-1wtux5t'
                      style={{ borderRadius: '3px' }}
                    >
                      <span
                        color='var(--lns-color-grey3)'
                        className='css-j950af'
                      >
                        T
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='css-utvy5'>
        <span>
          <div>
            <button aria-label='Toggle PIP' className='css-1ncqx8v'>
              <span color='body' className='css-bkdk6o'>
                <svg viewBox='0 0 24 24' fill='none'>
                  <path
                    d='M20 4H4C2.34315 4 1 5.34315 1 7V17C1 18.6569 2.34315 20 4 20H20C21.6569 20 23 18.6569 23 17V7C23 5.34315 21.6569 4 20 4Z'
                    stroke='currentColor'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M19 11H13C12.4477 11 12 11.4477 12 12V16C12 16.5523 12.4477 17 13 17H19C19.5523 17 20 16.5523 20 16V12C20 11.4477 19.5523 11 19 11Z'
                    fill='currentColor'
                  />
                </svg>
              </span>
            </button>
          </div>
        </span>
        <div className='css-xuhww0' style={{ left: '-49px', top: '-48px' }}>
          <div className='css-uu6h57'>
            <div data-lens-theme='dark' className='css-glgapd'>
              <div className='css-1qk3pj0'>
                <span className='css-1kcr850'>Toggle PIP</span>
                <div className='css-1wtux5t' style={{ borderRadius: '3px' }}>
                  <span color='var(--lns-color-grey3)' className='css-j950af'>
                    P
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-hide-ifnot-fullscreen='true'>
        <div className='css-utvy5'>
          <span>
            <div>
              <button
                aria-label='Exit Full Screen'
                data-name='FullScreenBtn'
                className='css-1ncqx8v'
              >
                <span color='body' className='css-bkdk6o'>
                  <svg viewBox='0 0 24 24' fill='none'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M3 15.556a1 1 0 011-1h2.667a2.778 2.778 0 012.777 2.777V20a1 1 0 01-2 0v-2.667a.778.778 0 00-.777-.777H4a1 1 0 01-1-1zM8.444 3a1 1 0 011 1v2.667a2.778 2.778 0 01-2.777 2.777H4a1 1 0 110-2h2.667a.778.778 0 00.777-.777V4a1 1 0 011-1zM21 15.556a1 1 0 00-1-1h-2.667a2.778 2.778 0 00-2.777 2.777V20a1 1 0 002 0v-2.667a.778.778 0 01.777-.777H20a1 1 0 001-1zM15.556 3a1 1 0 00-1 1v2.667a2.778 2.778 0 002.777 2.777H20a1 1 0 100-2h-2.667a.778.778 0 01-.777-.777V4a1 1 0 00-1-1z'
                      fill='currentColor'
                    />
                  </svg>
                </span>
              </button>
            </div>
          </span>
          <div className='css-xuhww0' style={{ left: '4px', top: '-552.25px' }}>
            <div className='css-uu6h57'>
              <div data-lens-theme='dark' className='css-glgapd'>
                <div className='css-1qk3pj0'>
                  <span className='css-1kcr850'>Exit Full Screen</span>
                  <div className='css-1wtux5t' style={{ borderRadius: '3px' }}>
                    <span color='var(--lns-color-grey3)' className='css-j950af'>
                      F
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-hide-if-fullscreen='true'>
        <div className='css-utvy5'>
          <span>
            <div>
              <button
                aria-label='Enter Full Screen'
                data-name='FullScreenBtn'
                className='css-1ncqx8v'
              >
                <span color='body' className='css-bkdk6o'>
                  <svg viewBox='0 0 24 24' fill='none'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M4 14.556a1 1 0 011 1v2.666a.777.777 0 00.778.778h2.666a1 1 0 110 2H5.778A2.778 2.778 0 013 18.222v-2.666a1 1 0 011-1zM9.444 4a1 1 0 01-1 1H5.778A.778.778 0 005 5.778v2.666a1 1 0 11-2 0V5.778A2.778 2.778 0 015.778 3h2.666a1 1 0 011 1zM20 14.556a1 1 0 00-1 1v2.666a.778.778 0 01-.778.778h-2.667a1 1 0 000 2h2.667A2.778 2.778 0 0021 18.222v-2.666a1 1 0 00-1-1zM14.556 4a1 1 0 001 1h2.666a.778.778 0 01.778.778v2.666a1 1 0 002 0V5.778A2.778 2.778 0 0018.222 3h-2.666a1 1 0 00-1 1z'
                      fill='currentColor'
                    />
                  </svg>
                </span>
              </button>
            </div>
          </span>
          <div className='css-xuhww0' style={{ left: '-137px', top: '-48px' }}>
            <div className='css-uu6h57'>
              <div data-lens-theme='dark' className='css-glgapd'>
                <div className='css-1qk3pj0'>
                  <span className='css-1kcr850'>Enter Full Screen</span>
                  <div className='css-1wtux5t' style={{ borderRadius: '3px' }}>
                    <span color='var(--lns-color-grey3)' className='css-j950af'>
                      F
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Emojis = () => {
  return (
    <div data-hide-ifnot-fullscreen='true' className='css-4s4m7w'>
      <div className='css-4s4m7w'>
        <div className='css-utvy5'>
          <span>
            <div>
              <button
                data-name='EmojiReactionButton'
                aria-label='joy'
                className='css-1ncqx8v'
              >
                <div aria-label='joy' className='css-3i8gsp'>
                  😂
                </div>
              </button>
            </div>
          </span>
          <div className='css-xuhww0' style={{ left: '4px', top: '-552.25px' }}>
            <div className='css-uu6h57'>
              <div data-lens-theme='dark' className='css-glgapd'>
                <div className='css-1qk3pj0'>
                  <span className='css-1kcr850'>joy</span>
                  <div className='css-1wtux5t' style={{ borderRadius: '3px' }}>
                    <span color='var(--lns-color-grey3)' className='css-j950af'>
                      1
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='css-utvy5'>
          <span>
            <div>
              <button
                data-name='EmojiReactionButton'
                aria-label='love'
                className='css-1ncqx8v'
              >
                <div aria-label='love' className='css-3i8gsp'>
                  😍
                </div>
              </button>
            </div>
          </span>
          <div className='css-xuhww0' style={{ left: '4px', top: '-552.25px' }}>
            <div className='css-uu6h57'>
              <div data-lens-theme='dark' className='css-glgapd'>
                <div className='css-1qk3pj0'>
                  <span className='css-1kcr850'>love</span>
                  <div className='css-1wtux5t' style={{ borderRadius: '3px' }}>
                    <span color='var(--lns-color-grey3)' className='css-j950af'>
                      2
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='css-utvy5'>
          <span>
            <div>
              <button
                data-name='EmojiReactionButton'
                aria-label='wow'
                className='css-1ncqx8v'
              >
                <div aria-label='wow' className='css-3i8gsp'>
                  😮
                </div>
              </button>
            </div>
          </span>
          <div className='css-xuhww0' style={{ left: '4px', top: '-552.25px' }}>
            <div className='css-uu6h57'>
              <div data-lens-theme='dark' className='css-glgapd'>
                <div className='css-1qk3pj0'>
                  <span className='css-1kcr850'>wow</span>
                  <div className='css-1wtux5t' style={{ borderRadius: '3px' }}>
                    <span color='var(--lns-color-grey3)' className='css-j950af'>
                      3
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='css-utvy5'>
          <span>
            <div>
              <button
                data-name='EmojiReactionButton'
                aria-label='yay'
                className='css-1ncqx8v'
              >
                <div aria-label='yay' className='css-3i8gsp'>
                  🙌
                </div>
              </button>
            </div>
          </span>
          <div className='css-xuhww0' style={{ left: '4px', top: '-552.25px' }}>
            <div className='css-uu6h57'>
              <div data-lens-theme='dark' className='css-glgapd'>
                <div className='css-1qk3pj0'>
                  <span className='css-1kcr850'>yay</span>
                  <div className='css-1wtux5t' style={{ borderRadius: '3px' }}>
                    <span color='var(--lns-color-grey3)' className='css-j950af'>
                      4
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='css-utvy5'>
          <span>
            <div>
              <button
                data-name='EmojiReactionButton'
                aria-label='up'
                className='css-1ncqx8v'
              >
                <div aria-label='up' className='css-3i8gsp'>
                  👍
                </div>
              </button>
            </div>
          </span>
          <div className='css-xuhww0' style={{ left: '4px', top: '-552.25px' }}>
            <div className='css-uu6h57'>
              <div data-lens-theme='dark' className='css-glgapd'>
                <div className='css-1qk3pj0'>
                  <span className='css-1kcr850'>up</span>
                  <div className='css-1wtux5t' style={{ borderRadius: '3px' }}>
                    <span color='var(--lns-color-grey3)' className='css-j950af'>
                      5
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='css-utvy5'>
          <span>
            <div>
              <button
                data-name='EmojiReactionButton'
                aria-label='down'
                className='css-1ncqx8v'
              >
                <div aria-label='down' className='css-3i8gsp'>
                  👎
                </div>
              </button>
            </div>
          </span>
          <div className='css-xuhww0' style={{ left: '4px', top: '-552.25px' }}>
            <div className='css-uu6h57'>
              <div data-lens-theme='dark' className='css-glgapd'>
                <div className='css-1qk3pj0'>
                  <span className='css-1kcr850'>down</span>
                  <div className='css-1wtux5t' style={{ borderRadius: '3px' }}>
                    <span color='var(--lns-color-grey3)' className='css-j950af'>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='css-utvy5'>
          <span>
            <div className='css-utvy5'>
              <span>
                <div>
                  <button aria-label='More reactions' className='css-1ncqx8v'>
                    <span color='body' className='css-bkdk6o'>
                      <svg viewBox='0 0 24 24' fill='none'>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M10 5C6.13401 5 3 8.13401 3 12C3 15.866 6.13401 19 10 19C12.774 19 15.1711 17.3864 16.304 15.0466L17.7818 16.5244C16.2222 19.2011 13.3212 21 10 21C5.02944 21 1 16.9706 1 12C1 7.02944 5.02944 3 10 3C13.8688 3 17.1675 5.44115 18.4397 8.86717C17.7299 8.47856 16.8961 8.39843 16.1351 8.62677C14.9438 6.46475 12.643 5 10 5ZM16.8416 10.5126C16.6407 10.5446 16.4477 10.638 16.2929 10.7929C15.9024 11.1834 15.9024 11.8166 16.2929 12.2071L16.9475 12.8617L18.6341 14.5483L19.2929 15.2071C19.6834 15.5976 20.3166 15.5976 20.7071 15.2071L21.4142 14.5L23.7071 12.2071C24.0976 11.8166 24.0976 11.1834 23.7071 10.7929C23.3166 10.4024 22.6834 10.4024 22.2929 10.7929L20 13.0858L18.9996 12.0854L17.7071 10.7929C17.4714 10.5572 17.1474 10.4638 16.8416 10.5126ZM5.98716 13.0175C6.17497 12.7554 6.47758 12.6 6.79998 12.6H13.2C13.5224 12.6 13.825 12.7554 14.0128 13.0175C14.2006 13.2795 14.2505 13.616 14.1469 13.9213C13.5401 15.7097 11.9263 17 9.99998 17C8.07369 17 6.45983 15.7097 5.85301 13.9213C5.74941 13.616 5.79936 13.2795 5.98716 13.0175ZM7.59995 8.60001C7.04767 8.60001 6.59995 9.04773 6.59995 9.60001C6.59995 10.1523 7.04767 10.6 7.59995 10.6H7.60995C8.16224 10.6 8.60995 10.1523 8.60995 9.60001C8.60995 9.04773 8.16224 8.60001 7.60995 8.60001H7.59995ZM11.4 9.60001C11.4 9.04773 11.8478 8.60001 12.4 8.60001H12.41C12.9623 8.60001 13.41 9.04773 13.41 9.60001C13.41 10.1523 12.9623 10.6 12.41 10.6H12.4C11.8478 10.6 11.4 10.1523 11.4 9.60001Z'
                          fill='currentColor'
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </span>
              <div
                className='css-xuhww0'
                style={{ left: '4px', top: '-552.25px' }}
              >
                <div className='css-uu6h57'>
                  <div data-lens-theme='dark' className='css-glgapd'>
                    <div className='css-1qk3pj0'>
                      <span className='css-1kcr850'>More reactions</span>
                      <div
                        className='css-1wtux5t'
                        style={{ borderRadius: '3px' }}
                      >
                        <span
                          color='var(--lns-color-grey3)'
                          className='css-j950af'
                        >
                          7
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </span>
          <div
            className='css-10z6pux'
            style={{ left: '4px', top: '-552.25px' }}
          >
            <div className='css-1mflkmj'>
              <div className='css-6dw9y0' style={{}}>
                <div className='css-r1mdrn' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='css-utvy5'>
        <span>
          <div>
            <button
              aria-label='Comment'
              data-name='CreateCommentButton'
              className='css-1ncqx8v'
            >
              <span color='body' className='css-bkdk6o'>
                <svg viewBox='0 0 24 24' fill='none'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M5.778 6A.778.778 0 005 6.778v11.808l1.848-1.849a1 1 0 01.708-.293h10.666a.778.778 0 00.778-.777v-8.89A.778.778 0 0018.222 6H5.778zM3.814 4.814A2.778 2.778 0 015.778 4h12.444A2.778 2.778 0 0121 6.778v8.889a2.778 2.778 0 01-2.778 2.777H7.97l-3.263 3.263A1 1 0 013 21V6.778c0-.737.293-1.443.814-1.964z'
                    fill='currentColor'
                  />
                </svg>
              </span>
            </button>
          </div>
        </span>
        <div className='css-xuhww0' style={{ left: '4px', top: '-552.25px' }}>
          <div className='css-uu6h57'>
            <div data-lens-theme='dark' className='css-glgapd'>
              <div className='css-1qk3pj0'>
                <span className='css-1kcr850'>Comment</span>
                <div className='css-1wtux5t' style={{ borderRadius: '3px' }}>
                  <span color='var(--lns-color-grey3)' className='css-j950af'>
                    C
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
