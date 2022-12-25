class Level {
  constructor(longName, shorName, imgUrl, pos1, pos2, pos3) {
    this.name = { long: longName, short: shorName };
    this.imgUrl = imgUrl;
    this.pos1 = pos1;
    this.pos2 = pos2;
    this.pos3 = pos3;
  }
}

export default Level;
