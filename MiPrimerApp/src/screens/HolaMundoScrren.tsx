import React from 'react';
import { Text, View } from 'react-native';

export const HolaMundoScrren = () => {
  return (
    //view es igual como un div
    // eslint-disable-next-line react-native/no-inline-styles
    <View style= {{
        flex:1,
        backgroundColor:'blue',
        justifyContent: 'center',
      }} > 
        <Text style={{
          fontSize:35,
          textAlign:'center',
          }}>
        Hola Mundo!
          </Text>
      </View>
  );
}
