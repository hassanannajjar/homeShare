import { StyleSheet } from 'react-native';
import { COLORS, DEVICE, GLOBAL_STYLE } from '../../utils/constants';

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 5,
    padding: 15,
    margin: 5,
    ...GLOBAL_STYLE.flexRow,
  },
  buttonTitle: {
    color: COLORS.white,
  },
  myOrdersButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: DEVICE.height / 12,
    height: DEVICE.height / 12,
    paddingHorizontal: '1%',
  },
  myOrdersText: {
    textAlign: 'center',
  },
});

export default styles;
