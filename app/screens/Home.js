import React, { useState } from 'react';
import { View, StatusBar, Text, Image, StyleSheet, Dimensions, Button, SafeAreaView, ScrollView } from 'react-native';
import ConversionInput from '../components/ConversionInput';
import colors from '../constants/colors';
import { format } from 'date-fns'
import currrencyapi from '../util/api'
import currencyapi from '../util/api';

const screen = Dimensions.get('window')
const styles = StyleSheet.create({

    logoContainer: {
        alignItems: 'center',
        justifyContent: "center",
    },
    logo: {
        width: screen.width * 0.45,
        height: screen.height * 0.30
    },
    container: {
        marginTop: 50
    },
    logotext: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'

    },
    bottontext: {
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center',
        color: "red",
        fontStyle: 'italic'
    },
    buttonview: {
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    convertbutton: {
        backgroundColor: colors.bgColor,
        borderRadius: 5,
        fontSize: 50
    }

})

// let baseCurrency = "AUD";
// let quoteCurrecy = "BGN";

let ConversionRate = 0.123;
let date = new Date();



const Home = ({ navigation }) => {
    const [baseCurrency, setBaseCurrency] = useState('AUD')
    const [quoteCurrecy, setQuoteCurrecy] = useState('BGN')
    const [value, setValue] = useState('100')
    const [conversionrate, setconversionrate] = useState('0')
    const swapCurrencies = () => {
        setBaseCurrency(quoteCurrecy)
        setQuoteCurrecy(baseCurrency)
    }

   
  async function getCurrency(from, to) {

        let result = await currencyapi(from,to)
        console.log('return', result)
        let res = (Object.values(result.result))
        console.log('OBJECT'  ,res)
        setconversionrate((res[0]).toString())

        //    setresultValue(data.result.USD)
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.bgColor }}>

            <ScrollView >
                <View style={styles.container}>
                    <StatusBar barStyle="light-content" />
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo}

                            source={require('../assets/Images/logo2.png')}
                            resizeMode='contain'

                        />

                    </View>
                    <Text style={styles.logotext}>Currency Converter</Text>
                    <ConversionInput
                        text={baseCurrency}
                        value={value}
                        OnButtonPress={() => navigation.push("CurrencyList", { title: 'Base Currency', "selected": baseCurrency, onChange: (currency) => setBaseCurrency(currency), })}
                        onChangeText={(text) => { setValue(text), getCurrency(baseCurrency, quoteCurrecy) }}
                        keyboardType="numeric"
                        editable={true}
                    />
                    <ConversionInput
                        text={quoteCurrecy}
                        value={
                            value && `${(parseFloat(value) * conversionrate).toFixed(2)}`
                          }
                        OnButtonPress={() => navigation.push("CurrencyList", { title: 'Quote Currency', "selected": quoteCurrecy, onChange: (currency) => setQuoteCurrecy(currency) })}
                        OnChangeText={text => console.log(text)}
                        keyboardType="numeric"
                        editable={false}
                    />
                    <Text style={styles.bottontext}>1 {baseCurrency} = {ConversionRate} {quoteCurrecy} as {format(date, "MMMM do, yyyy")} </Text>
                    <View style={styles.buttonview}>

                        <Button
                            style={styles.convertbutton}
                            title="Reverse Currencies"
                            color="brown"
                            accessibilityLabel="Learn more about this purple button"
                            borderRadius="10"
                            onPress={() => swapCurrencies()}
                        />
                        <Button
                            style={styles.convertbutton}
                            title="Navigate To Options"
                            color="brown"
                            accessibilityLabel="Learn more about this purple button"
                            borderRadius="10"
                            onPress={() => navigation.push("Options")}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}

export default Home;