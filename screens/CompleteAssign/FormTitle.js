import React from 'react';
import { Typography } from 'react-native';
import styles from '../../components/Typography/style';
import { COLORS } from '../../utils/constants';

const FormTitle = ({ title }) => (
  <Typography h4 color={COLORS.secondGrey} bold style={styles.formTitle}>
    {title}
  </Typography>
);

export default FormTitle;
