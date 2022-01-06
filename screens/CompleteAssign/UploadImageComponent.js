import React from 'react';
import { TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { UploadIcon } from '../../assets/icons';
import { Typography } from '../../components';
import { COLORS } from '../../utils/constants';

import styles from './style';

const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
const UploadImageComponent = ({ onSuccess }) => (
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
          onSuccess && onSuccess(uri);
        }
      });
    }}
    style={styles.uploadDoc}>
    <UploadIcon />
    <Typography h5 color={COLORS.primary} style={{ marginLeft: '2%' }}>
      UPLOAD PICTURE
    </Typography>
  </TouchableOpacity>
);

export default UploadImageComponent;
