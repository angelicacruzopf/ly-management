import Iframe from 'react-iframe'

export default function Location() {
    return(
        <section id='location' className="flex justify-center">
        <div className="w-full md:w-9/12 flex flex-col-reverse md:flex-row justify-center py-16 gap-16">
          <div className='w-[90%] text-lg px-[5%] md:hidden'>
          <p className="font-bold">San Juan, Puerto Rico,00926</p>
            <p>
            Teléfono: +1 787-360-6998
            </p>
            
          </div>
          <div className="md:w-1/2">
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121182.60492339502!2d-66.13535950581992!3d18.349273243825213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0342a426e0b519%3A0x1922abaaa326a9d0!2sSan%20Juan%2C%2000926%2C%20Puerto%20Rico!5e0!3m2!1sen!2sus!4v1704294975393!5m2!1sen!2sus" width="100%" height="470" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
          </div>
          <div className="md:w-1/2 text-darkGray flex flex-col justify-center gap-12">
            <h2 className="font-bold text-2xl text-center md:text-left md:text-5xl">¿Tienes dudas? ¡Visitanos!</h2>
            <p className="text-2xl hidden md:inline-block">San Juan, Puerto Rico,00926</p>
          </div>
        </div>
      </section>
    )
};
