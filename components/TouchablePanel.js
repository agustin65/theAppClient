import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import axios from 'axios'

const PanelWidth = Dimensions.get('window').width * 9 / 10
const PanelHeight = Dimensions.get('window').height * 8 / 10


const TouchablePanel = () => {

    const [error, setError] = useState(false)

    //let Timer = null

    const TouchStartHandler = async event => {
        const Obj = {
            x: (event.nativeEvent.locationX / Dimensions.get('window').width),
            y: (event.nativeEvent.locationY / Dimensions.get('window').height)
        }
        const respuesta = await axios.post('http://192.168.0.23:5000/start', Obj)
        if (respuesta.data !== 'ok') {
            setError(true)
            console.log('error')
        }
        //Timer = setInterval((event) => FollowTouchHandler(event), 100)
    }

    const FollowTouchHandler = e => {
        console.log(e)
    }

    const TouchEndHandler = async event => {
        //clearInterval(Timer)
        const Obj = {
            x: (event.nativeEvent.locationX / Dimensions.get('window').width),
            y: (event.nativeEvent.locationY / Dimensions.get('window').height)
        }
        const respuesta = await axios.post('http://192.168.0.23:5000/stop', Obj)
        if (respuesta.data !== 'ok') {
            setError(true)
            console.log('error')
        }
    }

    return (
        <TouchableOpacity
            style={styles.touch}
            onPressIn={(e) => TouchStartHandler(e)}
            onPressOut={(e) => TouchEndHandler(e)}
        />
    )
}

const styles = StyleSheet.create({
    touch: {
        width: PanelWidth,
        height: PanelHeight,
        backgroundColor: 'gray'
    }
})

export default TouchablePanel