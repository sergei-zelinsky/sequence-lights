import {observable} from 'mobx';
import {observer} from 'mobx-react';
import React from 'react';
import {ImageStyle, StyleProp, TouchableOpacity} from 'react-native';
import Circle, {ICircleProps} from '../Circle';

export interface ITouchableCircleProps
  extends Pick<ICircleProps, Exclude<keyof ICircleProps, 'active'>> {
  onPress: (circleName: any) => void;
  circleStyle?: StyleProp<ImageStyle>;
}

@observer
class TouchableCircle extends React.Component<ITouchableCircleProps> {
  @observable
  active = false;

  handlePressIn = () => {
    this.active = true;
  }

  handlePressOut = () => {
    this.active = false;
  }

  handlePress = () => {
    this.props.onPress(this.props.name);
  }

  render() {
    const {circleStyle, onPress, style, ...circleProps} = this.props;
    return (
      <TouchableOpacity
        style={style}
        activeOpacity={1}
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}
        onPress={this.handlePress}
      >
        <Circle style={circleStyle} active={this.active} {...circleProps} />
      </TouchableOpacity>
    );
  }
}

export default TouchableCircle;
