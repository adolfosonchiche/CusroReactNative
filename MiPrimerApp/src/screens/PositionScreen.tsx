import React from 'react'
import { StyleSheet, View } from 'react-native'

export const PositionScreen = () => {
  return (
    <View style = {style.container}>
        <View style = {style.cajaMorada } />
        <View style = {style.cajaNaranja } />
        <View style = {style.cajaVerde } />
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex:1,
        //width: 300,
        //height: 400,
        backgroundColor: '#28C4D9',
        //justifyContent: 'center',
        //alignItems: 'center'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        //position:'relative' //por default la posición es relative
        top: 0,
        position: 'absolute',
        right: 0,
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        //top: -10,
        position: 'absolute',
        bottom: 0,
        right:0,
    },
    cajaVerde: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        left:0,

        //top: -10,
        /*position: 'absolute',
        bottom: 0,
        left:0,
        top: 0,
        right: 0,*/
       // ...StyleSheet.absoluteFillObject
    }

});

//en la posicion absoluta los elementos se colocan encima de otra si no se le indica otra posición especificamente
//utilizando top left right ...

/// en la posicion relativa los elementos se van colocando verticalmente relativo al padre