import React from 'react'
import { View, Button, StyleSheet, Dimensions } from 'react-native'
import axios from 'axios'

const Size = Dimensions.get('window').width * 2 / 10

const Boton = () => {

    const OnPressHandler = () => {
        axios.post('http://192.168.0.23:5000/text')
    }

    return (
        <View style={Style.view}>
            <Button title='x' onPress={OnPressHandler} style={Style.boton} />
        </View>
    )
}

const Style = StyleSheet.create({
    view: {
        backgroundColor: 'red',
        width: Size,
        height: Size,
        borderRadius: 50
    },
    boton: {
        color: 'red'
    }
})

export default Boton