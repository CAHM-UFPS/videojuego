import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from './layout/Layout';
import NuevoJuego from './paginas/NuevoJuego';
import Favoritos from './paginas/Favoritos';
import Carrito from './paginas/Carrito';

function App() {
  const [juego, setJuego] = useState(JSON.parse(localStorage.getItem('juegos')) ?? []);
  const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem('carrito')) ?? []);

  useEffect(() => {
    localStorage.setItem('juegos', JSON.stringify(juego));
  }, [juego]);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='nuevo' element={<NuevoJuego juego={juego} setJuego={setJuego} />} />
          <Route path='favoritos' element={<Favoritos juego={juego} carrito={carrito} setCarrito={setCarrito}/>} />
          <Route path='carrito' element={<Carrito carrito={carrito} setCarrito={setCarrito} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
