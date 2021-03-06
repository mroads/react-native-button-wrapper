/**
 * @flow
 */
import { Button } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';


export interface Props extends TouchableOpacity {
  onDoublePress?: Function;
  onPress?: Function;
  useNativeBase?: boolean;
  delay?: Number;
}

class ButtonWrapper extends React.Component<Props> {
  pressedOnce = false;

  lastClickedAt = 0;

  timeout: any;

  onPressHandler = () => {
    const { onDoublePress, onPress,delay = 500 } = this.props;
    const supportsDoublePress = onDoublePress && typeof onDoublePress === 'function';
    const supportsSinglePress = onPress && typeof onPress === 'function';
    if (supportsDoublePress) {
      if (this.pressedOnce) {
        clearTimeout(this.timeout);
        this.pressedOnce = false;
        onDoublePress();
      } else {
        this.timeout = setTimeout(() => {
          this.pressedOnce = false;
          if (supportsSinglePress) {
            onPress();
          }
        }, 200);
        this.pressedOnce = true;
      }
    } else {
      const newTime = new Date().getTime();
      if (newTime - this.lastClickedAt > delay) {
        if (supportsSinglePress) {
          onPress();
        }
      }
      this.lastClickedAt = newTime;
    }
  };

  render() {
    const { useNativeBase = false, ...remainingProps } = this.props;
    if (useNativeBase) {
      return <Button {...remainingProps} onPress={this.onPressHandler} />;
    }
    return <TouchableOpacity {...remainingProps} onPress={this.onPressHandler} />;
  }
}
export default ButtonWrapper;
