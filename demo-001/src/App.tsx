import React from 'react'
import { Contador } from './components/Contador';
//import { Funciones } from './typescript/Funciones';
// import { ObjetosLiterales } from './typescript/ObjetosLiterales';
/* import { TiposBasicos } from './typescript/TiposBasicos';
 */
const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduction typescrip react</h1>
      <hr /> {/*  //separacion horizontal rule , linea horizontal */}
      {/*       <TiposBasicos/> */}

      {/* <ObjetosLiterales /> */}

      {/* <Funciones/> */}

      <Contador/>

    </div>
  )
}

export default App;

