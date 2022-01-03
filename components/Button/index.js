import React from 'react';
import { TouchableOpacity } from 'react-native';

import { COLORS } from '../../utils/constants';
import Typography from '../Typography';
import styles from './style';

const Button = ({
  title,
  titleStyle,
  style,
  content,
  onPress,
  Icon,
  disabled,
}) => (
  <TouchableOpacity
    // the opacity when click btn
    activeOpacity={0.5}
    style={[
      styles.buttonContainer,
      {
        backgroundColor: COLORS.primary,
        width: '100%',
        justifyContent: content ? 'space-between' : 'center',
        flexDirection: 'row',
      },
      disabled && { backgroundColor: COLORS.grey },
      style,
    ]}
    onPress={onPress}
    disabled={disabled}>
    {/* add the icon if it send as props like myOrders buttons */}
    {Icon && <Icon />}
    {/* this text well handle in deferent style if it shown in my orders screen  */}
    {title && (
      <Typography style={titleStyle} button color="white">
        {title}
      </Typography>
    )}

    {content && (
      <Typography button color="white">
        {content}
      </Typography>
    )}
  </TouchableOpacity>
);

export default Button;
