import { StyleSheet } from 'react-native';
import { DEVICE } from '../../utils/constants';

const styles = StyleSheet.create({
  confirmButton: {
    borderTopColor: 'grey',
    borderTopWidth: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: DEVICE.height * 0.06,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    paddingTop: DEVICE.height * 0.02,
  },
  cancelButton: {
    backgroundColor: 'white',
    marginVertical: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '2%',
    borderRadius: 5,
    height: DEVICE.height * 0.06,
  },
});
export default styles;
