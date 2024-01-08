import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import React, {useState} from 'react';

const ContadorScreen = () => {

    const [contador, setcontador] = useState(10);


  return (
    <View style= { style.container }>
      <Text style = {  style.title }>
        Contador: { contador }
      </Text>

    <TouchableOpacity
    onPress={ () => setcontador( contador + 1 ) }
    >
      <View style={ style.increment }>
        <Text style = {  style.botton }>+1</Text>
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
  increment: {
    backgroundColor:'blue',
    borderRadius: 100
  },
  botton: {
    justifyContent: 'center',
    fontSize: 30,
  }
})

export default ContadorScreen;
