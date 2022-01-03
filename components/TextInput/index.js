import React from 'react';
import { View, TextInput as Input } from 'react-native';

import styles from './style';

const TextInput = ({
  value,
  placeholder,
  style,
  onChange,
  isSecure,
  Icon,
  number,
  maxLength,
  ref,
  disabled,
  onFocus,
  numberOfLines,
  multiline,
  onTouch,
  containerStyle,
  onKeyPress,
  onSubmitEditing,
  iconContainerStyle,
}) => (
  <View
    style={[
      { width: '100%', flexDirection: 'row', alignItems: 'center' },
      containerStyle,
    ]}>
    {Icon && (
      <View style={[{ width: '10%' }, iconContainerStyle]}>
        <Icon />
      </View>
    )}

    <Input
      editable={!disabled}
      onSubmitEditing={onSubmitEditing}
      onKeyPress={onKeyPress}
      value={value}
      keyboardType={number ? 'phone-pad' : 'default'}
      onChangeText={onChange}
      placeholder={placeholder}
      style={[styles.textInputStyle, Icon && { width: '90%' }, style]}
      secureTextEntry={isSecure}
      maxLength={maxLength}
      returnKeyType="done"
      ref={ref}
      onFocus={onFocus}
      numberOfLines={numberOfLines}
      multiline={multiline || false}
      onTouchStart={onTouch}
    />
  </View>
);

export default TextInput;
