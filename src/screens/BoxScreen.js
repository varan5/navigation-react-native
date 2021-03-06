import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Hello Ji</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3, 
        borderColor: 'red'
    }, 
    textStyle: {
        borderWidth: 2, 
        borderColor: 'black',
        margin: 50, 
        padding: 10, 
        fontSize: 15,
        borderWidth: 34,
    }
})

export default BoxScreen