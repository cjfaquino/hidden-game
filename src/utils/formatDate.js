const formatDate = (secs) => {
  const t = new Date(Date.UTC(1970, 0, 1)); // Epoch
  t.setUTCSeconds(secs);

  const options = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  };
  return t.toLocaleString('en-US', options);
};

export default formatDate;
