import { Platform, Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as widthP,
  heightPercentageToDP as heightP,
} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

const DEVICE = {
  // device type ios or android
  platform: Platform.OS,

  // device width and height
  width,
  height,

  // these function take a number with or height to be responsive with all screens
  widthP,
  heightP,
};

// Colors in all screens
const COLORS = {
  primary: '#00C896',
  secondary: '#35495D',
  white: '#FFFFFF',
  firstGrey: '#333333',
  secondGrey: '#4F4F4F',
  thirdGrey: '#828282',
  blue: '#2957A4',
  yellow: '#FFDF5A',
  black: '#000000',
  lightBlue: '#748A9D',
  SearchBar: '#00000008',
  greyOpacity: '#DDDDDD',
  boldText: '#1E2D3E',
  regText: '#2E2E2EBF',
  greyButton: '#F1F6F7',
};

const BOOKING_STATUS = {
  PENDING: 0,
  OPENID: 1,
  CANCELLED: 2,
  CLOSED: 3,
};

const GLOBAL_STYLE = StyleSheet.create({
  shadow: elevation => ({
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: elevation || 4,
  }),
});
const DEVELOPMENT_MODE = true;

const BASE_API = DEVELOPMENT_MODE ? '' : '';

const USER_DATA_TOKEN = DEVELOPMENT_MODE
  ? 'development_token'
  : 'production_token';

const USER_SECURE_TOKEN = DEVELOPMENT_MODE
  ? 'secret_development_token'
  : 'secret_production_token';

export {
  DEVICE,
  COLORS,
  GLOBAL_STYLE,
  RFValue,
  BASE_API,
  DEVELOPMENT_MODE,
  BOOKING_STATUS,
  USER_DATA_TOKEN,
  USER_SECURE_TOKEN,
};
