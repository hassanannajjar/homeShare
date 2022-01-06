import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { AcceptIcon } from '../../assets/icons';
import { Typography } from '../../components';
import styles from './style';

const ConfirmConditions = ({ value, onPress }) => (
  <View style={styles.confirmContainer}>
    <TouchableOpacity onPress={onPress}>
      <AcceptIcon isAccepted={value} />
    </TouchableOpacity>
    <Typography h5 style={styles.confirmText}>
      I confirm I filled everything based on the reality
    </Typography>
  </View>
);

export default ConfirmConditions;
