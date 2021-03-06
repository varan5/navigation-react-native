import React, { useState } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [blue, setBlue] = useState(0)
    const [green, setGreen] = useState(0)
    const COLOR_INCREAMENT = 15;
    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change)
                return
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change)
                return
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
                return 
            default: 
                return 
        }
    }


    return (
        <View>
            <ColorCounter 
                color="Red"
                onIncrease={() => setColor('red', COLOR_INCREAMENT)}
                onDecrease={() => setColor('red', -1*COLOR_INCREAMENT)}
            />
            <ColorCounter
                color="Blue"
                onIncrease={() => setColor('blue', COLOR_INCREAMENT)} 
                onDecrease={() => setColor('blue', -1*COLOR_INCREAMENT)}
            />
            <ColorCounter
                color="Green"
                onIncrease={() => setColor('green', COLOR_INCREAMENT)} 
                onDecrease={() => setColor('green', -1*COLOR_INCREAMENT)}
            />
            <View
                style={{ 
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red}, ${blue}, ${green})`}}
            />            
        </View>
    )
}

const styles = StyleSheet.create({

})


export default SquareScreen







