import React from 'react';

import { TextInput, TouchableOpacity, View, Text, StyleSheet , Dimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../constants/colors';

const screen = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 5,
        flexDirection: "row"
    },
    button: {
        padding: 15,
        borderRightColor: colors.borderColor,
        borderRightWidth: 1
    },
    buttonText: {
        fontSize: 18,
        color: colors.textColor,
        fontWeight: 'bold'
    },
    input: {
        padding: 10,
        flex: 1
    },
    disableInput: {
        padding: 10,
        backgroundColor:colors.disable,
        flex: 1,
    }
})

function ConversionInput({ text, OnButtonPress, ...props }) {
    let containerStyles;
    if (props.editable === false) {
        containerStyles = styles.disableInput
    }
    else {
        containerStyles = styles.input;
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={OnButtonPress}>
                <Text style={styles.buttonText}>{text}</Text>

            </TouchableOpacity>
            <TextInput style={containerStyles} {...props} />
        </View>
    );
}

export default ConversionInput;