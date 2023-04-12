export interface IGenerateVideoChunks {
  videoDuration: number;
  transcriptionBlocks: ITranscription[];
  editData: number[][][];
}

export interface ITranscription {
  channelTag: number;
  languageCode: string;
  alternatives: IAlternative[];
  resultEndTime: {
    seconds: string;
    nanos: number;
  };
}

export interface IAlternative {
  confidence: number;
  transcript: string;
  words: IWord[];
}

export interface IWordStyles {
  color?: string;
  isBold?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
  isItalic?: boolean;
  isStrike?: boolean;
}

export interface IWord {
  word: string;
  styles?: IWordStyles;
  confidence: number;
  speakerTag: number;
  startTime: {
    seconds: string;
    nanos: number;
  };
  endTime: {
    seconds: string;
    nanos: number;
  };
}

export interface IUpdateTranscription {
  newWords: IWord[];
  endIndex: number;
  startIndex: number;
  transcriptionIndex: number;
}

export interface IRenderData {
  [key: string]: any;
}

export interface IVideoDimensions {
  r: number;
  width: number;
  height: number;
}

export interface ICaptionSettings {
  fixed: number;
}

export interface IMedias {
  [key: string]: {
    size: number;
    src: string;
  };
}

export interface IPageData {
  id: string;
  title: string;
  editData?: number[][][];
  updatedat: string;
  medias?: IMedias;
  duration?: number;
  videoSrc: string;
  thumbnail: string;
  transcription?: ITranscription[];
  introTemplate?: {
    slug: string;
  };
  builderSchema: any;
  share: boolean | null;
  expiration: Date | null;
  edit: boolean | null;
  comments: boolean | null;
  duplicate: boolean | null;
  indexing: boolean | null;
}
