import { useState, useEffect } from 'react';
import Exito from '../components/Exito';

function Carrito({ carrito, setCarrito }) {
    const [total, setTotal] = useState(0);
    const [exito, setExito] = useState(false);

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

        const confirmar = confirm("¿Está Seguro?");

        if (confirmar) {
            setCarrito(carritoActualizado);
            setExito(true);
        }

        setTimeout(() => {
            setExito(false);
        }, 1000);
    }

    function handleAumentar(obj) {
        /**
         * obtener el id del objeto al cual presiono el boton
         * hacer un filtrado
         * ¿crear obj cantidad que reciba id y cantidad?
         */
        const objCantidad={
            id: obj.id,
            cantidad: obj.cantidad+1
        }
        console.log(objCantidad);
    }

    return (
        <div>
            <h1>{total > 0 ? 'En el Carrito' : 'No hay Elementos'}</h1>
            <div className='fixed-top'>
                {exito ? <Exito mensaje="Eliminado Satisfactoriamente" /> : null}
            </div>
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
                                <td>${Number(datos.precio).toLocaleString('es-CO')}</td>
                                <td><input type='submit' value='-' onClick={() => { }} />{datos.cantidad}<input type='submit' value='+' onClick={() => { handleAumentar(datos) }} /></td>
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