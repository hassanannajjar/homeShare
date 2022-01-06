import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Typography } from '../../components';
import { COLORS } from '../../utils/constants';
import LabelText from './LabelText';
import styles from './style';

const DropDownInput = ({
  label,
  value,
  style,
  containerStyle,
  icon,
  onPress,
  placeHolder = '',
  children,
}) => (
  <View style={[styles.dropContainer, containerStyle]}>
    <LabelText text={label} />
    {children || (
      <TouchableOpacity onPress={onPress} style={[styles.dropDownInput, style]}>
        <Typography h6 color={COLORS[value ? 'secondGrey' : 'grey']}>
          {value || placeHolder}
        </Typography>
        {icon}
      </TouchableOpacity>
    )}
  </View>
);

export default DropDownInput;
