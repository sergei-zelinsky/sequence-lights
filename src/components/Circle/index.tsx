import React from 'react';
import {Image, ImageProps, ImageRequireSource, StyleSheet} from 'react-native';

export interface ICircleProps
  extends Pick<ImageProps, Exclude<keyof ImageProps, 'source'>> {
  active: boolean;
  activeImageSource: ImageRequireSource;
  inactiveImageSource: ImageRequireSource;
  name: string;
}

const Circle: React.FunctionComponent<ICircleProps> = ({
  active,
  activeImageSource,
  inactiveImageSource,
  style,
  ...rest
}: ICircleProps) => (
  <Image
    style={[styles.root, style]}
    source={active ? activeImageSource : inactiveImageSource}
    {...rest}
  />
);

const styles = StyleSheet.create({
  root: {},
});

export default Circle;
