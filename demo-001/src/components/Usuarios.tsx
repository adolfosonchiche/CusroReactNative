import { useUsuarios } from '../hooks/useUsuarios';
import {  Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

    const { usuarios, paginaSiguiente, paginaAnterior } = useUsuarios();

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
                onClick={paginaAnterior} >
                Anteriores
            </button>
                    &nbsp;
            <button className="btn btn-primary"
                onClick={paginaSiguiente} >
                siguientes
            </button>

        </>
    )
}
