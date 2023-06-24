import { useEffect, useState } from "react"
import { ReqResApi } from "../api/ReqRes"
import { ReqRespListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        //llamado al API  por axios tambien se puede hacer con fetch
        ReqResApi.get<ReqRespListado>('/user')
        .then( resp => {
            console.log(resp.data.data)
        })
        .catch( console.log )

    }, [])

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

        </tbody>
    </table>


    </>
  )
}
