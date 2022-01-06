import React from 'react';
import { Typography } from '../../components';
import { COLORS } from '../../utils/constants';
import styles from './style';

const FormTitle = ({ title }) => (
  <Typography h4 color={COLORS.secondGrey} bold style={styles.formTitle}>
    {title}
  </Typography>
);

export default FormTitle;
