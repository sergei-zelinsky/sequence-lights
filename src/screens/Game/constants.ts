import {Dimensions} from 'react-native';

export const CIRCLES = {
  BLUE: 'BLUE',
  GREEN: 'GREEN',
  ORANGE: 'ORANGE',
  PURPLE: 'PURPLE',
  RED: 'RED',
  YELLOW: 'YELLOW',
};

export const CONTAINER_SIZE = Dimensions.get('window').width / 2;
export const CIRCLE_RADIUS = CONTAINER_SIZE * 0.2;
export const BASE_CIRCLE_RADIUS = Math.sqrt(
  2 * Math.pow(CONTAINER_SIZE / 2, 2)
);
export const DEFAULT_DELAY_IN_MS = 1000;
export const FIRST_LEVEL = 1;
export const NONE_INDEX = -1;

export const CIRCLES_IMAGES = {
  [CIRCLES.BLUE]: {
    active: require('./images/circle-blue-full.png'),
    inactive: require('./images/circle-blue.png'),
  },
  [CIRCLES.GREEN]: {
    active: require('./images/circle-green-full.png'),
    inactive: require('./images/circle-green.png'),
  },
  [CIRCLES.ORANGE]: {
    active: require('./images/circle-orange-full.png'),
    inactive: require('./images/circle-orange.png'),
  },
  [CIRCLES.PURPLE]: {
    active: require('./images/circle-purple-full.png'),
    inactive: require('./images/circle-purple.png'),
  },
  [CIRCLES.RED]: {
    active: require('./images/circle-red-full.png'),
    inactive: require('./images/circle-red.png'),
  },
  [CIRCLES.YELLOW]: {
    active: require('./images/circle-yellow-full.png'),
    inactive: require('./images/circle-yellow.png'),
  },
};

export const STATES = {
  NEW_LEVEL: 'NEW_LEVEL',
  SEQUENCE_DEMO: 'SEQUENCE_DEMO',
  PLAY: 'PLAY',
  LEVEL_COMPLETED: 'LEVEL_COMPLETED',
  GAME_OVER: 'GAME_OVER',
};

export const BASE_SEQUENCE_LENGTH = 2;
export const BASE_USER_SCORE = 0;

export const CIRCLES_TO_RENDER = [
  CIRCLES.RED,
  CIRCLES.BLUE,
  CIRCLES.ORANGE,
  CIRCLES.PURPLE,
  CIRCLES.GREEN,
  CIRCLES.YELLOW,
];
