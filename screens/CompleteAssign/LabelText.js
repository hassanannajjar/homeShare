import React from 'react';
import { View } from 'react-native';
import { Typography } from '../../components';

import styles from './style';

const LabelText = ({ text }) => (
  <View style={styles.labelTitle}>
    <Typography h5>{text}</Typography>
    <Typography h5 color="red">
      {' '}
      *{' '}
    </Typography>
  </View>
);

export default LabelText;
