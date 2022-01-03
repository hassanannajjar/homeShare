import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { DEVICE } from '../../utils/constants';

const Google = props => (
  <Svg
    width={DEVICE.width * 0.055}
    height={DEVICE.width * 0.055}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M4.432 12.086l-.696 2.599-2.544.054A9.956 9.956 0 010 9.999a9.95 9.95 0 011.118-4.598l2.266.415.992 2.252A5.944 5.944 0 004.056 10c0 .734.132 1.437.376 2.086z"
      fill="#FBBB00"
    />
    <Path
      d="M19.825 8.132a10.018 10.018 0 01-.044 3.956 9.998 9.998 0 01-3.52 5.71h-.001l-2.853-.146-.404-2.52a5.96 5.96 0 002.564-3.044H10.22V8.132h9.605z"
      fill="#518EF8"
    />
    <Path
      d="M16.26 17.798A9.957 9.957 0 0110 20a9.998 9.998 0 01-8.808-5.26l3.24-2.654a5.946 5.946 0 008.57 3.046l3.258 2.666z"
      fill="#28B446"
    />
    <Path
      d="M16.383 2.302l-3.24 2.652a5.948 5.948 0 00-8.767 3.114L1.12 5.401A9.998 9.998 0 0110 0c2.426 0 4.651.864 6.383 2.302z"
      fill="#F14336"
    />
  </Svg>
);

export default Google;
