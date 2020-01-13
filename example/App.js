/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Button from "./button"

const App: () => React$Node = () => {

  const getButtons = () => {
    return [{
      title: "Native Base Button",
      useNativeBase: true,
      onPress: () => {
        console.log("Native Base Clicked")
      },
      onDoublePress: () => {
        console.log("Native Base double Clicked")
      }
    },{
      title: "Touchable Button",
      useNativeBase: false,
      onPress: () => {
        console.log("Touchable Clicked")
      },
      onDoublePress: () => {
        console.log("Touchable double Clicked")
      }
    }]
  }

  const buttons = getButtons();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.viewContainer}>
          <Text style={styles.headerTextStyle}>Button Wrapper Example</Text>
        </View>
        {buttons.map(bObj => <Button button={bObj} key={bObj.title} />)}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  headerTextStyle: {
    fontWeight: '500',
    fontSize: 30
  },
  viewContainer: {
    alignItems: "center",
    paddingVertical: 20,
  }
});

export default App;
