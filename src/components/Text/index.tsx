import React from 'react';
import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';

interface ITextProps extends RNTextProps {}

const Text: React.FunctionComponent<ITextProps> = ({
  style,
  ...rest
}: ITextProps) => <RNText style={[styles.root, style]} {...rest} />;

const styles = StyleSheet.create({
  root: {
    color: '#ffffff',
    fontWeight: '600',
  },
});

export default Text;
