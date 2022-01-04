import React from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import {
  Assign,
  Close,
  DownloadPdf,
  MapMarker,
  Search,
} from '../../assets/icons';
import { TextInput, Typography } from '../../components';
import { COLORS, SCREENS_ROUTES } from '../../utils/constants';

import styles from './style';

const MaintenanceItems = ({ navigation }) => {
  const mainItems = [
    {
      title: 'Marcus Schleifer',
      status: 'Reported',
      location: 'Oalwood House 140, Infirmary Road, Sheffield, S6',
      room: '4C',
      fault: 'Internal floors, walls and ceilings',
      reported: '2021/12/28',
      pdfLink: 'https://test.com',
    },
    {
      title: 'Ruben Bergson',
      status: 'Not Reported',
      location: 'Oalwood House 140, Infirmary Road, Sheffield, S6',
      room: '4C',
      fault: 'Internal floors, walls and ceilings',
      reported: '2021/12/28',
      pdfLink: 'https://test.com',
    },
    {
      title: 'Gustavo Baptista',
      status: 'Reported',
      location: 'Oalwood House 140, Infirmary Road, Sheffield, S6',
      room: '4C',
      fault: 'Internal floors, walls and ceilings',
      reported: '2021/12/28',
      pdfLink: 'https://test.com',
    },
    {
      title: 'Gus Bas ',
      status: 'Done',
      location: 'Oalwood House 140, Infirmary Road, Sheffield, S6',
      room: '2C',
      fault: 'Internal floors, walls and ceilings',
      reported: '2021/12/28',
      pdfLink: 'https://test.com',
    },
  ];

  const TitleItem = ({ title, value }) => (
    <View style={{ flexDirection: 'row' }}>
      <Typography h5 color={COLORS.black} style={{ width: '30%' }}>
        {title}
      </Typography>
      <Typography h5 color={COLORS.thirdGrey}>
        {value}
      </Typography>
    </View>
  );

  const IconItem = ({ title, icon, onPress }) => (
    <TouchableOpacity
      style={{ flexDirection: 'row', alignItems: 'center' }}
      onPress={onPress}>
      {icon}
      <Typography h6 color={COLORS.secondGrey} style={{ marginLeft: '4%' }}>
        {title}
      </Typography>
    </TouchableOpacity>
  );

  const renderItems = ({
    item: { title, status, location, room, fault, reported },
  }) => {
    const statusColor =
      status === 'Reported'
        ? '#F2994A'
        : status === 'Done'
        ? COLORS.primary
        : '#ED2079';
    return (
      <View style={styles.listItem}>
        <View
          style={{
            paddingHorizontal: '4%',
            paddingBottom: '2%',
            paddingTop: '5%',
            height: '75%',
            borderBottomColor: COLORS.greyOpacity,
            borderBottomWidth: 1,
            justifyContent: 'space-between',
          }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography color={COLORS.black} h4 bold>
              {title}
            </Typography>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: `${statusColor}22`,
                paddingHorizontal: '3%',
                borderRadius: 20,
              }}>
              <View
                style={{
                  backgroundColor: statusColor,
                  width: 8,
                  height: 8,
                  borderRadius: 50,
                }}
              />
              <Typography color={statusColor} h6>
                {' '}
                {status}
              </Typography>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <MapMarker fill={COLORS.primary} />
            <Typography h6 color={COLORS.black}>
              {location}
            </Typography>
          </View>
          <TitleItem title="ROOM" value={room} />
          <TitleItem title="FAULT" value={fault} />
          <TitleItem title="REPORTED" value={reported} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '25%',
          }}>
          <IconItem
            title="Download Pdf"
            icon={<DownloadPdf />}
            onPress={() => {}}
          />
          <IconItem
            title="Assign Issue"
            icon={<Assign />}
            onPress={() => navigation.navigate(SCREENS_ROUTES.completeAssign)}
          />
          <IconItem title="Close Issue" icon={<Close />} onPress={() => {}} />
        </View>
      </View>
    );
  };

  return (
    <>
      <TextInput
        containerStyle={styles.searchInput}
        style={{ borderBottomWidth: 0 }}
        Icon={Search}
        placeholder="Search"
        iconContainerStyle={{ marginLeft: '3%' }}
      />
      <FlatList
        data={mainItems}
        keyExtractor={(data, index) => index.toString()}
        renderItem={renderItems}
        style={{ width: '100%' }}
      />
    </>
  );
};

export default MaintenanceItems;
