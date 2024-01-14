import React from 'react'
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native'

//const dimensions = Dimensions.get('window'); //esto lo podemos obtener asi:
//const { width, height } = Dimensions.get('window');


export const DimensionesScreen = () => {
    //hook para obtener dimensiones del dispositivo
//    const dimensions useWindowDimensions()
//utilizando este hook si podemos obtener las dimensiones correctas al momento de girar la pantalla
const { width,height } = useWindowDimensions();

  return (
    <View>
        <View style= { style.container } >
            <View style = { {
                ...style.cajaMorada,
                width: width * .50,
                } } >
            </View>
            <View style = { style.cajaNaranja } >
            </View>
        
        </View>
        <Text style = { style.title }> W: { width } , H: { height }</Text>
    </View>
    
  )
}

const style = StyleSheet.create({
    container: {
        //este es el padre
        width: '100%',
        height: 300,
        backgroundColor: 'red',

    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        width: 50,
        height: 50,
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B'
    },
    title:{
        fontSize: 30,
        justifyContent: 'center'
    }

});

/**
 * para sacar las dimensiones de un dispositivo
 * podemos utilizar un hook WindowDimensions o la libreria Dimensions de react-native
 */