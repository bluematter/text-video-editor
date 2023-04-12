export const IS_DEV = process.env.NODE_ENV === 'development' ? true : false;
export const IS_STAGING = process.env.ENV === 'staging' ? true : false;
export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';

export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false;

export const ASSETS_PATH = IS_DEV
  ? 'https://motionbox-assets-staging.vercel.app'
  : IS_STAGING
  ? 'https://motionbox-assets-staging.vercel.app'
  : 'https://motionbox-assets.vercel.app';

export const CUSTOM_FONTS = ['Gotham Ultra', 'League Gothic'];
