import React from 'react'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import './Inicio.css';
const Inicio = () => {
  return (
    <div>
      <nav>
        <ul>
        <li>
            <Link to="/Inicio">Inicio</Link>
          </li>
        <li>
            <Link to="/Rick and Morty">Rick and Morty</Link>
          </li>
          <li>
            <Link to="/suscriptores">Usuarios </Link>
          </li>
          <li>
            <Link to="/animes">Animes</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Inicio