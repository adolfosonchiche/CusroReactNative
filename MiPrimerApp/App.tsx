
import React from 'react';
import ContadorScreen from './src/screens/ContadorScreen';
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
//import { Text, View } from 'react-native';
//import { HolaMundoScrren } from './src/screens/HolaMundoScrren';

const App = () => {
  /*     //<HolaMundoScrren />
  //view es igual como un div
    // <ContadorScreen /> */
  return (

    <SafeAreaView style= { { flex:1 }}>
      <BoxObjectModelScreen />
    </SafeAreaView>

  );
};

export default App;
