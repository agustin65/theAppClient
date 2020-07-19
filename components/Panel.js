import React, { useRef, useState } from 'react'
import { StyleSheet, View, Dimensions, PanResponder, Text } from 'react-native'
import axios from 'axios'

const PanelWidth = Dimensions.get('window').width * 9 / 10
const PanelHeight = Dimensions.get('window').height * 8 / 10


const Panel = () => {

    const [Coords, setCoords] = useState(null)

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
        console.log(Coords)
        /*if(GS.numberActiveTouches === 1  && Math.abs(GS.dx) < 10 && Math.abs(GS.dy) < 10){
           axios.post('http://192.168.0.23:5000/click')
        }*/
        setCoords(null)
    }

    const CalcularCoordenadas = (Array, GS) => {
        if (GS.numberActiveTouches === 1) {
            const Touch = {
                x: GS.dx / PanelWidth,
                y: GS.dy / PanelHeight
            }
            setCoords(Touch)
            axios.post('http://192.168.0.23:5000/move', Touch)
        }
        /*for (let i in Array) {
            Touches.push({
                x: Array[i].locationX / PanelWidth,
                y: Array[i].locationY / PanelHeight
            })
        }
        axios.post('http://192.168.0.23:5000/api', Touches)
        setCoords(Touches)*/
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