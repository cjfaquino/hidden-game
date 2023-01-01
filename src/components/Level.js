class Level {
  constructor(
    longName,
    shortName,
    imgUrl,
    loadingUrl,
    thumbnailUrl,
    thumbLoadingUrl,
    pos1,
    pos2,
    pos3
  ) {
    this.name = { long: longName, short: shortName };
    this.imgUrl = imgUrl;
    this.thumbUrl = thumbnailUrl;
    this.loadingUrl = loadingUrl;
    this.thumbLoadingUrl = thumbLoadingUrl;
    this.items = [pos1, pos2, pos3];
  }
}

export default Level;
