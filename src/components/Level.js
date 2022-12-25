class Level {
  constructor(longName, shortName, imgUrl, pos1, pos2, pos3) {
    this.name = { long: longName, short: shortName };
    this.imgUrl = imgUrl;
    this.items = [pos1, pos2, pos3];
  }
}

export default Level;
