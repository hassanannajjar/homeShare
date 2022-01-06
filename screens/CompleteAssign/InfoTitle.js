import React from 'react';
import { View } from 'react-native';
import { Info } from '../../assets/icons';
import { Typography } from '../../components';
import styles from '../../components/Typography/style';
import { COLORS } from '../../utils/constants';

const InfoTitle = ({ title }) => (
  <View style={styles.infoTitle}>
    <Info />
    <Typography h5 color={COLORS.secondary} style={styles.infoText}>
      {title}
    </Typography>
  </View>
);

export default InfoTitle;
