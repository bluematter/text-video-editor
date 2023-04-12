import { FC } from 'react';
import ContentLoader from 'react-content-loader';

interface ILoaderProps {
  rectangle: { width: number; height: number };
}

const Loader: FC<ILoaderProps> = ({ rectangle }) => {
  return (
    <div
      id='loader-node'
      className='relative h-[100%] w-[100%] overflow-hidden rounded border'
    >
      <div className='h-100 w-100 absolute z-10 flex justify-center'>
        <div className='margin-auto relative flex items-center'>
          <button
            type='button'
            aria-label='Play the video'
            data-name='PlayButton'
            className='focus:shadow-outline flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-[#fff] shadow focus:outline-none'
          >
            <svg viewBox='0 0 90 90' fill='none'>
              <path
                fill='#ffffff'
                opacity='0.3'
                d='M45 90C69.8529 90 90 69.8527 90 44.9999C90 20.1471 69.8529 0 45 0C20.1472 0 0 20.1471 0 44.9999C0 69.8527 20.1472 90 45 90Z'
              ></path>
              <path
                fill='#ffffff'
                d='M45 85C67.0914 85 85 67.0913 85 44.9999C85 22.9086 67.0914 5 45 5C22.9086 5 5 22.9086 5 44.9999C5 67.0913 22.9086 85 45 85Z'
              ></path>
              <path
                d='M35 33.268V56.732C35 58.5212 37.0582 59.6083 38.6432 58.6344L57.8999 46.9025C59.3667 46.0192 59.3667 43.9808 57.8999 43.0749L38.6432 31.3656C37.0582 30.3917 35 31.4788 35 33.268Z'
                fill='#aaa'
                opacity='0.7'
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <ContentLoader
        speed={1}
        className='loader rounded'
        viewBox={`0 0 ${rectangle.width} ${rectangle.height}`}
        backgroundColor='#f6f8fa'
        foregroundColor='#F2F1F4'
      >
        <rect
          x='0'
          y='0'
          rx='2'
          ry='2'
          width={rectangle.width}
          height={rectangle.height}
        />
      </ContentLoader>
    </div>
  );
};

export default Loader;
