import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Link} from 'react-router-native';
import Text from '../../components/Text';
import * as ROUTES from '../../constants/navigation/routes';

class Home extends React.Component<{}> {
  render() {
    return (
      <View style={styles.root}>
        <Link to={ROUTES.GAME}>
          <Text>Start Game</Text>
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
});

export default Home;
