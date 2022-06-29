function Favoritos({juego}) {
    //const [nombre, tipo, precio, imagen]=juego;

    return (
        <>
            <h1>Desde Favoritos</h1>
            {juego.map((valores)=>(
                <>
                    <h3>{valores.nombre}</h3>
                    <h3>{valores.tipo}</h3>
                    <h3>{valores.precio}</h3>
                    <img src={valores.imagen} alt="imagen juego"/>
                </>
            ))}
        </>
    );
}

export default Favoritos;