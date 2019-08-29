const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomChar = () => String.fromCharCode(getRandomInt(97, 122));

const getRandomWord = () =>
  Array(getRandomInt(5, 10))
    .fill()
    .map(() => getRandomChar())
    .join('');

export { getRandomInt, getRandomChar, getRandomWord };
