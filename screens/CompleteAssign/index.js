import moment from 'moment';
import React, { useState } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { BackDrop, TimeIcon } from '../../assets/icons';
import {
  Button,
  CommonBottomSheet,
  DatePicker,
  TextInput,
  Typography,
} from '../../components';
import CompleteAssignHeader from './CompleteAssignHeader';
import ConfirmConditions from './ConfirmConditions';
import DropDownInput from './DropDownInput';
import FormTitle from './FormTitle';
import InfoTitle from './InfoTitle';
import ListItem from './ListItem';

import styles from './style';
import UploadedImage from './UploadedImage';
import UploadImageComponent from './UploadImageComponent';

const CompleteAssignScreen = ({ navigation }) => {
  const [isVisible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    'Baywood House 140, Infirmary Road, Sheffield, S6'
  );
  const [selectedStatus, setSelectedStatus] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());
  const [isAccept, setAccept] = useState(false);
  const [viewDatePicker, setViewDatePicker] = useState(false);
  const [selectedImages, setSelectedImages] = useState({
    first: '',
    second: '',
  });

  const properties = [
    'Baywood House 140, Infirmary Road, Sheffield, S6',
    'Josh 20, Yafo Road, Sheffield, S2',
    'Walsh House, Final Road, London, A6',
    'Alex 0, Jelly Road, West London, L52',
  ];

  const status = ['Pending', 'In Progress', 'Completed', 'Cancelled'];

  return (
    <>
      {/* header component */}
      <CompleteAssignHeader navigation={navigation} />

      <KeyboardAwareScrollView style={styles.keyboardVoiding}>
        {/* form items  */}
        <View style={styles.container}>
          <DropDownInput
            label="Select Property"
            value={selectedValue}
            icon={<BackDrop />}
            onPress={() => setVisible('property')}
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
              value={startDate && moment(startDate).format('LT')}
              icon={<TimeIcon />}
              onPress={() => setViewDatePicker('Start Time')}
              containerStyle={{ width: '45%' }}
              style={{ width: '100%', paddingLeft: '5%' }}
            />
            <DropDownInput
              label="Finish Time"
              value={finishDate && moment(finishDate).format('LT')}
              icon={<TimeIcon />}
              onPress={() => setViewDatePicker('Finish Time')}
              containerStyle={{ width: '45%' }}
              style={{ width: '100%', paddingLeft: '5%' }}
            />
          </View>

          {/* First Step */}
          <FormTitle title="First Step" />
          <InfoTitle
            title="You must upload a picture(or more than one) of the issue before starting
        to fix it."
          />
          <UploadImageComponent
            onSuccess={uri => {
              setSelectedImages(lastImages => ({
                ...lastImages,
                first: uri,
              }));
            }}
          />
          <UploadedImage
            value={selectedImages.first}
            onPressRemove={() =>
              setSelectedImages(lastImages => ({
                ...lastImages,
                first: '',
              }))
            }
          />

          {/* Second Step */}
          <FormTitle title="Second Step" />
          {/* textArea */}
          <DropDownInput
            label="Complete Information"
            containerStyle={styles.textAreaContainer}>
            <TextInput
              placeholder="Description of the solution"
              style={[styles.dropDownInput, styles.textArea]}
              numberOfLines={5}
              multiline
            />
          </DropDownInput>
          <View style={styles.costStatusContainer}>
            <DropDownInput
              label="Total Costs"
              containerStyle={styles.costContainer}>
              <TextInput
                placeholder="Enter Cost"
                style={[styles.dropDownInput, styles.costInput]}
                number
              />
            </DropDownInput>
            <DropDownInput
              label="Status"
              placeHolder="Select Status"
              value={selectedStatus}
              icon={<BackDrop />}
              onPress={() => setVisible('status')}
              containerStyle={styles.costContainer}
              style={styles.status}
            />
          </View>

          {/* Third Step */}
          <FormTitle title="Third Step" />
          <InfoTitle title="Upload at least one picture of the fixed issue" />
          <UploadImageComponent
            onSuccess={uri => {
              setSelectedImages(lastImages => ({
                ...lastImages,
                second: uri,
              }));
            }}
          />
          <UploadedImage
            value={selectedImages.second}
            onPressRemove={() =>
              setSelectedImages(lastImages => ({
                ...lastImages,
                second: '',
              }))
            }
          />

          {/* last Step */}
          <FormTitle title="Last Step" />
          <Typography>Confirm and Submit the form</Typography>
          <ConfirmConditions
            value={isAccept}
            onPress={() => setAccept(!isAccept)}
          />
          <Button title="Submit" titleStyle={{ fontWeight: 'bold' }} />
        </View>
      </KeyboardAwareScrollView>

      {/* properties list bottom sheet  */}
      <CommonBottomSheet
        isVisible={isVisible}
        setVisible={setVisible}
        headerTitle={
          isVisible === 'property' ? 'Select Property' : 'Select Status'
        }
        okButton={false}>
        {(isVisible === 'property' ? properties : status).map((item, index) => (
          <ListItem
            item={item}
            key={index.toString()}
            onPress={() => {
              if (isVisible === 'property') {
                setSelectedValue(item);
              } else {
                setSelectedStatus(item);
              }
              setVisible(false);
            }}
          />
        ))}
        <View style={{ marginBottom: '4%' }} />
      </CommonBottomSheet>

      {/* date picker bottom sheet  */}
      <DatePicker
        headerTitle={viewDatePicker}
        isVisible={viewDatePicker}
        setVisible={setViewDatePicker}
        setTime={viewDatePicker === 'Start Time' ? setStartDate : setFinishDate}
        time={viewDatePicker === 'Start Time' ? startDate : finishDate}
      />
    </>
  );
};

export default CompleteAssignScreen;
