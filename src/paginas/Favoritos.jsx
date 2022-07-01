import {useState} from 'react';
import Exito from '../components/Exito';

function Favoritos({ juego, carrito, setCarrito }) {
    const [exito, setExito]=useState(false);

    function handleAgregar(id){
        const juegoCarrito=juego.find((datos)=>{
            return datos.id===id;
        });

        setCarrito([...carrito, juegoCarrito]);
        setExito(true);

        setTimeout(()=>{
            setExito(false);
        }, 1000)
    }

    return (
        <>
            <h1>Juegos Registrados</h1>
            {exito? <Exito mensaje="Añadido al Carrito"/> : null}
            <div className="row m-3">
                {juego.map((datos) => (
                    <div className="col-sm-4" key={datos.id}>
                        <div className="card mb-3" style={{ width: 288 }}>
                            <img src={datos.imagen} className="card-img-top" alt="icono" />
                            <div className="card-body">
                                <h5 className="card-title">{datos.nombre}</h5>
                                <p className="card-text">{datos.tipo}</p>
                                <h5 className="card-title">${datos.precio}</h5>
                                <button className='btn btn-primary' type='button' onClick={() => handleAgregar(datos.id)}>Añadir al Carrito</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Favoritos;