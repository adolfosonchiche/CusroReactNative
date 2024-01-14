import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style = {style.container}>
        <Text style = {style.title}>Box Object Model</Text>
      
    </View>
  )
}

const style = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'red',

  },
  title:{
    paddingHorizontal: 100,
    paddingVertical: 20,
    marginHorizontal: 20,
    fontSize: 20,
    //backgroundColor: 'red',
    //width: 150,
    borderWidth: 10,


  }
});

