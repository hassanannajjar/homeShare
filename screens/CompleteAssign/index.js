import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { BackDrop } from '../../assets/icons';
import { Typography } from '../../components';
import { COLORS, DEVICE } from '../../utils/constants';
import CompleteAssignHeader from './CompleteAssignHeader';
import LabelText from './LabelText';

import styles from './style';

const CompleteAssignScreen = ({ navigation }) => (
  <>
    <CompleteAssignHeader navigation={navigation} />
    <View style={styles.container}>
      <View
        style={{
          height: DEVICE.height * 0.1,
          justifyContent: 'space-between',
        }}>
        <LabelText text="Select Property" />
        <TouchableOpacity
          style={{
            backgroundColor: '#F3F6F9',
            height: DEVICE.height * 0.06,
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: '2%',
            width: DEVICE.width * 0.9,
          }}>
          <Typography h6 color={COLORS.secondGrey}>
            Oalwood House 140, Infirmary Road, Sheffield, S6
          </Typography>
          <BackDrop />
        </TouchableOpacity>
      </View>
      <Typography h4 color={COLORS.secondGrey} bold>
        Timings
      </Typography>
    </View>
  </>
);

export default CompleteAssignScreen;
