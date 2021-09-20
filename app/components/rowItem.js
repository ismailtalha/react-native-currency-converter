import React from 'react';
import colors, { Colors } from '../constants/colors';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
export const RowItem = (props)=>{
    const active = props.selected == props.name ? styles.selected : styles.default
    const text = props.selected == props.name ? styles.selectedtext : styles.text
    return (
        <TouchableOpacity style={styles.default} onPress={props.onPress}>
        <Text style={{...styles.text ,  color: props.selected == props.name ? 'brown' : 'black'}}>
            {props.name}
        </Text>
    </TouchableOpacity>
    )
}

export const Seperator = ()=>{
    return (
        <View style={styles.Separator} />
    )
}

const styles = StyleSheet.create({
    default: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    text: {
        fontSize: 15,
        color: colors.textColor,
        fontWeight:"800"
    },
    selectedtext:{
        fontSize: 15,
        color: "white"
    },
    Separator: {
        backgroundColor: colors.borderColor,
        height: StyleSheet.hairlineWidth,
        marginLeft: 20
    },
    selected :{
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor:"red"
    }

})