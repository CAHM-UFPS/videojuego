import { useState, useEffect } from 'react';
import Exito from '../components/Exito';

function Carrito({ carrito, setCarrito }) {
    const [cantidad, setCantidad]=useState(0);
    const [total, setTotal] = useState(0);
    const [exito, setExito]=useState(false);

    useEffect(() => {
        const sumar = carrito.reduce((sumatoria, act) => {
            return sumatoria += Number(act.precio);
        }, 0);

        setTotal(sumar);
    }, [carrito]);

    function handleEliminar(id) {
        const carritoActualizado = carrito.filter((datos) => {
            return datos.id !== id;
        });

        const confirmar=confirm("¿Está Seguro?");

        if(confirmar){
            setCarrito(carritoActualizado);
            setExito(true);
        }

        setTimeout(()=>{
            setExito(false);
        }, 500);
    }

    return (
        <div>
            <h1>{total>0? 'En el Carrito' : 'No hay Elementos'}</h1>
            {exito? <Exito mensaje="Eliminado Satisfactoriamente"/> : null}
            <div className='shadow p-3 mb-5 bg-white rounded'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carrito.map((datos) => (
                            <tr key={datos.id}>
                                <td>{datos.nombre}</td>
                                <td>{datos.tipo}</td>
                                <td>${datos.precio}</td>
                                <td>{cantidad}</td>
                                <td><button type="submit" className='btn btn-danger' onClick={() => { handleEliminar(datos.id) }}>Eliminar</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h3>Total: ${total.toLocaleString('es-CO')}</h3>
            </div>
        </div>
    )
}

export default Carrito;