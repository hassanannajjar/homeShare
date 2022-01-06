import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Typography } from '../../components';
import { COLORS } from '../../utils/constants';
import styles from './style';

const ListItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.bottomSheetItem}>
    <Typography h6 bold color={COLORS.secondGrey}>
      {item}
    </Typography>
  </TouchableOpacity>
);

export default ListItem;
