import { generateRandomNumber } from "./Number";

const generateRandomColor: () => string = () => {
  const [r, g, b] = [
    generateRandomNumber(256),
    generateRandomNumber(256),
    generateRandomNumber(256),
  ];
  return `rgba(${r} ${g} ${b} / 0.2)`;
};

export { generateRandomColor };
