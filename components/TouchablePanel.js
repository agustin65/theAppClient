import React from 'react'
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import axios from 'axios'

const TouchablePanel = () => {

    const TouchStartHandler = event =>{
        const Obj = {
            x:Math.trunc(event.nativeEvent.locationX),
            y:Math.trunc(event.nativeEvent.locationY)
        }
        console.log('entra')
    }

    const TouchEndHandler = event =>{
        const Obj = {
            x:Math.trunc(event.nativeEvent.locationX),
            y:Math.trunc(event.nativeEvent.locationY)
        }
        console.log('sale')
    }

    return (
        <TouchableOpacity 
            style={styles.touch} 
            onPressIn={(e)=>TouchStartHandler(e)} 
            onPressOut={(e)=>TouchEndHandler(e)}
        />
    )
}

const styles = StyleSheet.create({
    touch: {
        width: (Dimensions.get('window').width*9/10),
        height: (Dimensions.get('window').height*8/10),
        backgroundColor: 'gray'
    }
})

export default TouchablePanel