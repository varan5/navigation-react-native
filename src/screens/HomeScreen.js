import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen here</Text>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title='Go to Components Demo'
      />
      <Button 
      onPress={() => navigation.navigate('List')}
      title='Go to List Demo'
    />

      <Button
        title='Go to Image Sceen'
        onPress={() => navigation.navigate('Image')}
      />

      <Button
      title='Go to Counter Sceen'
      onPress={() => navigation.navigate('Counter')}
    />
    <Button
      title='Go to Color Sceen'
      onPress={() => navigation.navigate('Color')}
    /> 
    <Button
      title="Go to Square Screen"
      onPress={() => navigation.navigate('Square')}
    />
    <Button
      title="Go to Box Screen"
      onPress={() => navigation.navigate('Box')}
    />

    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

export default HomeScreen;
