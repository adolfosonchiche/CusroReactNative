import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

//interface para las propiedades a recibir en el componente
interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}

export const Fab = ({ title, position = 'br' , onPress }: Props) => {
  return (
    <>
    <TouchableOpacity 
        style={ (position === 'br') ? style.fabLocationBr : style.fabLocationBl }
        onPress={ onPress }
    >
      <View style={ style.fab }>
        <Text style={ style.fabText } > { title } </Text>
      </View>
    </TouchableOpacity>
      
    </>
  )
}

const style = StyleSheet.create({
    fabLocationBl: {
        //posicion del boton incrementar
        position: 'absolute',
        bottom: 20,
        left: 20
      },
      fabLocationBr: {
        //posicion del boton incrementar
        position: 'absolute',
        bottom: 20,
        right: 20
      },
      fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'
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
