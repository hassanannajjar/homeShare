import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  BackDrop,
  UploadIcon,
  Info,
  TimeIcon,
  AcceptIcon,
} from '../../assets/icons';
import { Button, CommonBottomSheet, Typography } from '../../components';
import { COLORS, DEVICE } from '../../utils/constants';
import CompleteAssignHeader from './CompleteAssignHeader';
import LabelText from './LabelText';

import styles from './style';

const CompleteAssignScreen = ({ navigation }) => {
  const [isVisible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    'Baywood House 140, Infirmary Road, Sheffield, S6'
  );
  const [startDate, setStartDate] = useState('10:30 PM');
  const [finishDate, setFinishDate] = useState('12:30 PM');
  const [isAccept, setAccept] = useState(false);

  const properties = [
    'Baywood House 140, Infirmary Road, Sheffield, S6',
    'Josh 20, Yafo Road, Sheffield, S2',
    'Walsh House, Final Road, London, A6',
    'Alex 0, Jelly Road, West London, L52',
  ];

  const ListItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setSelectedValue(item);
        setVisible(false);
      }}
      style={styles.bottomSheetItem}>
      <Typography h6 bold color={COLORS.secondGrey}>
        {item}
      </Typography>
    </TouchableOpacity>
  );

  const DropDownInput = ({
    label,
    value,
    style,
    containerStyle,
    icon,
    onPress,
  }) => (
    <View style={[styles.dropContainer, containerStyle]}>
      <LabelText text={label} />
      <TouchableOpacity onPress={onPress} style={[styles.dropDownInput, style]}>
        <Typography h6 color={COLORS.secondGrey}>
          {value}
        </Typography>
        {icon}
      </TouchableOpacity>
    </View>
  );

  const FormTitle = ({ title }) => (
    <Typography
      h4
      color={COLORS.secondGrey}
      bold
      style={{ marginVertical: '4%' }}>
      {title}
    </Typography>
  );

  const InfoTitle = ({ title }) => (
    <View
      style={{
        backgroundColor: '#2195F313',
        borderRadius: 5,
        paddingHorizontal: '2%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: '3%',
        justifyContent: 'space-around',
        width: '100%',
      }}>
      <Info />
      <Typography
        h5
        color={COLORS.secondary}
        style={{ marginLeft: '2%', width: '90%' }}>
        {title}
      </Typography>
    </View>
  );

  const UploadImageComponent = () => (
    <TouchableOpacity
      style={{
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        flexDirection: 'row',
        paddingVertical: '3%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '3%',
      }}>
      <UploadIcon />
      <Typography h5 color={COLORS.primary} style={{ marginLeft: '2%' }}>
        UPLOAD PICTURE
      </Typography>
    </TouchableOpacity>
  );

  const ConfirmConditions = () => (
    <View style={{ flexDirection: 'row', marginVertical: '2%' }}>
      <TouchableOpacity onPress={() => setAccept(!isAccept)}>
        <AcceptIcon isAccepted={isAccept} />
      </TouchableOpacity>
      <Typography h5 style={{ marginLeft: '2%' }}>
        I confirm I filled everything based on the reality
      </Typography>
    </View>
  );

  return (
    <>
      {/* header component */}
      <CompleteAssignHeader navigation={navigation} />

      <KeyboardAwareScrollView style={{ height: DEVICE.height }}>
        {/* form items  */}
        <View style={styles.container}>
          <DropDownInput
            label="Select Property"
            value={selectedValue}
            icon={<BackDrop />}
            onPress={() => setVisible(true)}
          />
          <FormTitle title="Timings" />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <DropDownInput
              label="Start Time"
              value={startDate}
              icon={<TimeIcon />}
              onPress={() => {}}
              containerStyle={{ width: '45%' }}
              style={{ width: '100%', paddingLeft: '5%' }}
            />
            <DropDownInput
              label="Finish Time"
              value={finishDate}
              icon={<TimeIcon />}
              onPress={() => {}}
              containerStyle={{ width: '45%' }}
              style={{ width: '100%', paddingLeft: '5%' }}
            />
          </View>

          {/* First Step */}
          <FormTitle title="First Step" />
          <InfoTitle
            title="You must upload a pictue(or more than one) of the issue before starting
        to fix it."
          />
          <UploadImageComponent />
          <FormTitle title="Second Step" />
          <DropDownInput
            label="Complete Information"
            value={selectedValue}
            icon={<BackDrop />}
            onPress={() => {}}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <DropDownInput
              label="Total Costs"
              value="Enter Cost"
              onPress={() => {}}
              containerStyle={{ width: '45%', marginVertical: '3%' }}
              style={{ width: '100%', paddingLeft: '5%' }}
            />
            <DropDownInput
              label="Status"
              value="Select Status"
              icon={<BackDrop />}
              onPress={() => {}}
              containerStyle={{ width: '45%', marginVertical: '3%' }}
              style={{ width: '100%', paddingLeft: '5%' }}
            />
          </View>
          {/* Third Step */}
          <FormTitle title="Third Step" />
          <InfoTitle title="Upload at least one picture of the fixed issue" />
          <UploadImageComponent />
          {/* last Step */}
          <FormTitle title="Last Step" />
          <Typography>Confirm and Submit the form</Typography>
          <ConfirmConditions />
          <Button title="Submit" titleStyle={{ fontWeight: 'bold' }} />
        </View>
      </KeyboardAwareScrollView>
      {/* properties list bottom sheet  */}
      <CommonBottomSheet
        isVisible={isVisible}
        setVisible={setVisible}
        headerTitle="Properties"
        okButton={false}>
        {properties.map((item, index) => (
          <ListItem item={item} key={index.toString()} />
        ))}
        <View style={{ marginBottom: '4%' }} />
      </CommonBottomSheet>
    </>
  );
};

export default CompleteAssignScreen;
