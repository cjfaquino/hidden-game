const formatDate = (secs) => {
  const t = new Date(Date.UTC(1970, 0, 1)); // Epoch
  t.setUTCSeconds(secs);
  return t.toLocaleDateString();
};

export default formatDate;
