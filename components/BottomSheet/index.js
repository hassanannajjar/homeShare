/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { DEVICE } from '../../utils/constants';
import Typography from '../Typography';

const BottomSheet = ({
  width,
  responsive,
  closeInside,
  headerTitle,
  footer,
  open,
  children,
  style,
  setActive,
  transparent,
  overlay,
  transparentOverlay,
  headerStyle,
  onCancel,
}) => {
  const modalizeRef = useRef();
  let didMount = false;
  useEffect(() => {
    if (!didMount) {
      didMount = true;
      open ? onOpen() : onClose();
    }
    return () => (didMount = false);
  }, [open]);

  const onOpen = () => modalizeRef.current?.open();
  const onClose = () => modalizeRef.current?.close();

  const handleChangeStyle = () => {};
  return (
    <Modalize
      ref={modalizeRef}
      HeaderComponent={
        headerTitle && (
          <View style={headerStyle}>
            <Typography
              center
              children={headerTitle}
              style={{ paddingBottom: 10 }}
            />
          </View>
        )
      }
      handlePosition={closeInside ? 'inside' : 'outside'}
      adjustToContentHeight={responsive}
      rootStyle={{ elevation: 5 }}
      modalStyle={[
        {
          zIndex: 100,
          width: width || '100%',
          alignSelf: 'center',
          backgroundColor: transparent ? 'transparent' : 'white',
        },
      ]}
      closeOnOverlayTap
      overlayStyle={transparentOverlay && { backgroundColor: 'transparent' }}
      withOverlay={overlay}
      closeSnapPointStraightEnabled={false}
      childrenStyle={style}
      FooterComponent={footer}
      modalHeight={!responsive && DEVICE.height * 0.82}
      children={children}
      onPositionChange={handleChangeStyle}
      onClosed={() => {
        setActive(false);
        onCancel && onCancel();
      }}
    />
  );
};
export default BottomSheet;
