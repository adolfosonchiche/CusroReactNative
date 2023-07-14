/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable react/react-in-jsx-scope */
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
