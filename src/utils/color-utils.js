const getRandomColor = () =>
  '#' + ((Math.random() * 0xffffff) << 0).toString(16);

export { getRandomColor };
