/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';

const App = () => {
  return (
    //view es igual como un div
    // eslint-disable-next-line react-native/no-inline-styles
    <View style= {{
      flex:1,
      backgroundColor:'red',
      justifyContent: 'center',
    }} > 
      <Text style={{
        fontSize:35,
        textAlign:'center',
        }}>
        hola mundo
        </Text>
    </View>
  );
};

export default App;