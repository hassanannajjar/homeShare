import { StyleSheet } from 'react-native';
import { COLORS, DEVICE, GLOBAL_STYLE } from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: COLORS.white,
    paddingTop: '4%',
    paddingHorizontal: '5%',
  },
  header: {
    height: DEVICE.height * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    ...GLOBAL_STYLE.shadow(5),
  },
  mapMarker: {
    backgroundColor: COLORS.primary,
    width: DEVICE.width * 0.1,
    height: DEVICE.width * 0.1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '5%',
  },
  markerMapContainer: {
    flexDirection: 'row-reverse',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropDownInput: {
    backgroundColor: '#F3F6F9',
    height: DEVICE.height * 0.06,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
    width: DEVICE.width * 0.9,
  },
  bottomSheetItem: {
    height: DEVICE.height * 0.05,
    backgroundColor: 'white',
    marginVertical: '2%',
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    ...GLOBAL_STYLE.shadow(5),
  },
  dropContainer: {
    height: DEVICE.height * 0.1,
    justifyContent: 'space-between',
  },
});

export default styles;
