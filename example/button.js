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
                        setIsClicked("once");
                        button.onPress();
                    }}
                    onDoublePress={() => {
                        setIsClicked("twice");
                        button.onDoublePress();
                    }}
                    style={styling}
                >
                    <Text style={styles.textStyle}>Button</Text>
                </ButtonWrapper>
                {!!isClicked && <Text style={styles.clickedTextStyle}>Clicked {isClicked}</Text>}
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
        justifyContent: "space-between",
        marginTop: 20,
        backgroundColor: "red",
        paddingHorizontal: 20,
        borderRadius: 5
    },
    touchable: {
        paddingVertical: 14    
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
