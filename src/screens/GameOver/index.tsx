import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Link} from 'react-router-native';
import {RouteComponentProps} from 'react-router-native';
import Text from '../../components/Text';
import * as ROUTES from '../../constants/navigation/routes';

interface IGameOverProps extends RouteComponentProps {}

class GameOver extends React.Component<IGameOverProps> {
  render() {
    const {location} = this.props;
    return (
      <View style={styles.root}>
        <Text style={styles.title}>Game Over</Text>
        <Text style={styles.score}>Score: {location.state.score} Taps</Text>
        <Link to={ROUTES.GAME}>
          <Text>Play Again</Text>
        </Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 8,
  },
  score: {
    marginBottom: 64,
  },
});

export default GameOver;
