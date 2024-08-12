const generateRandomNumber: (maxcNumber: number) => number = (
  maxNumber: number,
) => {
  return Math.floor(Math.random() * maxNumber);
};

export { generateRandomNumber };
