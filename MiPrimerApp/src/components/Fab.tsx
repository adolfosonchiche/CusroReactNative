import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, TouchableNativeFeedback } from 'react-native';

//interface para las propiedades a recibir en el componente
interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}

export const Fab = ({ title, position = 'br' , onPress }: Props) => {
  return (
    <>
    <View
        style={ [
            style.fabLocation,
            (position === 'br') ? style.rigth : style.left
        ] }
    >
    <TouchableNativeFeedback         
        onPress={ onPress }
        background={ TouchableNativeFeedback.Ripple( 'black', false, 30 ) }
    >
      <View style={ style.fab }>
        <Text style={ style.fabText } > { title } </Text>
      </View>
    </TouchableNativeFeedback>
    </View>
    
      
    </>
  )
}

const style = StyleSheet.create({
    fabLocation: {
        //posicion del boton incrementar
        position: 'absolute',
        bottom: 20,
        
      },
      rigth: {
        right: 20,
      },
      left: {
        left: 20
      },
      fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 8,
      },
      fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        //textAlign: 'center'
        alignSelf: 'center'
      },
})

///export default Fab
