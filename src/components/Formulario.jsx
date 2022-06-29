import {useState} from 'react';

function Formulario({juego, setJuego}) {
    const [nombre, setNombre]=useState("");
    const [tipo, setTipo]=useState("");
    const [precio, setPrecio]=useState(0);
    const [imagen, setImagen]=useState("");

    function handleSubmit(e){
        e.preventDefault();
        
        if([nombre, tipo, precio, imagen].includes("")){
            console.log("Campos Vacíos");
            return;
        }

        const objetoJuego={
            nombre,
            tipo,
            precio,
            imagen
        }
        setJuego([...juego, objetoJuego]);
        console.log("Juego guardado correctamente");
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre del Juego</label>
                <input type="text" className="form-control" id="nombre" placeholder="Ingrese Nombre del Juego" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}/>
            </div>
            <div className="mb-3">
                <label htmlFor="tipo" className="form-label">Tipo</label>
                <select className="form-select" id="tipo" value={tipo} onChange={(e)=>{setTipo(e.target.value)}}>
                    <option defaultValue>---Seleccione una opcion---</option>
                    <option id="accion">Acción</option>
                    <option id="shooter">Shooter</option>
                    <option id="terror">Terror</option>
                    <option id="aventura">Aventura</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="precio" className="form-label">Precio</label>
                <input type="number" className="form-control" id="precio" placeholder="Ingrese el Precio del Juego" value={precio} onChange={(e)=>{setPrecio(e.target.value)}}/>
            </div>
            <div className="mb-3">
                <label htmlFor="imagen" className="form-label">URL Imagen</label>
                <input type="text" className="form-control" id="imagen" placeholder="http://www.ejemplo.com" value={imagen} onChange={(e)=>{setImagen(e.target.value)}}/>
            </div>
            <button type="submit" className="btn btn-primary">Registrar</button>
        </form>
    )
}

export default Formulario;