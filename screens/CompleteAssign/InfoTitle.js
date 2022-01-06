import React from 'react';
import { View } from 'react-native';
import { Info } from '../../assets/icons';
import { Typography } from '../../components';
import { COLORS } from '../../utils/constants';
import styles from './style';

const InfoTitle = ({ title }) => (
  <View style={styles.infoTitle}>
    <Info />
    <Typography h5 color={COLORS.secondary} style={styles.infoText}>
      {title}
    </Typography>
  </View>
);

export default InfoTitle;
