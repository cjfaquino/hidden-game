export default class Score {
  constructor(duration, name = 'Anonymous') {
    this.date = new Date();
    this.score = duration;
    this.name = name;
  }
}
