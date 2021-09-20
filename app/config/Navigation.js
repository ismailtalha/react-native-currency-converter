import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Options from '../screens/Options'
import CurrencyList from '../screens/CurrencyList';
import { ScreenStackHeaderCenterView } from 'react-native-screens';

const MainStack = createStackNavigator();
const ModalStack = createStackNavigator();
const ModalStackScreen = () => {
    return(


    <ModalStack.Navigator mode="modal">
         {/* <ModalStack.Screen name="Main" component={MainStackScreen} options={{headerShown:false}}/> */}
        <ModalStack.Screen name="CurrencyList" component={CurrencyList} options={({route}) => ({
            title:route.params.title
        })}/>
    </ModalStack.Navigator>
    )
    }
const MainStackScreen = () => {
    return(


    <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <MainStack.Screen name="Options" component={Options} options={{headerShown:false}}/>
        <MainStack.Screen name="CurrencyList" component={CurrencyList} options={({route}) => ({
                title:route.params.title
            })}/>
    </MainStack.Navigator>
    )
    }

  


export default() => (
    <NavigationContainer>
        <MainStackScreen/>
    </NavigationContainer>
    );