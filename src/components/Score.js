export default class Score {
  constructor(score, user, level, date = new Date()) {
    let newUser = user;
    if (user === '') newUser = 'Anonymous';
    this.user = newUser;
    this.score = score;
    this.level = level;
    this.date = date;
  }
}
