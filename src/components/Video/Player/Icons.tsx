import clsx from 'clsx';
import { FC } from 'react';

export const PlaybackIcons: FC<{
  isPlaying: boolean;
  showPlayBackStatus: boolean;
}> = ({ isPlaying, showPlayBackStatus }) => {
  return (
    <div className={clsx(showPlayBackStatus ? 'css-1f0s391' : 'css-fzaaiv')}>
      <div className='css-1eu2t89'>
        <span color='white' className='css-1veskq3'>
          {isPlaying ? (
            <svg viewBox='0 0 24 24' fill='none'>
              <path
                d='M6 6.134v11.732c0 .895 1.03 1.438 1.822.951l9.628-5.866c.733-.441.733-1.46 0-1.914L7.822 5.183C7.029 4.696 6 5.239 6 6.134z'
                fill='currentColor'
              ></path>
            </svg>
          ) : (
            <svg viewBox='0 0 24 24' fill='none'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.188 5C6.979 5 6 5.98 6 7.188v9.625a2.188 2.188 0 004.375 0V7.188C10.375 5.979 9.395 5 8.187 5zm7.874 0c-1.208 0-2.187.98-2.187 2.188v9.625a2.188 2.188 0 004.375 0V7.188C18.25 5.979 17.27 5 16.062 5z'
                fill='currentColor'
              />
            </svg>
          )}
        </span>
      </div>
    </div>
  );
};
