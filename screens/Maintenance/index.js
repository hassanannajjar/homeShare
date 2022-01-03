import React from 'react';
import { View } from 'react-native';

import MaintenanceHeader from './MaintenanceHeader';
import styles from './style';

const MaintenanceScreen = () => (
  <View style={styles.container}>
    <MaintenanceHeader />
  </View>
);

export default MaintenanceScreen;
