//useReducer una alternativa del useState un estado que pude cambiar de diferentes maneras

import { useEffect, useReducer } from "react"

interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}


//estado inicial
const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

//reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: '',
                username: ''
            }

        case 'login':
            const { nombre, username } = action.payload;
            return {
                validando: false,
                token: 'abc123',
                //nombre: action.payload.nombre,  -- declaramos una constante para solo utilizar los valores
                //username: action.payload.username
                nombre,
                username
            }

        default:
            return state;
    }

}

type LoginPayload = {
    username: string;
    nombre: string;
}

//type para la accion para el reducer que puede tener dos acciones
type AuthAction =
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload }



export const Login = () => {

    //useReducer
    // const [state, dispatch] = useReducer(authReducer, initialState);
    //posemos obtener el validando de una vez en lugar de todo el objeto state u otro valor
    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState);

    //useEffect
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' }) //disparar esta accion despues de una segundo y medio
        }, 1500);
    }, []);


    const login = () => {
        dispatch({
            type: 'login',
            payload:
            {
                nombre: 'Hector',
                username: 'Strider'
            }
        })
    }

    const logout = () => {
        dispatch({
            type: 'logout'
        })
    }


    if (validando) {
        return (
            <>
                <h3>Login</h3>

                <div className="alert alert-info">
                    Validando....
                </div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>

            {
                (token)
                    ? <div className="alert alert-success">  Autenticado como: {nombre} </div>
                    : <div className="alert alert-danger">  No autenticado.. </div>
            }

            {
                (token)
                    ? (
                        <button className="btn btn-danger"
                            onClick={logout}
                        >
                            Logout
                        </button>
                    )
                    : (
                        <button className="btn btn-primary"
                            onClick={login}
                        >
                            Login
                        </button>
                    )
            }







        </>
    )
}
