import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Home from '../paginas/home/home.js';
import Sabores from '../paginas/sabores/sabores.js';
import Sobre from '../paginas/sobre/sobre.js';

const Rotas =()=>(
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/sabores' element={<Sabores />}/>
            <Route path='/sobre' element={<Sobre />}/>
        </Routes>
    </BrowserRouter>
)
export default Rotas;