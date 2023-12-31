import { useForm } from "../hooks/useForm"

export const Formularios = () => {
    const { formulario, email, password, onChange } = useForm({
        email: 'test@test.com',
        password: '123456'
    });

    return (
        <>
            <h3>Formularios</h3>

            <input type="text" className="form-control"
                placeholder="Email"
                value={email}
                onChange={(ev) => onChange(ev.target.value, 'email')}
            />

            <input type="password" className="form-control mt-3 mb-2"
                placeholder="password"
                value={password}
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
