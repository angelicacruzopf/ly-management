import logoIcn from '../assets/img/logos/LAFS-logo-white.png';
import fbLogo from '../assets/img/logos/Facebook@2x.png';
import {Link} from "react-scroll"

export default function Footer() {

    const handleSetActive = (to) => {
        console.log(to);
      };
    return(
        <section class="bg-darkGray flex flex-col justify-center items-center py-16">
            <div class="md:grid grid-cols-3 w-[90%] sm:w-3/5 place-items-center pb-16 max-w-[1000px]">
                <div class="flex flex-col gap-6 w-full items-center">
                    <div class="justify-self-center self-center flex justify-center items-center h-full">
                        <img src={logoIcn} alt="Ícono del logo" class="md:object-cover w-[95%]"/>
                    </div>
                    <p class="text-white text-center">Tu dinero en manos fieles</p>
                    <div class="text-white opacity-50 text-5xl flex flex-row justify-evenly mb-6 md:mb-0 w-10">
                        <img src={fbLogo} alt="Logo Facebook" className='object-cover w-full h-full'/>

                    </div>
                    
                </div>
                <div class="flex flex-col gap-y-4 mb-4 sm:mb-0 text-white">
                    <h3 class=" font-bold">Mapa del sitio</h3>
                    <ul class="grid gap-y-4 underline opacity-60 cursor-pointer">
                        <li><Link
                        activeClass="active" 
                        to="hero" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={500} 
                        onSetActive={handleSetActive}>Inicio</Link></li>
                        <li><Link activeClass="active" 
                            to="servicios" 
                            spy={true} 
                            smooth={true} 
                            offset={-80} 
                            duration={500} 
                            onSetActive={handleSetActive}>Servicios</Link></li>
                        <li><Link activeClass="active" 
                            to="about" 
                            spy={true} 
                            smooth={true} 
                            offset={-75} 
                            duration={500} 
                            onSetActive={handleSetActive}>Acerca de nosotros</Link></li>
                    </ul>
                </div>
                <div class="text-white opacity-60">
                    <ul class="grid gap-y-4 underline cursor-pointer">
                        <li><Link activeClass="active" 
                            to="contacto" 
                            spy={true} 
                            smooth={true} 
                            offset={-80} 
                            duration={500} 
                            onSetActive={handleSetActive}>Contacto</Link></li>
                        <li><Link activeClass="active" 
                            to="location" 
                            spy={true} 
                            smooth={true} 
                            offset={-80} 
                            duration={500} 
                            onSetActive={handleSetActive}>Ubicación</Link></li>
                    </ul>
                </div>
            </div>
            <hr class="opacity-50 w-[90%] md:w-4/5"/>
            <span class="sm:text-center text-white opacity-60 pt-8 mb-8 w-[90%] md:w-3/5">2023, Loyalty Accounting & Financial Services Inc., Todos los derechos reservados.</span>
        </section>
    );
};
