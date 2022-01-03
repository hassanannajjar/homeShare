import { StyleSheet } from 'react-native';
import { COLORS, DEVICE } from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    height: DEVICE.height,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '10%',
    backgroundColor: COLORS.white,
  },
});

export default styles;
