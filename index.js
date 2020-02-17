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
  state = {
    disabled: false,
  };

  componentWillMount() {
    clearTimeout(this.delayTimeout);
  }

  shouldComponentUpdate(nextProps) {
    const { disabled: pdisabled } = this.state;
    const { disabled } = nextProps;
    if (!!disabled !== !!pdisabled) {
      return true;
    }
    return false;

  }

  static getDerivedStateFromProps(props, state) {
    const { disabled:  pdisabled } = state;
    const { disabled } = props;

    if (!!disabled !== !!pdisabled) {
      return {
        disabled: !!disabled
      }
    }
  }

  lastClickedAt = new Date().getTime();

  timeout: any;
  delayTimeout: any;

  onPressHandler = () => {
    const { onDoublePress, onPress, delay = 500 } = this.props;
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
      if (supportsSinglePress) {
        this.setState({
          disabled: true,
        });
        this.delayTimeout = setTimeout(this.enableButton, delay);
        onPress();
      }
    }
  };

  enableButton = () => {
    this.setState({
      disabled: false,
    });
    clearTimeout(this.delayTimeout);
  }

  componentWillUnmount() {
    clearTimeout(this.delayTimeout);
  }

  render() {
    const { disabled } = this.state;
    const { useNativeBase = false, style, disabled: propDisabled, ...remainingProps } = this.props;
    const disabledStyle = disabled ? { opacity: 0.5 } : {};
    if (useNativeBase) {
      return <Button {...remainingProps} style={[style, disabledStyle]} disabled={disabled} onPress={this.onPressHandler} />;
    }
    return <TouchableOpacity {...remainingProps} style={[style, disabledStyle]} disabled={disabled} onPress={this.onPressHandler} />;
  }
}
export default ButtonWrapper;
