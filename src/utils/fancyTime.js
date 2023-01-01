const fancyTime = (duration) => {
  const seconds = duration / 10;
  // Hours, minutes and seconds
  const hh = Math.floor(seconds / 3600).toString();
  const mm = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const ss = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0');

  const S = Math.floor(duration % 10);

  let time = `${mm}:${ss}.${S}`;

  if (hh > 0) {
    time = `59:59.9`;
  }
  return time;
};

export default fancyTime;
