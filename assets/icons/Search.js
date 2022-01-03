import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Search = props => (
  <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M13.523 12.463l3.212 3.211-1.06 1.061-3.212-3.212A6.72 6.72 0 018.25 15 6.752 6.752 0 011.5 8.25 6.752 6.752 0 018.25 1.5 6.752 6.752 0 0115 8.25a6.72 6.72 0 01-1.477 4.213zm-1.504-.557A5.233 5.233 0 0013.5 8.25C13.5 5.349 11.15 3 8.25 3A5.248 5.248 0 003 8.25c0 2.9 2.349 5.25 5.25 5.25a5.233 5.233 0 003.656-1.481l.113-.113z"
      fill="#919191"
    />
  </Svg>
);

export default Search;
