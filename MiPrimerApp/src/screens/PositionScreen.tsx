import React from 'react'
import { StyleSheet, View } from 'react-native'

export const PositionScreen = () => {
  return (
    <View style = {style.container}>
        <View style = {style.cajaMorada } />
        <View style = {style.cajaNaranja } />
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#28C4D9',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        //position:'relative' //por default la posición es relative
        //top: 100
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white'
    }

});
