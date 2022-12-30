export default class Score {
  constructor(score, user, level, date = new Date()) {
    this.user = user;
    this.score = score;
    this.level = level;
    this.date = date;
  }
}
