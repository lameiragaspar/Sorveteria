import React from 'react';
import { Link } from 'react-router-dom';
import './links.css'

const LinksNav =()=>(
    <nav className='links'>
        <Link className='a' to='/'>Home</Link>
        <Link className='a' to='/sabores'>Sabores</Link>
        <Link className='a' to='/sobre'>Sobre</Link>
    </nav>
)
export default LinksNav;