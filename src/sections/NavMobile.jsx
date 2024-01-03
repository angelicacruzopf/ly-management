import React, { useState } from 'react';
import { Link } from 'react-scroll';
import phone from '../assets/img/icons/phone-yw.png'
import bars from '../assets/img/icons/bars-yw.png'
import logoFull from '../assets/img/logos/LAFS-logo-full.png'

export default function NavMobile() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <nav className="mobile-nav flex-row justify-between items-center text-sm bg-secondary z-50 w-full shadow-md top-0 flex p-4 fixed">
      <div className="flex h-14">
        <img src={logoFull} alt="Logo loyalty account" className='object-cover h-full w-full'/>
      </div>
      <div className="flex items-center">
        <div>
        <button type="button" class="font-bold text-lg flex  items-center hover:border-2 hover:border-fourth transition-all ease-in h-8 py-5">
            <img src={phone} alt="Phone icon yellow"/>
        </button>
        </div>
        <div
          className="text-lg text-darkGray cursor-pointer"
          onClick={handleShowNavbar}
        >
          <img src={bars} alt="Icon bars menu" />
        </div>
      </div>

      {showNavbar && (
        <div className="flex flex-col justify-center absolute top-[115px] right-[0] w-1/2">
          <ul className="navbar flex flex-col justify-evenly font-medium text-lighterGray text-center divide-y z-50 bg-white cursor-pointer">
            <li>
              <Link activeClass="active" 
                            to="hero" 
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            duration={500} 
                            onSetActive={handleSetActive}>Inicio</Link>
            </li>
            <li>
              <Link activeClass="active" 
                            to="about" 
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            duration={500} 
                            onSetActive={handleSetActive}>Sobre nosotros</Link>
            </li>
            <li>
              <Link activeClass="active" 
                            to="servicios" 
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            duration={500} 
                            onSetActive={handleSetActive}>Servicios</Link>
            </li>
            <li>
              <Link activeClass="active" 
                            to="contacto" 
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            duration={500} 
                            onSetActive={handleSetActive}>Contacto</Link>
            </li>
            <li>
              <Link activeClass="active" 
                            to="location" 
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            duration={500} 
                            onSetActive={handleSetActive}>Ubicación</Link>
            </li>
            <li>
              <Link activeClass="active" 
                            to="horarios" 
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            duration={500} 
                            onSetActive={handleSetActive}>Horarios</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
