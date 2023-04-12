import url from 'url';

import { IGenerateVideoChunks, IWord } from '@/types';

export function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export const gcd: any = (a: number, b: number) => {
  return b == 0 ? a : gcd(b, a % b);
};

export const getDuration = async (url: string) => {
  return new Promise<number>((resolve) => {
    const player = new Audio(url);

    player.addEventListener(
      'durationchange',
      function (e) {
        if (this.duration != Infinity) {
          const duration = this.duration;
          player.remove();
          resolve(duration);
        }
      },
      false
    );

    player.load();
    player.currentTime = 24 * 60 * 60; //fake big time
    player.volume = 0;
    player.play();
  });
};

export const generateVideoChunks: (
  args: IGenerateVideoChunks
) => number[][] = ({ videoDuration, transcriptionBlocks, editData }) => {
  // Tidy up code, messy!
  // TODO: This needs to exclude a chunk when trimmed three times
  // i.e if trimmed the end and trimmed again it should be smart enough to know
  return transcriptionBlocks
    .map((t, i) => {
      let start = 0;
      const result: IWord[][] = [];
      const trim: number[][] = editData[i] ? editData[i] : [];
      const words = t?.alternatives[0].words; // TODO: Handle multiple alternatives
      const trimConnector = trim.reduce((acc: number[][], val: number[], j) => {
        const lastTrim = acc[j - 1];

        if (lastTrim) {
          const shouldConnectA = lastTrim[1] === val[0] - 1;
          const shouldConnectB = lastTrim[0] === val[1] + 1;

          if (shouldConnectA) {
            return [
              ...acc.filter((x) => x !== lastTrim),
              [lastTrim[0], val[1]],
            ];
          }

          if (shouldConnectB) {
            return [
              ...acc.filter((x) => x !== lastTrim),
              [val[0], lastTrim[1]],
            ];
          }
        }

        return [...acc, val];
      }, []);

      // document this better
      if (words?.length) {
        for (const [end, newStart] of trimConnector) {
          result.push(words.slice(start, end));
          start = newStart + 1;
        }

        result.push(words.slice(start, words.length));
      }

      const chunks: any = result.reduce(
        (acc: any, val: IWord[], index: number) => {
          if (!val.length) return acc;

          const lastIndex = words.length - 1;
          const isEndTrimmed = trim.some((pair) => pair.includes(lastIndex));
          const nextChunk = transcriptionBlocks[i + 1];
          const isLastChunk = index === result.length - 1;

          if (!isEndTrimmed && !!nextChunk && isLastChunk) {
            // console.log("We need to join with next chunk", {
            //   i,
            //   val,
            //   index
            // });
            const nextStart = nextChunk.alternatives[0].words[0];
            const st = Number(val[0].startTime.seconds);
            const et = Number(
              (
                Number(nextStart.startTime.seconds) +
                nextStart.startTime.nanos / 1000000000
              ).toFixed(2)
            );

            return [
              ...acc,
              [
                Number((st + val[0].startTime.nanos / 1000000000).toFixed(2)),
                et,
              ],
            ];
          } else {
            // TODO: Keep an eye on this logic, its important these timestamps are correct
            // console.log("Ignore joining with next chunk, respect trim");
            const st = Number(val[0].startTime.seconds);
            const et = Number(val[val.length - 1].endTime.seconds);
            const startTime = Number(
              (
                Number((st + val[0].startTime.nanos / 1000000000).toFixed(2)) +
                0.01
              ).toFixed(2)
            );
            const endTime = Number(
              (et + val[val.length - 1].endTime.nanos / 1000000000).toFixed(2)
            ); // if is actual end, we should use videoDuration
            const isEnd =
              i === transcriptionBlocks.length - 1 &&
              index === result.length - 1;

            return [
              ...acc,
              [
                startTime === 0.01 ? 0 : startTime,
                isEnd ? videoDuration : endTime,
              ],
            ];
          }
        },
        []
      );

      return chunks;
    })
    .flat();
};

export const getTweetId = (uri: string) => {
  const statusIdRegex = /\/status(es)?\/(\d+)/;
  const parsed = url.parse(uri);

  if (parsed?.path) {
    if (parsed.host !== 'twitter.com') {
      return '';
    }

    if (parsed.path.indexOf('status') === -1) {
      return '';
    }

    const match = statusIdRegex.exec(parsed.path);
    if (match === null) {
      return '';
    }

    return match[2];
  }

  return '';
};

export const uploadFile = (signedUrl: string, videoFile: File) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', signedUrl, true);
    xhr.onload = () => {
      const status = xhr.status;
      if (status === 200) {
        resolve(xhr);
      } else {
        reject(xhr);
      }
    };

    xhr.onerror = () => {
      reject(xhr);
    };
    xhr.setRequestHeader('Content-Type', videoFile.type);
    xhr.send(videoFile);
  });
};

export const getLottieText = (animationData: any) => {
  const textLayers = animationData.layers
    .filter((layer: any) => layer.t && !layer.nm.includes('_'))
    .map((layer: any) => ({
      name: layer.nm,
      text: layer.t.d.k.map((o: any) => o.s.t)[0],
    }))
    .flat()
    .sort((a: any, b: any) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

  return textLayers;
};

export const setLottieData = ({
  animationText,
  animationData,
  animationColors,
}: {
  animationText?: any;
  animationData: any;
  animationColors?: any;
}) => {
  const textLayers = animationText
    ? animationData.layers
        .filter((layer: any) => layer.t)
        .map((layer: any) => {
          if (animationText[layer.nm]) {
            return {
              ...layer,
              t: {
                ...layer.t,
                d: {
                  ...layer.t.d,
                  k: layer.t.d.k.map((o: any) => {
                    return { ...o, s: { ...o.s, t: animationText[layer.nm] } };
                  }),
                },
              },
            };
          }

          return layer;
        })
    : animationData.layers;

  return {
    ...animationData,
    layers: animationData.layers.map((layer: any) => {
      if (layer.nm === 'TK-ColorSetting' && animationColors) {
        return {
          ...layer,
          ef: layer.ef.map((ef: any, index: number) => ({
            ...ef,
            ef: ef.ef.map((item: any) => {
              if (item.nm === 'Color' && animationColors) {
                return {
                  ...item,
                  v: {
                    ...item.v,
                    k: animationColors[index][0],
                  },
                };
              }

              return item;
            }),
          })),
        };
      }

      const textLayer = textLayers.find((o: any) => o.nm === layer.nm);

      if (textLayer) {
        return textLayer;
      }

      return layer;
    }),
  };
};

export const getLottieColors = (animationData: any) => {
  const colorSetting = animationData.layers.find(
    (layer: any) => layer.nm === 'TK-ColorSetting'
  );

  const colors =
    colorSetting &&
    colorSetting.ef
      .filter((setting: any) => setting.nm.includes('Color'))
      .map((setting: any) => setting.ef.map((item: any) => item.v.k));

  return colors;
};

export const setLottieColors = (animationColors: any, animationData: any) => {
  if (!animationData.layers) return;

  return {
    ...animationData,
    layers: animationData.layers.map((layer: any) => {
      if (layer.nm === 'TK-ColorSetting') {
        return {
          ...layer,
          ef: layer.ef.map((ef: any, index: number) => ({
            ...ef,
            ef: ef.ef.map((item: any) => {
              if (item.nm === 'Color') {
                console.log({ item, index, color: animationColors[index] });
                return { ...item, v: { ...item.v, k: animationColors[index] } };
              }

              return item;
            }),
          })),
        };
      }

      return layer;
    }),
  };
};
