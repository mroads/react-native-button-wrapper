/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import ButtonWrapper from "react-native-button-wrapper"


export interface ButtonProps extends TouchableOpacity {
    useNativeBase?: Boolean;
    title: String;
    onDoublePress?: Function;
    onPress?: Function;
}

export interface Props {
    button?: ButtonProps;
}

const Button = (props: Props) => {
    const [isClicked, setIsClicked] = React.useState("");
    const [count, setCount] = React.useState(0);
    const { button } = props;
    let styling = styles.nativeButtonWrapper;
    if (!button.useNativeBase) {
        styling = {
            ...styling,
            ...styles.touchable
        }
    }
    return (
        <View style={styles.container}
            key={button.title}>
            <Text style={styles.buttonTitle}>{button.title}</Text>
            <View style={styles.buttonWrapperView}>
                <ButtonWrapper
                    useNativeBase={button.useNativeBase}
                    onPress={() => {
                        if (button.onPress) {
                            setIsClicked("Single click");
                            setCount(count + 1);
                            button.onPress && button.onPress();
                        }
                    }}
                    onDoublePress={() => {
                        if (button.onDoublePress) {
                            setIsClicked("Double Click");
                            setCount(count + 1);
                            button.onDoublePress && button.onDoublePress();
                        }
                    }}
                    style={styling}
                >
                    <Text style={styles.textStyle}>Button</Text>
                </ButtonWrapper>
                {!!isClicked && <View style={{
                    flexDirection: "column"
                }}>
                    <Text style={styles.clickedTextStyle}>{isClicked}</Text>
                    {!button.hideCount && <Text style={styles.clickedTextStyle}>Clicked {count} times</Text>}
                </View>}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        marginHorizontal: 45,
    },
    buttonTitle: {
        fontSize: 18,
        fontWeight: "500"
    },
    buttonWrapperView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    nativeButtonWrapper: {
        marginTop: 20,
        backgroundColor: "red",
        paddingHorizontal: 20,
        borderRadius: 5
    },
    touchable: {
        paddingVertical: 14,
        height: 45
    },
    textStyle: {
        color: "white",
        fontWeight: 'bold'
    },
    clickedTextStyle: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: "flex-end",
        color: "grey",
    }
});

export default Button;
