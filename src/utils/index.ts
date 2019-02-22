import * as R from 'ramda';

const getRandomElementFromArray = R.converge(R.nth, [
  R.compose(
    length => Math.floor(Math.random() * (length - 1)),
    R.length
  ),
  R.identity,
]);

export const createRamdomSequence = R.curry((arr: any[], length: number) =>
  R.map(() => getRandomElementFromArray(arr), [...new Array(length)])
);

export const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const getElementPositionOnCircle = R.curry(
  (x0: number, y0: number, radius: number, count: number, current: number) => {
    const angle = (2 * Math.PI * current) / count;

    return {
      x: x0 - radius * Math.sin(angle),
      y: y0 - radius * Math.cos(angle),
    };
  }
);
