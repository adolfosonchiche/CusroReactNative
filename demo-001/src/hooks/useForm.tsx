import { useState } from "react";

export const useForm = <T extends Object>(formulario: T) => { //generico <T>

    const [state, setState] = useState( formulario );

    const onChange = (value: string, campo: keyof T) => { //campo le indicamos que solo puede ser email o password
        setState({
            ...state, //desestructuracion del formulario para no 
            [campo]: value,
        })
    }

  return {
    ...state,
    onChange,
    formulario: state,
  }
}
