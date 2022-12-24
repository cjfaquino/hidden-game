const fancyTime = (seconds) => {
  // Hours, minutes and seconds
  const hrs = Math.floor(seconds / 3600).toString();
  const mins = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0');

  let time = `${mins}:${secs}`;

  if (hrs > 0) {
    time = `${hrs}:${mins}:${secs}`;
  }
  return time;
};

export default fancyTime;
