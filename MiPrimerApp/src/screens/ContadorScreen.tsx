import { View, Text, Button, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

const ContadorScreen = () => {

    const [contador, setcontador] = useState(10);


  return (
    <View style= {
        {
            flex:2,
            backgroundColor: 'cyan'
        }
    }>
      <Text style = {
        {
            textAlign: 'center',
            fontSize: 40,
            top: 100
        }
      }>Contador: { contador }</Text>

    <TouchableOpacity
    onPress={ () => setcontador( contador + 1 ) }
    >
      <View style={{
        backgroundColor:'red',
        borderRadius: 100
      }}>
        <Text>+1</Text>
      </View>
    </TouchableOpacity>

    </View>
  )
}

export default ContadorScreen;
