import React from 'react';
import {Link} from 'react-scroll'
import logo from '../assets/img/logos/LAFS-logo-full.png'
import phone from '../assets/img/icons/phone-wt.png'

export default function Navbar() {

    const handleSetActive = (to) => {
        console.log(to);
      };

    return (
        <nav class="bg-secondary text-white fixed-nav flex flex-row justify-between items-center text-sm fixed z-50 w-full shadow-md top-0 md:py-4 px-4 gap-2">
            <div class="h-12">
                <img src={logo} alt="Logo" className='object-contain w-full h-full'/>
            </div>  
            <div class='flex flex-row grow justify-center max-w-[1000px]'>
                <ul class='navbar flex flex-row grow justify-evenly font-medium text-lighterGray text-center sm:text-xs break-words lg:text-base gap-x-2 cursor-pointer'>
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
                            offset={-80} 
                            duration={500} 
                            onSetActive={handleSetActive}>Sobre nosotros</Link>
            </li>
            <li>
              <Link activeClass="active" 
                            to="servicios" 
                            spy={true} 
                            smooth={true} 
                            offset={-80} 
                            duration={500} 
                            onSetActive={handleSetActive}>Servicios</Link>
            </li>
            <li>
              <Link activeClass="active" 
                            to="contacto" 
                            spy={true} 
                            smooth={true} 
                            offset={-80} 
                            duration={500} 
                            onSetActive={handleSetActive}>Contacto</Link>
            </li>
            <li>
              <Link activeClass="active" 
                            to="location" 
                            spy={true} 
                            smooth={true} 
                            offset={-80} 
                            duration={500} 
                            onSetActive={handleSetActive}>Ubicación</Link>
            </li>
                </ul>
            </div>
            <div>
            <button type="button" class=" bg-fourth text-white py-2 px-4  font-bold text-lg flex gap-2 items-center justify-center w-full hover:bg-secondary hover:border-fourth hover:border-1 transition-all ease-in hover:border-2">
              <div>
                <img src={phone} alt="Phone call icon"/>
              </div>
            +1 (787) 360 6998
            </button>
            </div>
        </nav>
        
    );
}
