import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { DEVICE } from '../../utils/constants';

const TimeIcon = props => (
  <Svg
    width={DEVICE.width * 0.05}
    height={DEVICE.width * 0.05}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9 16.5a7.5 7.5 0 110-15 7.5 7.5 0 010 15zM9.75 9V5.25h-1.5v5.25h4.5V9h-3z"
      fill="#00C896"
    />
  </Svg>
);

export default TimeIcon;
