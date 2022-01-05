import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const AcceptIcon = ({ isAccepted }, props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm7.003 13l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"
      fill={isAccepted ? '#00C896' : '#D8D8D8'}
    />
  </Svg>
);

export default AcceptIcon;