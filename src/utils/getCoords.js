const getCoords = (e) => {
  const x = e.pageX - e.currentTarget.offsetLeft;
  const y = e.pageY - e.currentTarget.offsetTop;

  const xPerc = (x / e.currentTarget.clientWidth) * 100;
  const yPerc = (y / e.currentTarget.clientHeight) * 100;

  return {
    x: xPerc,
    y: yPerc,
    clientWidth: e.currentTarget.clientWidth,
    clientHeight: e.currentTarget.clientHeight,
    clientY: e.clientY,
  };
};

export default getCoords;
