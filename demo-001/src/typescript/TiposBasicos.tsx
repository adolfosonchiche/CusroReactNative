
export const TiposBasicos = () => {

    let nombre: string = 'Hector';
    const edad: number = 24;
    const estaActivo: boolean = true;

    const poderers: string[] = ['velociadad', 'volar', 'respirar en el agua']
    //const poder=[] tipo any que puede tener numbers, string, boolean


  return (
    //fragmento <> </>
    <> 
    <h3>Tipos Basicos</h3>
    {nombre}, {edad} , {(estaActivo)? 'activo' : 'inactivo'}
    <br/>
    { poderers.join(', ')}
    </>
  )
}
