import React from 'react';
import { StatusBar, Text, View , FlatList } from 'react-native';
import currencies from '../data/currencies.json'
import { RowItem , Seperator } from '../components/rowItem';

const CurrencyList = ({navigation , route}) => {
    return (
    
    <View  style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
    <StatusBar barStyle="dark-content" backgroundColor='white' />
    <FlatList 
    data={currencies}
    renderItem={({item})=>{
       return(
        <RowItem 
        name={item}
        selected={route.params.selected}
        onPress={() => {
          route.params.onChange && route.params.onChange(item);
          navigation.pop();
        }}
      />
       )
    }}
    ItemSeparatorComponent = {() => <Seperator />}
    />
    </View>
)}  

export default CurrencyList

