interface IIndexManager {
  type: string;
  isActive?: boolean;
  isGrouped?: boolean;
  trackIndex?: number;
  elementIndex?: number;
}

export const timelineFilter = (object: any) => {
  const type = object.type;

  return (
    type === 'group' ||
    type === 'text' ||
    type === 'shape' ||
    type === 'animated_text' ||
    type === 'element' ||
    type === 'video' ||
    type === 'image'
  );
};

export const indexManager = ({
  type,
  isActive,
  isGrouped,
  trackIndex,
  elementIndex,
}: IIndexManager) => {
  if (isActive && !isGrouped) return 99999;

  const isElement = timelineFilter(type);

  if (isElement || type === 'subtitles') {
    if (type === 'subtitles') return 99999;

    if (isElement) {
      if (trackIndex === undefined) return 9999;

      return trackIndex !== undefined
        ? 9999 - trackIndex
        : elementIndex !== undefined
        ? -elementIndex + 1500
        : -trackIndex + 1500;
    }

    return 999;
  }

  return 9;
};
