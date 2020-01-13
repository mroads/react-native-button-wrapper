
# react-native-button-wrapper

This npm resolve the multiple click issue on a button.

![](button-wrapper.gif)

# Setup
### Installation

`$ npm install react-native-button-wrapper --save`

or

`$ yarn add react-native-button-wrapper`

## Usage

### Props   
##### Props you may need to pass while implementing. This wrapper default extends the properties of the touchable Opacity.

| Prop           |     Default     |   Type   | Description                                                                                                 |
| :------------- | :-------------: | :------: | :---------------------------------------------------------------------------------------------------------- |
| onPress     |      () => {}       |  `function`  | Called when user clicked once.
 |
| onDoublePress           |      () => {}       |  `function`  | Called when user clicked twice. |
| useNativeBase          |       false        | `bool` | If `true`, the wrapper will return the native base button component.                                                                              |

### Basic
```javascript

import ButtonWrapper from 'react-native-button-wrapper';

function Button() {
  return (
    <ButtonWrapper
      onPress={() => {
       <!--- Write your code here --->
      }}
     >
      <Text>Button</Text>              
     </ButtonWrapper>
   );
 }
```

### Native Base Implementation
```javascript

import ButtonWrapper from 'react-native-button-wrapper';


function Button() {
  return (
    <ButtonWrapper
      useNativeBase
      onDoublePress={() => {
       <!--- Write your code here --->
      }}
      onPress={() => {
       <!--- Write your code here --->
      }}
    >
      <Text>Button</Text>              
    </ButtonWrapper>
  );
}
```
