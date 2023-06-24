import { useEffect, useRef, useState } from 'react'
import { ReqRespListado, Usuario } from '../interfaces/reqRes';
import { ReqResApi } from '../api/ReqRes';

export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    //useState para las paginacion recibe como valor inicial la pagina 1
    const paginaRef = useRef(0);

    useEffect(() => {
        //llamando a la api
        cargarUsuarios();

    }, [])


    //funcion para realizar varias veces la peticion http
    const cargarUsuarios = async () => {
        //llamado al API  por axios tambien se puede hacer con fetch
        const resp = await ReqResApi.get<ReqRespListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })

        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data) //establecer los usuarios
            paginaRef.current++;
        } else {
            alert('NO HAY MAS REGISTROS');
        }
        /* .then(resp => {
             //console.log(resp.data.data)
             setUsuarios(resp.data.data) //establecer los usuarios
         })
         .catch(console.log)*/
         
    }

    return {
        usuarios,
        cargarUsuarios
    }


}
