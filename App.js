import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar, Text, I18nManager } from 'react-native';
import { isReadyRef, navigationRef } from './utils/rootNavigation';
import DataContext from './utils/context';
import Routes from './Routes';

const App = () => {
  useEffect(() => {
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
    Text.defaultProps = Text.defaultProps || {};
    // Ignore dynamic type scaling on iOS
    Text.defaultProps.allowFontScaling = false;
  });

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      <DataContext.Provider value={{}}>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            isReadyRef.current = true;
          }}>
          <Routes user="userData" />
        </NavigationContainer>
      </DataContext.Provider>
    </>
  );
};

export default App;
