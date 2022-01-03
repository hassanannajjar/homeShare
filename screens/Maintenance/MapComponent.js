import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { MarkerMapJop } from '../../assets/icons';

const MapComponent = () => {
  const [region, onRegionChange] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.151,
  });

  const markers = [
    {
      latitude: 37.78525,
      longitude: -122.4324,
      status: 2,
    },
    {
      latitude: 37.76525,
      longitude: -122.4324,
      status: 1,
    },
    {
      latitude: 37.75125,
      longitude: -122.4214,
      status: 2,
    },
    {
      latitude: 37.74525,
      longitude: -122.4724,
      status: 3,
    },
    {
      latitude: 37.72525,
      longitude: -122.4124,
      status: 2,
    },
    {
      latitude: 37.72525,
      longitude: -122.4324,
      status: 1,
    },
  ];

  return (
    <MapView
      style={{ width: '100%', height: '100%' }}
      initialRegion={region}
      onRegionChange={onRegionChange}>
      {markers.map((marker, index) => (
        <Marker key={index.toString()} coordinate={marker}>
          <MarkerMapJop
            fill={
              marker.status === 1
                ? '#00C896'
                : marker.status === 2
                ? '#ED2079'
                : '#F79F24'
            }
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default MapComponent;
