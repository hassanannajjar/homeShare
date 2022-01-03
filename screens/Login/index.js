import React from 'react';
import { Image, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Button, Typography, TextInput } from '../../components';
import { COLORS, DEVICE } from '../../utils/constants';
import { splash } from '../../assets/images';
import { Password, EmailAddress, Google } from '../../assets/icons';
import styles from './style';

const LoginScreen = () => (
  <KeyboardAwareScrollView style={{ height: DEVICE.height }}>
    <View style={styles.container}>
      <Image
        source={splash}
        width={DEVICE.width * 0.9}
        height={DEVICE.width * 0.14}
        resizeMode="contain"
        style={{
          width: DEVICE.width * 0.9,
          height: DEVICE.width * 0.14,
          marginTop: '40%',
        }}
      />
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          height: '25%',
          justifyContent: 'space-between',
        }}>
        <Typography h2 color={COLORS.secondary} bold>
          Login Account
        </Typography>
        <View style={{ height: '70%', justifyContent: 'space-around' }}>
          <TextInput Icon={EmailAddress} placeholder="Email Address" />
          <TextInput Icon={Password} placeholder="Password" />
        </View>
        <TouchableOpacity
          style={{
            width: DEVICE.width * 0.8,
          }}>
          <Typography
            style={{ alignSelf: 'flex-end' }}
            h5
            color={COLORS.primary}>
            Forgot Password?
          </Typography>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: '100%',
          alignItems: 'center',
          height: '20%',
          justifyContent: 'space-between',
        }}>
        <Button title="Login" titleStyle={{ fontWeight: 'bold' }} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              width: '40%',
              borderBottomColor: COLORS.greyOpacity,
            }}
          />
          <Typography
            color={COLORS.thirdGrey}
            style={{ marginHorizontal: '5%' }}
            bold>
            OR
          </Typography>
          <View
            style={{
              borderBottomWidth: 1,
              width: '40%',
              borderBottomColor: COLORS.greyOpacity,
            }}
          />
        </View>
        <Button
          title="  Login with Google"
          titleStyle={{ fontWeight: 'bold', color: COLORS.secondGrey }}
          style={{ backgroundColor: COLORS.greyButton }}
          Icon={Google}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          marginBottom: '5%',
        }}>
        <Typography h5 color={COLORS.secondary} bold>
          New to Homeshare?{' '}
        </Typography>
        <TouchableOpacity>
          <Typography h5 color={COLORS.primary} style={{ fontWeight: '500' }}>
            Register
          </Typography>
        </TouchableOpacity>
      </View>
    </View>
  </KeyboardAwareScrollView>
);

export default LoginScreen;
