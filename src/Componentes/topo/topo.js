import React from 'react';
import { Link } from 'react-router-dom';
import LinksNav from '../navagacao/links.js';
import './topo.css'

const Topo =()=>(
    <header className='cabecalho'>
        <div className='max-width'>
            <Link className='logo' to='/'><img src='/assets/logo.png'/></Link>
            
            <LinksNav/>
        </div>
    </header>
)
export default Topo;