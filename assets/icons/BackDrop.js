import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { DEVICE } from '../../utils/constants';

const BackDrop = props => (
  <Svg
    width={DEVICE.width * 0.07}
    height={DEVICE.width * 0.07}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
      fill="#A9ABBE"
    />
  </Svg>
);

export default BackDrop;
