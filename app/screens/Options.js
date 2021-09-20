import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet , ScrollView , SafeAreaView , Linking} from 'react-native'
import colors, { Colors } from '../constants/colors';
import { RowItem , Seperator} from '../components/rowItem';

const openUrl=(url =>{
    return Linking.openURL(url).catch(() => {
        alert('Something Went Wrong !!!')
    })
})
export default function Options() {
    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
            <RowItem name={"Option 1"} onPress={()=>openUrl('https://google.com')}/>
            <Seperator />
            <RowItem name={"Option 2"} onPress={()=>openUrl('https://google.com')}/>
            <Seperator />
            <RowItem name={"Option 3"} onPress={()=>openUrl('https://google.com')}/>
            <Seperator />
            <RowItem name={"Option 4"} onPress={()=>openUrl('Option 4')}/>
            <Seperator />
            
            </ScrollView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 20,
        paddingVertical: 10

    },
    text: {
        fontSize: 15,
        color: colors.textColor
    },
    Separator: {
        backgroundColor: colors.borderColor,
        height: StyleSheet.hairlineWidth,
        marginLeft: 20
    }
})
