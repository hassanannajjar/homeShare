import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { Close } from '../../assets/icons';

import styles from './style';

const UploadedImage = ({ value, onPressRemove }) =>
  value !== '' ? (
    <View style={styles.uploadedImageContainer}>
      <Image
        source={{ uri: value }}
        resizeMode="cover"
        style={styles.uploadedImage}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPressRemove}
        style={styles.removeImage}>
        <Close />
      </TouchableOpacity>
    </View>
  ) : (
    <View />
  );

export default UploadedImage;
