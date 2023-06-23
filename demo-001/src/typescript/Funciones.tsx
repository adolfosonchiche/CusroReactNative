import React from 'react'

export const Funciones = () => {

    //funciones debemos de asignar el tipo de valor que retorna
    //tambien los parametros se lees debe de asignar el tipo
    const sumar = (a: number , b: number): number => {
        return a + b;
    }

  return (
    <>
    <h3>Funciones</h3>

    <span>El resultado es: {sumar(10 , 2)} </span>

    </>
  )
}
