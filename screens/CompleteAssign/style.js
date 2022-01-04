import { StyleSheet } from 'react-native';
import { COLORS, DEVICE, GLOBAL_STYLE } from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    backgroundColor: COLORS.white,
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
});

export default styles;
