//hook - useState
import { useCounter } from '../hooks/useCounter'

export const ContadorConHook = () => {

    const { valor, acumular } = useCounter(10);


    return (
        <>
            <h3>Contador con hook:  <small>{valor}</small> </h3>

            <button className='btn btn-primary'
                onClick={() => acumular(1)}
            >
                +1
            </button>
            {/* hacer una separacion- caracter de espacio */} &nbsp;
            <button className='btn btn-secondary'
                onClick={() => acumular(-1)}
            >
                -1
            </button>
        </>
    )
}
