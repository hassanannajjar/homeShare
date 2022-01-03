import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { DEVICE } from '../../utils/constants';

const DownloadPdf = props => (
  <Svg
    width={DEVICE.width * 0.05}
    height={DEVICE.width * 0.05}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9.75 7.5h3.75L9 12 4.5 7.5h3.75V2.25h1.5V7.5zM3 14.25h12V9h1.5v6a.75.75 0 01-.75.75H2.25A.75.75 0 011.5 15V9H3v5.25z"
      fill="#00C896"
    />
  </Svg>
);

export default DownloadPdf;
