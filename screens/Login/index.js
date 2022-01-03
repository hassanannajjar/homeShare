import React from 'react';
import { Image, View } from 'react-native';

import { Button, Typography } from '../../components';
import { COLORS, DEVICE } from '../../utils/constants';
import { splash } from '../../assets/images';
import styles from './style';

const LoginScreen = () => (
  <View style={styles.container}>
    <Image
      source={splash}
      width={DEVICE.width * 0.9}
      height={DEVICE.width * 0.15}
      resizeMode="contain"
      style={{
        width: DEVICE.width * 0.9,
        height: DEVICE.width * 0.15,
      }}
    />
    <Typography h2 color={COLORS.secondary} bold>
      Login Account
    </Typography>
    <Button title="Login" />
  </View>
);

export default LoginScreen;
