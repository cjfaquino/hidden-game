class Level {
  constructor(
    longName,
    shortName,
    items,
    imgUrl,
    loadingUrl,
    thumbnailUrl,
    thumbLoadingUrl
  ) {
    this.name = { long: longName, short: shortName };
    this.imgUrl = imgUrl;
    this.thumbUrl = thumbnailUrl;
    this.loadingUrl = loadingUrl;
    this.thumbLoadingUrl = thumbLoadingUrl;
    this.items = items;
  }
}

export default Level;
