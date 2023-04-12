export const formatSeconds = (totalSeconds: number, format?: 'mm:ss') => {
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  if (format && format === 'mm:ss') {
    return `${('0' + minutes).slice(-2)}:${
      seconds < 10 ? `0${seconds?.toFixed(2)}` : seconds?.toFixed(2)
    }`;
  }

  return `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}:${
    seconds < 10 ? `0${seconds?.toFixed(2)}` : seconds?.toFixed(2)
  }`;
};
