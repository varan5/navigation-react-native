import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ComponentScreen = () => {
    const myName = 'Varandeep'
    return ( 
        <View>
            <Text style={styles.textStyle}>Getting started with React Native</Text>
            <Text style={styles.subTextStyle}>{myName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    }, 
    subTextStyle: {
        fontSize: 20
    }
})


export default ComponentScreen