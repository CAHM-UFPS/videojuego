import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg fixed-top bg-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link" id='enlaces' to="/nuevo">Registrar</Link>
                                <Link className="nav-link" id='enlaces' to="/favoritos">Favoritos</Link>
                                <Link className="nav-link" id='enlaces' to="/carrito">Carrito</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout;