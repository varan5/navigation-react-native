import React, {useState} from 'react'
import { Text, StyleSheet, Button, View } from 'react-native'

const CounterScreen = () => {
    const [counter, setCounter] = useState(0)

    return (
        <View>
            <Text>This is a Counter App</Text>
            <Button 
                title="Increament"
                onPress={() => setCounter(counter + 1)}
            />
            <Button 
                title="Decreament"
                onPress={() => setCounter(counter - 1)}
            />
            <Button 
                title="Reset Counter"
                onPress={() => setCounter(0)}
            />
            <Text>{counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

}) 


export default CounterScreen 