import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Back, MapMarker } from '../../assets/icons';
import { Typography } from '../../components';
import { COLORS } from '../../utils/constants';

import styles from './style';

const CompleteAssignHeader = ({ navigation }) => (
  <View style={styles.header}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        justifyContent: 'space-around',
      }}>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Back />
      </TouchableOpacity>
      <Typography h3 color={COLORS.secondary} bold>
        Maintenance
      </Typography>
    </View>
    <TouchableOpacity
      onPress={() => navigation.pop()}
      style={styles.markerMapContainer}>
      <View style={styles.mapMarker}>
        <MapMarker />
      </View>
      <Typography h5 color={COLORS.secondGrey} bold>
        Map View
      </Typography>
    </TouchableOpacity>
  </View>
);

export default CompleteAssignHeader;
