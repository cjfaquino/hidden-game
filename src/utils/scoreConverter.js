import Score from '../components/Score';

const scoreConverter = {
  toFirestore: (score) => ({
    user: score.user,
    score: score.score,
    level: score.level,
    date: score.date,
  }),
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Score(data.user, data.score, data.level, data.date);
  },
};

export default scoreConverter;
