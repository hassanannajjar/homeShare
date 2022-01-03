import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { DEVICE } from '../../utils/constants';

const Close = props => (
  <Svg
    width={DEVICE.width * 0.05}
    height={DEVICE.width * 0.05}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9 7.94l3.713-3.713 1.06 1.06L10.06 9l3.713 3.713-1.06 1.06L9 10.061l-3.713 3.712-1.06-1.06L7.939 9 4.227 5.288l1.06-1.061L9 7.94z"
      fill="#E31B0C"
    />
  </Svg>
);

export default Close;
