import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { isReadyRef, navigationRef } from './utils/rootNavigation';
import DataContext from './utils/context';
import Routes from './Routes';

const App = () => (
  <DataContext.Provider value={{}}>
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <Routes user="userData" />
    </NavigationContainer>
  </DataContext.Provider>
);

export default App;
