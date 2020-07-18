import React, { useRef, useState } from 'react'
import { StyleSheet, View, Dimensions, PanResponder, Text } from 'react-native'
import axios from 'axios'

const PanelWidth = Dimensions.get('window').width * 9 / 10
const PanelHeight = Dimensions.get('window').height * 8 / 10


const Panel = () => {

    const [Coords, setCoords] = useState(null)

    const [StartCoords, setStartCoords] = useState(null)

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onStartShouldSetPanResponderCapture: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderStart: (evt) => {
                CalcularCoordenadas(evt.nativeEvent.touches)
            },
            onPanResponderMove: (evt) => {
                CalcularCoordenadas(evt.nativeEvent.touches)
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
        setStartCoords(null)
        axios.post('http://192.168.0.23:5000/stop')
    }

    const CalcularCoordenadas = Array => {
        if(!StartCoords){
            setStartCoords(true)
            const Obj = {
                x: Array[0].locationX / PanelWidth,
                y: Array[0].locationY / PanelHeight
            }
            axios.post('http://192.168.0.23:5000/start', Obj)
        }
        let Touches = []
        for (let i in Array) {
            Touches.push({
                x: Array[i].locationX / PanelWidth,
                y: Array[i].locationY / PanelHeight
            })
        }
        axios.post('http://192.168.0.23:5000/api', Touches)
        setCoords(Touches)
    }

    return (
        <View {...panResponder.panHandlers} style={styles.touch}>
            <Text>{JSON.stringify(Coords)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    touch: {
        width: PanelWidth,
        height: PanelHeight,
        backgroundColor: 'white'
    }
})

export default Panel