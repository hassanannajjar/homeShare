import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { DEVICE } from '../../utils/constants';

const Back = props => (
  <Svg
    width={DEVICE.width * 0.05}
    height={DEVICE.width * 0.05}
    viewBox="0 0 12 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M4.437 9l6.6 6.6-1.885 1.885L.667 9 9.152.515 11.037 2.4 4.437 9z"
      fill="#000"
    />
  </Svg>
);

export default Back;
