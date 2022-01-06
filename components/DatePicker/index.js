import React, { useState } from 'react';
import { View } from 'react-native';
import RNDatePicker from 'react-native-date-picker';
import { DEVICE } from '../../utils/constants';
import CommonBottomSheet from '../CommonBottomSheet';

const DatePicker = ({ isVisible, setVisible, headerTitle, time, setTime }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  return (
    <CommonBottomSheet
      isVisible={isVisible}
      setVisible={setVisible}
      transparent
      headerTitle={headerTitle}
      onPressConfirm={() => {
        setTime(currentTime);
        setVisible(false);
      }}
      onPressCancel={() => setVisible(false)}>
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          paddingTop: DEVICE.height * 0.02,
        }}>
        <RNDatePicker
          locale="en"
          date={time || currentTime}
          onDateChange={setCurrentTime}
          mode="time"
        />
      </View>
    </CommonBottomSheet>
  );
};

export default DatePicker;
