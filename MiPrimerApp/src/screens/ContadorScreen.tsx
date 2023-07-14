import { View, Text, Button } from 'react-native';
import React, {useState} from 'react';

const ContadorScreen = () => {

    const [contador, setcontador] = useState(10);


  return (
    <View style= {
        {
            flex:1,
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

    <Button
      title= "contador"
      onPress={ () => setcontador(contador + 1)}
    />

    </View>
  )
}

export default ContadorScreen;
