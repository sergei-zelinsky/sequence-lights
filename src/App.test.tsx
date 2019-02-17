import React from 'react';
import 'react-native';
import TestRenderer from 'react-test-renderer';
import {App} from './app';

test('renders correctly', () => {
  const tree = TestRenderer.create(<App />);

  expect(tree).toBeDefined();
});
