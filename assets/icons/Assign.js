import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { DEVICE } from '../../utils/constants';

const Assign = props => (
  <Svg
    width={DEVICE.width * 0.05}
    height={DEVICE.width * 0.05}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M15 16.5h-1.5V15a2.25 2.25 0 00-2.25-2.25h-4.5A2.25 2.25 0 004.5 15v1.5H3V15a3.75 3.75 0 013.75-3.75h4.5A3.75 3.75 0 0115 15v1.5zM9 9.75a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0-1.5a3 3 0 100-6 3 3 0 000 6z"
      fill="#F79F24"
    />
  </Svg>
);

export default Assign;
