import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { DEVICE } from '../../utils/constants';

const Info = props => (
  <Svg
    width={DEVICE.width * 0.05}
    height={DEVICE.width * 0.05}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10 1.667A8.336 8.336 0 001.667 10c0 4.6 3.733 8.334 8.333 8.334S18.333 14.6 18.333 10 14.6 1.667 10 1.667zm0 12.5a.836.836 0 01-.834-.833V10c0-.458.375-.833.834-.833.458 0 .833.375.833.833v3.334a.836.836 0 01-.833.833zm.833-6.667H9.166V5.834h1.667V7.5z"
      fill="#009FFD"
    />
  </Svg>
);

export default Info;
