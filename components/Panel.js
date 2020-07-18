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
            onPanResponderGrant: (evt) => {
                let Touches = []
                const Array = evt.nativeEvent.touches
                for(let i in Array){
                    Touches.push({
                        x:Array[i].locationX,
                        y:Array[i].locationY
                    })
                }
                setCoords(Touches)
            },
            onPanResponderMove: (evt) => {
                let Touches = []
                const Array = evt.nativeEvent.touches
                for(let i in Array){
                    Touches.push({
                        x:Array[i].locationX,
                        y:Array[i].locationY
                    })
                }
                setCoords(Touches)
            },
            onPanResponderRelease: () => {
                setCoords(null)
            },
            onPanResponderTerminate: () => {
                setCoords(null)
            }
        })
    ).current

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