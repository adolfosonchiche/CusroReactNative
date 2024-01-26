import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
  return (
    <View style = { style.container } >
        <Text style ={ style.caja1 } >Caja 1</Text>
        <Text style ={ style.caja2 } >Caja 2</Text>
        <Text style ={ style.caja3 } >Caja 3</Text>

    </View>
  )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D0'
    },
    caja1: {
        flex:4, //4 + 4+ 2 = 10   4/10  esta tomando un 40% de la pantalla
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
    caja2: {
        flex:4, //4 + 4+ 2 = 10   4/10  esta tomando un 40% de la pantalla
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
    caja3: {
        flex: 2,    //4 + 4+ 2 = 10   2/10  esta tomando un 20% de la pantalla
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    }
});