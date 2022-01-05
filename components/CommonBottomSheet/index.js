import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../utils/constants';
import BottomSheet from '../BottomSheet';
import Typography from '../Typography';
import styles from './style';

const CommonBottomSheet = ({
  isVisible,
  setVisible,
  headerTitle,
  children,
  onPressConfirm,
  confirmTitle,
  cancelTitle,
  onCancel,
  onPressCancel,
  okButton = true,
}) => (
  <BottomSheet
    open={isVisible}
    setActive={setVisible}
    responsive
    width="93%"
    transparent
    onCancel={onCancel}>
    <View style={styles.container}>
      <Typography
        h4
        bold
        color={COLORS.secondary}
        style={{
          marginBottom: '3%',
        }}>
        {headerTitle}
      </Typography>
      {children}
      {okButton && (
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => {
            setVisible(false);
            onPressConfirm && onPressConfirm();
          }}>
          <Typography h5 bold color={COLORS.primary}>
            {confirmTitle || 'Confirm'}
          </Typography>
        </TouchableOpacity>
      )}
    </View>
    <TouchableOpacity
      style={styles.cancelButton}
      activeOpacity={0.8}
      onPress={() => {
        setVisible(false);
        onPressCancel && onPressCancel();
      }}>
      <Typography h5 bold color={COLORS.black}>
        {cancelTitle || 'Cancel'}
      </Typography>
    </TouchableOpacity>
  </BottomSheet>
);

export default CommonBottomSheet;
