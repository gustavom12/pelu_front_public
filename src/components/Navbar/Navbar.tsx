import React, { } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.sass'
const Navbar = ({ setModal }: { setModal: any }) => {
  return (
    <div className="Navbar">
      <Link to="/">
        <h3 className="text-serif2 m-0 cursor-pointer text-white">Nombre Ejemplo</h3>
      </Link>
      <div>
        <h2 className="fas fa-sort-down">
          <div className="toggle">
            <h6 className="fw-bold m-0 text-serif text-center"
              onClick={() => setModal((val: any) => !val)}
            >Mis Turnos</h6>
            <h6 className="fw-bold m-0 text-serif text-center"
              onClick={() => {
                localStorage.clear()
                setTimeout(() => {
                  window.location.reload()
                }, 600);
              }}
            >
              Cerrar sesión
            </h6>
          </div>
        </h2>
      </div>
    </div>
  )
}
export default Navbar
