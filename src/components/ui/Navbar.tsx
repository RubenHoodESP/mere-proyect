import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <>
        <nav className='navbar navbar-dark fixed-top navbar-expand-lg bg-transparent'>
            <div className="container-fluid">
                <span className="navbar-brand text-white">Daniel Meré</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-grow-0 text-end" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-white" aria-current="page" href="#home">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#services">Experiencia</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#contact">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
