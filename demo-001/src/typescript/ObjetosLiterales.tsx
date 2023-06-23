//class = sirve para crear instancias 
//interface = es mas facil de expandir que el type, el objetivo es indicar como va ser el objeto

interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    departamento: string;
    casaNo: number;
}


export const ObjetosLiterales = () => {


    /* const persona: Persona = {
         nombre: 'Hector',
         edad: 24,
         direccion: {
             pais: 'Guatemala',
             departamento: 'Quetgo',
             casaNo: 13
         }
     }
 
     //para agregar una nueva propiedad a el objeto persona, se le debe de indicar para que
     //typescript no marque error
     //por ejemplo si queremos agregar persona.apellido = 'son'.
     */

    const persona: Persona = { //le agregamos la interfaz persona al obejto
        nombreCompleto: 'Hector',
        edad: 24,
        direccion: {
            pais: 'Guatemala',
            departamento: 'Quetgo',
            casaNo: 13
        }
    }


    return (
        <>
            <h3>ObjetosLiterales</h3>

            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>

        </>
    )
}
