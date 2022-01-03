import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ItemsIcon, MapMarker } from '../../assets/icons';
import { COLORS } from '../../utils/constants';

import styles from './style';

const MaintenanceSwitch = ({ selectedScreen, setSelectedScreen }) => (
  <View style={styles.maintenanceSwitch}>
    <TouchableOpacity
      onPress={() => setSelectedScreen(0)}
      style={
        selectedScreen === 0 ? styles.selectedItem : styles.nonSelectedItem
      }>
      <MapMarker fill={selectedScreen === 0 ? COLORS.white : COLORS.primary} />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => setSelectedScreen(1)}
      style={
        selectedScreen === 1 ? styles.selectedItem : styles.nonSelectedItem
      }>
      <ItemsIcon fill={selectedScreen === 1 ? COLORS.white : COLORS.primary} />
    </TouchableOpacity>
  </View>
);

export default MaintenanceSwitch;
