import {action, observable, reaction} from 'mobx';
import {observer} from 'mobx-react';
import * as R from 'ramda';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {RouteComponentProps} from 'react-router-native';
import Circle from '../../components/Circle';
import Text from '../../components/Text';
import TouchableCircle from '../../components/TouchableCircle';
import * as ROUTES from '../../constants/navigation/routes';
import * as utils from '../../utils';
import {
  BASE_CIRCLE_RADIUS,
  BASE_SEQUENCE_LENGTH,
  BASE_USER_SCORE,
  CIRCLE_RADIUS,
  CIRCLES_IMAGES,
  CIRCLES_TO_RENDER,
  CONTAINER_SIZE,
  DEFAULT_DELAY_IN_MS,
  FIRST_LEVEL,
  NONE_INDEX,
  STATES,
} from './constants';
import styles from './styles';

const createRamdomSequence = utils.createRamdomSequence(CIRCLES_TO_RENDER);

const getElementPositionOnCircle = utils.getElementPositionOnCircle(
  CONTAINER_SIZE / 2,
  CONTAINER_SIZE / 2,
  BASE_CIRCLE_RADIUS,
  CIRCLES_TO_RENDER.length
);

const createCirclePositionStyle = R.compose(
  ({x, y}) => ({
    left: x - CIRCLE_RADIUS,
    top: y - CIRCLE_RADIUS,
  }),
  getElementPositionOnCircle
);

const delay = utils.delay.bind(null, DEFAULT_DELAY_IN_MS);

interface IGameProps extends RouteComponentProps {}

@observer
class Game extends React.Component<IGameProps> {
  userScore = BASE_USER_SCORE;
  sequenceLength = BASE_SEQUENCE_LENGTH;

  @observable
  currentState = STATES.NEW_LEVEL;

  @observable
  level = FIRST_LEVEL;

  @observable
  levelSequence: string[] = createRamdomSequence(this.sequenceLength);

  @observable
  sequenceElementIndex = NONE_INDEX;

  @observable
  isSequenceElementActive = false;

  @observable
  userSequence: string[] = [];

  componentDidMount() {
    reaction(() => this.currentState, this.handleCurrentStateChange);

    reaction(() => this.userSequence, this.handleUserSequenceChange);
  }

  handleCurrentStateChange = async (currentState: string) => {
    if (currentState === STATES.NEW_LEVEL) {
      this.prepareCurrentLevel();
    }

    if (currentState === STATES.SEQUENCE_DEMO) {
      this.startSequenceDemo();
    }

    if (currentState === STATES.LEVEL_COMPLETED) {
      await delay();

      this.goToState(STATES.NEW_LEVEL);
    }

    if (currentState === STATES.GAME_OVER) {
      this.props.history.push(ROUTES.GAME_OVER, {
        score: this.userScore,
      });
    }
  }

  handleUserSequenceChange = (userSequence: string[]) => {
    if (!userSequence.length) {
      return;
    }

    const isUserSequenceCorrect = R.equals(
      R.take(userSequence.length, this.levelSequence),
      userSequence
    );

    const isCurrentLevelCompleted =
      userSequence.length === this.levelSequence.length;

    if (isUserSequenceCorrect) {
      this.userScore++;

      if (isCurrentLevelCompleted) {
        this.goToState(STATES.LEVEL_COMPLETED);
      }
    } else {
      this.goToState(STATES.GAME_OVER);
    }
  }

  @action
  prepareCurrentLevel = () => {
    this.sequenceLength++;
    this.userSequence = [];
    this.levelSequence = createRamdomSequence(this.sequenceLength);
    this.sequenceElementIndex = NONE_INDEX;
    this.level++;
  }

  @action
  updateUserSequence = (circleName: string) => {
    this.userSequence = [...this.userSequence, circleName];
  }

  @action
  goToState = (state: string) => {
    this.currentState = state;
  }

  @action
  startSequenceDemo = async () => {
    const maxSequenceElementIndex = this.levelSequence.length - 1;

    await delay();

    while (this.sequenceElementIndex < maxSequenceElementIndex) {
      this.sequenceElementIndex++;

      await delay();

      this.isSequenceElementActive = true;

      await delay();

      this.isSequenceElementActive = false;
    }

    this.goToState(STATES.PLAY);
  }

  renderCircle = (circleName: string, elementIndex: number) => {
    const positionStyle = createCirclePositionStyle(elementIndex);

    const baseProps = {
      name: circleName,
      key: circleName,
      activeImageSource: CIRCLES_IMAGES[circleName].active,
      inactiveImageSource: CIRCLES_IMAGES[circleName].inactive,
    };

    if (this.isCurrentState(STATES.PLAY)) {
      return (
        <TouchableCircle
          circleStyle={styles.circle}
          onPress={this.updateUserSequence}
          style={[styles.basePosition, positionStyle]}
          {...baseProps}
        />
      );
    }

    const currentSequenceElement = this.levelSequence[
      this.sequenceElementIndex
    ];

    const isActive =
      currentSequenceElement === circleName && this.isSequenceElementActive;

    return (
      <Circle
        style={[styles.basePosition, positionStyle, styles.circle]}
        active={isActive}
        {...baseProps}
      />
    );
  }

  isCurrentState = (state: string) => state === this.currentState;

  handleStartLevelButtonPress = () => {
    this.goToState(STATES.SEQUENCE_DEMO);
  }

  render() {
    const circles = CIRCLES_TO_RENDER.map(this.renderCircle);

    return (
      <View style={styles.root}>
        <View style={styles.container}>
          {circles}

          <View style={styles.info}>
            {this.isCurrentState(STATES.NEW_LEVEL) && (
              <TouchableOpacity
                onPress={this.handleStartLevelButtonPress}
                style={styles.startLevelButton}
              >
                <Text style={styles.startLevelButtonText}>
                  {this.level === FIRST_LEVEL ? 'Play' : 'Next Level'}
                </Text>
              </TouchableOpacity>
            )}

            {this.isCurrentState(STATES.SEQUENCE_DEMO) && (
              <Text>
                {this.sequenceElementIndex === NONE_INDEX
                  ? 'Start in 1...'
                  : `${this.sequenceLength} TAPS`}
              </Text>
            )}

            {this.isCurrentState(STATES.PLAY) && <Text>Repeat</Text>}

            {this.isCurrentState(STATES.LEVEL_COMPLETED) && (
              <Text>Level Completed</Text>
            )}
          </View>
        </View>
      </View>
    );
  }
}

export default Game;
