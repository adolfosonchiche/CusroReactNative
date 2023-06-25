import { useState } from "react"

export const Formularios = () => {

    const [formulario, setFormulario] = useState({
        email: 'test@test.com',
        password: '123456'
    });

    const onChange = (value: string, campo: string) => {
        setFormulario({
            ...formulario, //desestructuracion del formulario para no 
            [campo]: value,
        })
    }


    return (
        <>
            <h3>Formularios</h3>

            <input type="text" className="form-control"
                placeholder="Email"
                value={formulario.email}
                onChange={(ev) => onChange(ev.target.value, 'email')}
            />

            <input type="password" className="form-control mt-3 mb-2"
                placeholder="password"
                value={formulario.password}
                onChange={(ev) => onChange(ev.target.value, 'password')}
            />


            <code>
                <pre>
                    {JSON.stringify(formulario, null, 2)}
                </pre>
            </code>

        </>
    )
}
