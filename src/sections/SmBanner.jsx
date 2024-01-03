import React from 'react';
import arrowLeft from '../assets/img/icons/arrow-left-wt.png'
import arrowRight from '../assets/img/icons/arrow-right-wt.png'

function SmBanner() {
    return (
     <section>
        <div class="w-full bg-mediumGray text-white text-sm sm-banner flex justify-between items-center pt-8 pb-4 md:pt-8 lg:pt-6 px-4 absolute top-[95px] md:top-[80px] lg:top-[75px] z-30">
            <div>
                <img src={arrowLeft} alt="Arrow left"/>
            </div>
            <p class="text-center">
                Obtén hasta el el <strong>70%</strong> de <strong>descuento.</strong> por temporada navideña
            </p>
            <div>
                <img src={arrowRight} alt="Arrow right"/>
            </div>
        </div>
    </section>
    );
}

export default  SmBanner;