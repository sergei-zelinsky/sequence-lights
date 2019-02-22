import React from 'react';
import {NativeRouter} from 'react-router-native';
import Root from './screens/Root';

export interface IAppProps {}

export class App extends React.Component<IAppProps> {
  render() {
    return (
      <NativeRouter>
        <Root />
      </NativeRouter>
    );
  }
}
