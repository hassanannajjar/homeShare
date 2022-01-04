import React, { useState } from 'react';
import { View } from 'react-native';

import MaintenanceHeader from './MaintenanceHeader';
import MaintenanceItems from './MaintenanceItems';
import MapComponent from './MapComponent';
import styles from './style';

const MaintenanceScreen = ({ navigation }) => {
  const [selectedScreen, setSelectedScreen] = useState(0);
  return (
    <>
      <MaintenanceHeader
        selectedScreen={selectedScreen}
        setSelectedScreen={setSelectedScreen}
        navigation={navigation}
      />
      <View style={styles.container}>
        {selectedScreen === 0 ? (
          <MapComponent />
        ) : (
          <MaintenanceItems navigation={navigation} />
        )}
      </View>
    </>
  );
};

export default MaintenanceScreen;
