import React from 'react';
import { Text } from 'react-native';
import { RFValue } from '../../utils/constants';
import styles from './style';

const {
  h1Style,
  h2Style,
  h3Style,
  h4Style,
  h5Style,
  h6Style,
  simpleText,
  buttonStyle,
  inputStyle,
} = styles;
const Typography = ({
  onPress,
  children,
  color,
  bold,
  style,
  center,
  align,
  width,
  ...props
}) => {
  // add style to component state
  const { h1, h2, h3, h4, h5, h6, text, button, input } = props;
  return (
    <Text
      style={[
        {
          fontFamily: bold,
          textAlign: align,
          fontSize: RFValue(14),
        },
        color && { color },
        width && { width },
        center && { textAlign: 'center' },
        h1 && h1Style,
        h2 && h2Style,
        h3 && h3Style,
        h4 && h4Style,
        h5 && h5Style,
        h6 && h6Style,
        button && buttonStyle,
        input && inputStyle,
        text && simpleText,
        style,
      ]}
      adjustsFontSizeToFit
      onPress={onPress}
      {...props}>
      {children}
    </Text>
  );
};

export default Typography;
