import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import Layout from './layout/Layout';
import NuevoJuego from './paginas/NuevoJuego';
import Favoritos from './paginas/Favoritos';

function App() {
  const [juego, setJuego]=useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='nuevo' element={<NuevoJuego juego={juego} setJuego={setJuego}/>}/>
          <Route path='favoritos' element={<Favoritos juego={juego}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
