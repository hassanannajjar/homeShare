import moment from 'moment';
import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  BackDrop,
  UploadIcon,
  Info,
  TimeIcon,
  AcceptIcon,
  Close,
} from '../../assets/icons';
import {
  Button,
  CommonBottomSheet,
  DatePicker,
  TextInput,
  Typography,
} from '../../components';
import { COLORS, DEVICE } from '../../utils/constants';
import CompleteAssignHeader from './CompleteAssignHeader';
import LabelText from './LabelText';

import styles from './style';

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

  const options = {
    title: 'Select Image',
    customButtons: [
      { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const ListItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        if (isVisible === 'property') {
          setSelectedValue(item);
        } else {
          setSelectedStatus(item);
        }
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
    placeHolder = '',
    children,
  }) => (
    <View style={[styles.dropContainer, containerStyle]}>
      <LabelText text={label} />
      {children || (
        <TouchableOpacity
          onPress={onPress}
          style={[styles.dropDownInput, style]}>
          <Typography h6 color={COLORS[value ? 'secondGrey' : 'grey']}>
            {value || placeHolder}
          </Typography>
          {icon}
        </TouchableOpacity>
      )}
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

  const UploadImageComponent = ({ isFirst }) => (
    <TouchableOpacity
      onPress={async () => {
        await launchImageLibrary(options, response => {
          const uri = response?.assets[0]?.uri;
          if (response.didCancel) {
            // console.log('User cancelled image picker');
          } else if (response.error) {
            // console.log('ImagePicker Error: ', response.error);
          } else {
            // const source = { uri: response.uri };

            // You can also display the image using data:

            setSelectedImages(lastImages => ({
              ...lastImages,
              ...(isFirst ? { first: uri } : { second: uri }),
            }));
          }
        });
      }}
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

  const UploadedImage = ({ value, isFirst }) =>
    value !== '' ? (
      <View
        style={{
          borderColor: 'grey',
          borderWidth: 1,
          borderRadius: 5,
          alignSelf: 'center',
        }}>
        <Image
          source={{ uri: value }}
          resizeMode="cover"
          style={{
            width: DEVICE.width * 0.3,
            height: DEVICE.width * 0.3,
            borderRadius: 4,
          }}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setSelectedImages(lastImages => ({
              ...lastImages,
              ...(isFirst ? { first: '' } : { second: '' }),
            }));
          }}
          style={{
            position: 'absolute',
            top: -5,
            right: -5,
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
            width: DEVICE.width * 0.06,
            height: DEVICE.width * 0.06,
            borderRadius: 20,
          }}>
          <Close />
        </TouchableOpacity>
      </View>
    ) : (
      <View />
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
            title="You must upload a pictue(or more than one) of the issue before starting
        to fix it."
          />
          <UploadImageComponent isFirst />
          <UploadedImage value={selectedImages.first} isFirst />
          <FormTitle title="Second Step" />
          <DropDownInput
            label="Complete Information"
            containerStyle={{ height: DEVICE.height * 0.18 }}>
            <TextInput
              placeholder="Description of the solution"
              style={[
                styles.dropDownInput,
                {
                  borderBottomWidth: 0,
                  height: DEVICE.height * 0.14,
                },
              ]}
              numberOfLines={5}
              multiline
            />
          </DropDownInput>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <DropDownInput
              label="Total Costs"
              containerStyle={{ width: '45%', marginVertical: '3%' }}>
              <TextInput
                placeholder="Enter Cost"
                style={[
                  styles.dropDownInput,
                  {
                    borderBottomWidth: 0,
                    width: '100%',
                  },
                ]}
                number
              />
            </DropDownInput>
            <DropDownInput
              label="Status"
              placeHolder="Select Status"
              value={selectedStatus}
              icon={<BackDrop />}
              onPress={() => setVisible('status')}
              containerStyle={{ width: '45%', marginVertical: '3%' }}
              style={{ width: '100%', paddingLeft: '5%' }}
            />
          </View>
          {/* Third Step */}
          <FormTitle title="Third Step" />
          <InfoTitle title="Upload at least one picture of the fixed issue" />
          <UploadImageComponent />
          <UploadedImage value={selectedImages.second} />
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
        headerTitle={
          isVisible === 'property' ? 'Select Property' : 'Select Status'
        }
        okButton={false}>
        {(isVisible === 'property' ? properties : status).map((item, index) => (
          <ListItem item={item} key={index.toString()} />
        ))}
        <View style={{ marginBottom: '4%' }} />
      </CommonBottomSheet>

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
