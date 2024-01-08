import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import React, {useState} from 'react';

const ContadorScreen = () => {

    const [contador, setcontador] = useState(10);


  return (
    <View style= { style.container }>
      <Text style = {  style.title }>
        Contador: { contador }
      </Text>

    <TouchableOpacity style={ style.fabLocationBr }
    onPress={ () => setcontador( contador + 1 ) }
    >
      <View style={ style.fab }>
        <Text style={ style.fabText } >+1</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={ style.fabLocationBl }
    onPress={ () => setcontador( contador - 1 ) }
    >
      <View style={ style.fab }>
        <Text style={ style.fabText } >-1</Text>
      </View>
    </TouchableOpacity>
    </View>
  )
}


//estilos que podemos reutilizar
const style = StyleSheet.create({
  container: {
    flex:2,
    backgroundColor: 'cyan',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: 100
  },
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

export default ContadorScreen;
