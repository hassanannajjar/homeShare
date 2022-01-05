import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { DEVICE } from '../../utils/constants';

const UploadIcon = props => (
  <Svg
    width={DEVICE.width * 0.05}
    height={DEVICE.width * 0.05}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M16.666 4.167H3.333v11.666l7.743-7.745a.833.833 0 011.179 0l4.411 4.42V4.167zm-15-.84a.833.833 0 01.827-.827h15.014c.456 0 .826.37.826.828v13.345a.834.834 0 01-.826.827H2.492a.827.827 0 01-.826-.828V3.327zm5 5.84a1.667 1.667 0 110-3.334 1.667 1.667 0 010 3.334z"
      fill="#00C896"
    />
  </Svg>
);

export default UploadIcon;
