const calculateAverage = (numbers: number[]) =>
  numbers.reduce((prev, current) => prev + current, 0) / numbers.length;

export default calculateAverage;
