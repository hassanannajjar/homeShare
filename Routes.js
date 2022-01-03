import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, LoginScreen, MaintenanceScreen } from './screens';
import { SCREENS_ROUTES } from './utils/constants';

const Stack = createStackNavigator();

const Routes = ({ user }) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {user ? (
      <>
        <Stack.Screen name={SCREENS_ROUTES.login} component={LoginScreen} />
        <Stack.Screen
          name={SCREENS_ROUTES.Maintenance}
          component={MaintenanceScreen}
        />
      </>
    ) : (
      <Stack.Screen name={SCREENS_ROUTES.home} component={HomeScreen} />
    )}
  </Stack.Navigator>
);

export default Routes;
