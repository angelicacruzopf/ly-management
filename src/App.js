import SmBanner from "./sections/SmBanner";
import NavMobile from "./sections/NavMobile";
import Navbar from "./sections/Navbar";
import Home from "./sections/Home";
import AboutUs from "./sections/About";
import Servicios from "./sections/Servicios";
import Testimonials from "./sections/Testimonials";
import ContactUs from "./sections/ContactUs";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import Location from "./sections/Location";



function App() {
  return (
    <div>
      <Navbar />
      <NavMobile />
      <SmBanner />
      <Home />
      <AboutUs />
      <Servicios />
      <Testimonials />
      <ContactUs />
      <Location/>
      <section id='horarios' className="bg-[#F6F6F6;]">
        <div class="flex flex-col items-center ms-4 text-[#797C94] gap-y-4 md:hidden text-lg font-semibold max-w-[1000px] py-16">
            <p class="font-bold text-darkGray text-2xl">Horarios:</p>
            <p>Lunes a Sábado: 9:00am - 5:00pm</p>
            <p>Domingo: Cerrado</p>
        </div>
      </section>
      <FAQ />
      <Footer/>
    </div>
  );
}

export default App;
