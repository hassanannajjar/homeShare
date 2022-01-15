import { StyleSheet } from 'react-native';
import { COLORS, DEVICE, GLOBAL_STYLE } from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F3F6F9',
  },
  header: {
    height: DEVICE.height * 0.12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    ...GLOBAL_STYLE.shadow(5),
    paddingTop: DEVICE.height * 0.03,
  },
  maintenanceSwitch: {
    width: DEVICE.width * 0.3,
    marginRight: '3%',
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: 'row',
    borderColor: COLORS.greyOpacity,
    justifyContent: 'space-between',
    height: '50%',
  },
  selectedItem: {
    backgroundColor: COLORS.primary,
    width: '50%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nonSelectedItem: {
    backgroundColor: COLORS.white,
    width: '50%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    backgroundColor: COLORS.white,
    width: '90%',
    height: DEVICE.height * 0.26,
    alignSelf: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginVertical: '3%',
    borderRadius: 5,
    ...GLOBAL_STYLE.shadow(5),
  },
  searchInput: {
    backgroundColor: 'white',
    marginTop: '4%',
    width: '90%',
    borderRadius: 5,
    ...GLOBAL_STYLE.shadow(5),
  },
});

export default styles;
