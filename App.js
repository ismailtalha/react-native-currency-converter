/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import Home from './app/screens/Home';
import Options from './app/screens/Options';
import Colors from './app/constants/colors'
import Navigation from './app/config/Navigation';



const App = () => {  
  return( <Navigation />)
};



export default App;
