class Level {
  constructor(longName, shortName, imgUrl, thumbnailUrl, pos1, pos2, pos3) {
    this.name = { long: longName, short: shortName };
    this.imgUrl = imgUrl;
    this.thumbUrl = thumbnailUrl;
    this.items = [pos1, pos2, pos3];
  }
}

export default Level;
