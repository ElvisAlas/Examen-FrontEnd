import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import React, { useState } from 'react';
import './App.css';


let vacio = '';

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const abrir_cerrar_menu = () => {

    let menu_desplegable = document.getElementById('menu');
    let boton_cerrar = document.getElementById('x');
    menu_desplegable.classList.toggle('abrir_menu');
    boton_cerrar.classList.toggle('colocar_x');

  }
  return (
    <>
      <div className='container'>

        <header>
          <div className='barras'>
            <button onClick={abrir_cerrar_menu} className='boton_menu' id='x'></button>
          </div>

          <nav id='menu' className='desplegable'>
            <ul>
              <li>
                <a href={vacio}>Ingreso Personal</a>
              </li>
              <li>
                <a href={vacio}>Vacaciones</a>
              </li>
              <li>
                <a href={vacio}>Permisos</a>
              </li>
              <li>
                <a href={vacio}>Incidentes</a>
              </li>
              <li>
                <a href={vacio}>Contactanos</a>
              </li>
            </ul>
          </nav>
        </header>

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
