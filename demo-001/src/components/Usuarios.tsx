import { useEffect, useRef, useState } from "react"
import { ReqResApi } from "../api/ReqRes"
import { ReqRespListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    //useState para las paginacion recibe como valor inicial la pagina 1
    const paginaRef = useRef(0);

    useEffect(() => {
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
        console.log(resp.data)
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

    const renderItem = (usuario: Usuario) => {
        return (
            <tr key={usuario.id}>
                <td><img src={usuario.avatar} alt={usuario.first_name} style={{
                    width: 30,
                    borderRadius: 100
                }} /></td>
                <td>{usuario.first_name} {usuario.last_name}</td>
                <td> {usuario.email}</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios</h3>

            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //usuarios.map(usuario => renderItem(usuario))
                        usuarios.map(renderItem)

                    }
                </tbody>
            </table>

            <button className="btn btn-primary"
                onClick={cargarUsuarios} >
                siguientes
            </button>

        </>
    )
}
