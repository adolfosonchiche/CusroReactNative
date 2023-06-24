import { useEffect } from "react"
import { ReqResApi } from "../api/ReqRes"

export const Usuarios = () => {

    useEffect(() => {
        //llamado al API  por axios tambien se puede hacer con fetch
        ReqResApi.get('/user')
        .then( resp => {
            console.log(resp.data.data)
        })

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
