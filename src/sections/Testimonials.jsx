import React, { useState } from "react";
import fbLogo from '../assets/img/icons/Facebook-color-mini@2x.png'

const testimonialList = [
  {
      id:'0',
      name: 'Yomayra Rodriguez',
      review: '"Excelente servicio, es una persona responsable y rápida y la recomiendo al 100%"',
      imageId: 'RR01'
  },
  {
      id:'1',
      name: 'Luis Hernandez',
      review: '“Excelente servicio, rápido y confiable”',
      imageId: 'RR02' 
  },
  {
      id:'2',
      name: 'Licda Yleana Silva Rodriguez',
      review: '“Excelente servicios y confianzas,recomendado mil por mil 👏👏👏👍👍💪💪”',
      imageId: 'RR03' 
  },
]


// -------------------GET IMAGE-------------------------


function importAllImagesReview(context) {
  let images = {};
  context.keys().forEach((key) => {
    const imageId = key.replace(/^\.\/(.*)s\.png$/, '$1');
    images[imageId] = context(key).default;
  });
  return images;
}

const imageContext = require.context('!!file-loader!../assets/img/', false, /\.(png)$/);
const imageMap = importAllImagesReview(imageContext);

function getImageUrlReview(review) {
  try {
    const image = imageMap[review.imageId];
    return image || ''; 
  } catch (error) {
    console.error("Error loading image:", error);
    return '';
  }
}

// -----------------------CARD-----------------------------------

function TestimonialCard({ currentIndex }) {
  return (
    <div className="flex flex-row gap-4 sm:flex-wrap items-centers w-full justify-center lg:justify-between">
      {testimonialList.map((value, index) => (
        <div
          key={value.id}
          className={`w-full md:w-[30%] min-w-[280px] flex flex-col items-center gap-4 p-6 bg-white rounded-3xl shadow-lg h-full ${
            currentIndex === index ? "active md:mySlidesTest" : "hidden md:flex"
          }`}
        >
            <div className="h-32 w-32 shadow-xl hidden md:inline-block rounded-full">
                <img
                src={getImageUrlReview(value, index)}
                alt={value.name}
                className="object-cover h-full w-full"
                />
            </div>
         
          <div className="flex flex-col items-center text-center gap-4 text-darkGray">
            <p className="">{value.review}</p>
            <h4 className="font-semibold">{value.name}</h4>
            <div className="justify-self-end">
              <img src={fbLogo} alt="Facebook logo" />
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}


export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="flex items-center py-16 flex-col bg-[#FAC450]">
  <div className="w-[90%] md:w-full flex flex-col items-center max-w-[1000px] ">
    <h2 className="font-bold text-center mb-10 md:mb-0 text-2xl md:text-5xl">Lo que piensan nuestros clientes</h2>
    <div className="md:hidden">
        <div className="testimonial-container ">
        <TestimonialCard currentIndex={currentIndex} />
        </div>
        <div className="flex justify-center my-8 md:my-0">
        {testimonialList.map((_, index) => (
            <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            ></span>
        ))}
        </div>
    </div>

    {/* Para escritorio */}
    <div className="hidden md:flex flex-row gap-4 sm:flex-row sm:flex-wrap items-center md:items-start py-16 w-full justify-center">
        <TestimonialCard />
    </div>
    
  </div>
</section>
  );
}
