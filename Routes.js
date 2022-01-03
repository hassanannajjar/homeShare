import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, LoginScreen } from './screens';

const Stack = createStackNavigator();

const Routes = ({ user }) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {user ? (
      <>
        <Stack.Screen name="Login" component={LoginScreen} />
      </>
    ) : (
      <Stack.Screen name="Home" component={HomeScreen} />
    )}
  </Stack.Navigator>
);

export default Routes;
