import {StyleSheet} from 'react-native';
import {CIRCLE_RADIUS, CONTAINER_SIZE} from './constants';

export default StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: CONTAINER_SIZE,
    height: CONTAINER_SIZE,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startLevelButton: {},
  startLevelButtonText: {
    fontSize: 16,
  },
  basePosition: {
    position: 'absolute',
  },
  circle: {
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
  },
});
