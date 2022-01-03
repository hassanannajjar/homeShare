import { StyleSheet } from 'react-native';
import { COLORS, RFValue } from '../../utils/constants';

const styles = StyleSheet.create({
  textInputStyle: {
    fontSize: RFValue(14),
    fontWeight: '500',
    borderBottomColor: COLORS.greyOpacity,
    borderBottomWidth: 1,
    alignItems: 'flex-start',
    width: '100%',
  },
});

export default styles;
