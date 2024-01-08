import { View, Text, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import { Fab } from '../components/Fab';

const ContadorScreen = () => {

    const [contador, setcontador] = useState(10);


  return (
    <View style= { style.container }>
      <Text style = {  style.title }>
        Contador: { contador }
      </Text>

    <Fab 
      title = "+1"
    />

    {/* <TouchableOpacity style={ style.fabLocationBl }
    onPress={ () => setcontador( contador - 1 ) }
    >
      <View style={ style.fab }>
        <Text style={ style.fabText } >-1</Text>
      </View>
    </TouchableOpacity> */}
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
  
  
})

export default ContadorScreen;
