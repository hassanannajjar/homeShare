import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { DEVICE } from '../../utils/constants';

const MarkerMapJop = ({ fill }, props) => (
  <Svg
    width={DEVICE.width * 0.08}
    height={DEVICE.width * 0.08}
    viewBox="0 0 50 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M42.307 42.426L24.783 60 7.259 42.426c-9.679-9.705-9.679-25.441 0-35.147 9.678-9.705 25.37-9.705 35.047 0 9.679 9.706 9.679 25.442 0 35.147z"
      fill={fill || '#00C896'}
    />
    <Circle cx={25.4348} cy={24.1307} r={17.6087} fill="#fff" />
    <Path
      d="M36.337 20.848l-6.83-5.231a.925.925 0 00-1.093-.04l-1.717 1.11-2.654-2.14c-.312-.238-.78-.277-1.092-.04l-6.83 4.478c-.274.159-.43.476-.43.793l-.039 11.413c0 .515.43.951.937.951a.957.957 0 00.937-.951l.039-10.858 5.854-3.844 1.6 1.268-5.035 3.21c-.273.158-.429.475-.429.832v11.215c0 .515.43.951.937.951a.957.957 0 00.936-.951v-10.66l7.455-4.795 6.283 4.834a.93.93 0 001.327-.198c.352-.396.274-1.03-.156-1.347z"
      fill={fill || '#00C896'}
    />
  </Svg>
);

export default MarkerMapJop;
