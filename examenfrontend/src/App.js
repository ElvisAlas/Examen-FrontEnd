import React, { useState } from 'react';
import './App.css';
import ConsultaEliminacionEmpleado from './ConsultaEliminacionEmpleado';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [showConsultaEliminacion, setShowConsultaEliminacion] = useState(false);

  const abrirCerrarMenu = () => {
    setIsHovered(!isHovered);
    if (!showConsultaEliminacion) {
      setShowConsultaEliminacion(true);
    }
  };

  return (
    <>
      <div className='container'>

        <header>
          <div className='barras'>
            <button onClick={abrirCerrarMenu} className='boton_menu' id='x'></button>
          </div>

          <nav id='menu' className='desplegable'>
            <ul>
              <li>
                <a href='#' onClick={abrirCerrarMenu}>Adm. Empleados</a>
              </li>
              <li>
                <a href='#'>Vacaciones</a>
              </li>
              <li>
                <a href='#'>Permisos</a>
              </li>
              <li>
                <a href='#'>Incidentes</a>
              </li>
              <li>
                <a href='#'>Contactanos</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          {showConsultaEliminacion && <ConsultaEliminacionEmpleado />}
        </main>

        <footer>
          <div className="redes-sociales">
            <a href="#" className={isHovered ? 'icono-red-social hovered' : 'icono-red-social'} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <FaFacebookF />
            </a>
            <a href="#" className={isHovered ? 'icono-red-social hovered' : 'icono-red-social'} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <FaTwitter />
            </a>
            <a href="#" className={isHovered ? 'icono-red-social hovered' : 'icono-red-social'} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <FaInstagram />
            </a>
            <a href="#" className={isHovered ? 'icono-red-social hovered' : 'icono-red-social'} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <FaLinkedin />
            </a>
          </div>
        </footer>

      </div>
    </>
  );
}

export default App;
