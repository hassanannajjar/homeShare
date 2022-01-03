import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { DEVICE } from '../../utils/constants';

const Password = props => (
  <Svg
    width={DEVICE.width * 0.055}
    height={DEVICE.width * 0.055}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M19 10h1a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11a1 1 0 011-1h1V9a7 7 0 0114 0v1zM5 12v8h14v-8H5zm6 2h2v4h-2v-4zm6-4V9A5 5 0 007 9v1h10z"
      fill="#828282"
    />
  </Svg>
);

export default Password;
