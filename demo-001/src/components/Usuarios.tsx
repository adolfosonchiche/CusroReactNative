import { useEffect, useState } from "react"
import { ReqResApi } from "../api/ReqRes"
import { ReqRespListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        //llamado al API  por axios tambien se puede hacer con fetch
        ReqResApi.get<ReqRespListado>('/users')
            .then(resp => {
                //console.log(resp.data.data)
                setUsuarios(resp.data.data) //establecer los usuarios
            })
            .catch(console.log)

    }, [])

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

            <button className="btn btn-primary">
                siguientes
            </button>

        </>
    )
}
