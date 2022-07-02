import Formulario from "../components/Formulario";

function NuevoJuego({juego, setJuego}){
    return(
        <>
            <h1>Llene los siguientes datos para añadir un juego</h1>
            <Formulario
                juego={juego}
                setJuego={setJuego}
            />
        </>
    )
}

export default NuevoJuego;