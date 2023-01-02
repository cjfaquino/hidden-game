import Level from '../components/Level';

const levelConverter = {
  toFirestore: (level) => ({
    name: level.name,
    items: level.items,
  }),
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Level(data.name.long, data.name.short, data.items);
  },
};

export default levelConverter;
