
import React from 'react';
import ContadorScreen from './src/screens/ContadorScreen';
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';
//import { Text, View } from 'react-native';
//import { HolaMundoScrren } from './src/screens/HolaMundoScrren';

const App = () => {
  /*     //<HolaMundoScrren />
  //view es igual como un div
    // <ContadorScreen /> */
  return (

    <SafeAreaView style= { { flex:1 }}>
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
        {/* <PositionScreen /> */}
        <FlexScreen />
    </SafeAreaView>

  );
};

export default App;
