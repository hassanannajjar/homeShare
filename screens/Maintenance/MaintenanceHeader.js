import React from 'react';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import { Back } from '../../assets/icons';
import { Typography } from '../../components';
import { COLORS } from '../../utils/constants';

import styles from './style';
import MaintenanceSwitch from './Switch';

const MaintenanceHeader = ({
  selectedScreen,
  setSelectedScreen,
  navigation,
}) => (
  <View style={styles.header}>
    <StatusBar backgroundColor="#FFFFFF00" barStyle="dark-content" />
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
    <MaintenanceSwitch
      selectedScreen={selectedScreen}
      setSelectedScreen={setSelectedScreen}
    />
  </View>
);

export default MaintenanceHeader;
