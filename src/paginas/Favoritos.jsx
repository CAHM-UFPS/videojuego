import { useState } from 'react';
import Exito from '../components/Exito';
import Error from '../components/Error';

function Favoritos({ juego, carrito, setCarrito }) {
    const [exito, setExito] = useState(false);
    const [error, setError] = useState(false);

    function handleAgregar(id) {
        const juegoCarrito = juego.find((datos) => {
            return datos.id === id;
        });
        
        if (!carrito.some((datos) => datos.id === id)) { //Si no existe el elemento en el carrito
            juegoCarrito.cantidad=1;
            setCarrito([...carrito, juegoCarrito]);
            setExito(true);
        }else{
            setError(true);
        }

        setTimeout(() => {
            setExito(false);
            setError(false);
        }, 1000)
    }

    return (
        <>
            <h1>Juegos Registrados</h1>
            <div className='fixed-top'>
                {exito ? <Exito mensaje="Añadido al Carrito" /> : error ? <Error mensaje="El elemento ya está en el carrito"/> : null}
            </div>
            <div className="row m-3">
                {juego.map((datos) => (
                    <div className="col-sm-4" id="titulo-2" key={datos.id}>
                        <div className="card mb-3" style={{ width: 288 }}>
                            <img src={datos.imagen} className="card-img-top" alt="icono" />
                            <div className="card-body">
                                <h5 className="card-title">{datos.nombre}</h5>
                                <p className="card-text">{datos.tipo}</p>
                                <h5 className="card-title">${Number(datos.precio).toLocaleString('es-CO')}</h5>
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