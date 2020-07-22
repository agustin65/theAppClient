import React, { useRef, useState } from 'react'
import { StyleSheet, View, Dimensions, PanResponder, Text } from 'react-native'
import axios from 'axios'

const PanelWidth = Dimensions.get('window').width * 9 / 10
const PanelHeight = Dimensions.get('window').height * 8 / 10


const Panel = () => {

    const [Coords, setCoords] = useState(null)

    const [Counter, setCounter] = useState(0)

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onStartShouldSetPanResponderCapture: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderStart: (evt, gestureState) => {
                CalcularCoordenadas(evt.nativeEvent.touches, gestureState)
            },
            onPanResponderMove: (evt, gestureState) => {
                CalcularCoordenadas(evt.nativeEvent.touches, gestureState)
            },
            onPanResponderRelease: () => {
                Stop()
            },
            onPanResponderTerminate: () => {
                Stop()
            }
        })
    ).current

    const Stop = () => {
        setCoords(null)
        axios.post('http://192.168.0.23:5000/stop')
    }

    const CalcularCoordenadas = (Array, GS) => {
        if (GS.numberActiveTouches === 1 && Array[0].timestamp % 2 === 0) {
            const Touch = {
                x: GS.dx / PanelWidth,
                y: GS.dy / PanelHeight
            }
            setCoords(Touch)
            if (GS.x0 > PanelWidth * 0.9) {
                axios.post('http://192.168.0.23:5000/scroll', Touch)
                console.log('asd')
            } else {
                axios.post('http://192.168.0.23:5000/move', Touch)
            }
        }

    }

    return (
        <View {...panResponder.panHandlers} style={styles.touch}>
            <Text>{JSON.stringify(Coords)}</Text>
            <Text>{JSON.stringify(Counter)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    touch: {
        width: PanelWidth,
        height: PanelHeight,
        backgroundColor: '#666666'
    }
})

export default Panel