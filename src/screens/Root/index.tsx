import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Route, Switch} from 'react-router-native';
import * as ROUTES from '../../constants/navigation/routes';
import GameScreen from '../Game';
import GameOverScreen from '../GameOver';
import HomeScreen from '../Home';

class Root extends React.Component<{}> {
  render() {
    return (
      <SafeAreaView style={styles.root}>
        <Switch>
          <Route path={ROUTES.HOME} exact component={HomeScreen} />
          <Route path={ROUTES.GAME} exact component={GameScreen} />
          <Route path={ROUTES.GAME_OVER} exact component={GameOverScreen} />
        </Switch>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000000',
  },
});

export default Root;
