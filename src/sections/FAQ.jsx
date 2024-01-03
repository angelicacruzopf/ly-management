import React, { useState } from 'react';

export const faqList = [
  {
      id: '0',
      question: '¿En donde se encuentran ubicados?',
      answer: '“Contamos con 2 sucursales en localizadas en Puerto Rico, USA. Sucursal Corozal: Carretera 818 KM 0.8 Bo. Cibuco.Sucursal Morovis:  Calle Principal 44, Morovis”',
  },
  {
      id: '1',
      question: '¿Cómo puedo contactarlos?',
      answer: '“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.”',
  },
  {
      id: '2',
      question: '¿Los productos tienen garantía?',
      answer: '“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.”',
  },
  {
      id: '3',
      question: '¿Puedo apartar un producto?',
      answer: '“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.”',
  },
  {
      id: '4',
      question: '¿Qué tipo de productos manejan?',
      answer: '“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.”',
  },
]


const FrequentQuestion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div class=" accordion flex justify-between py-6" onClick={() => setIsActive(!isActive)}>
        <div class="font-semibold">{title}</div>
        <div class="text-white text-2xl">{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div class="pb-4 text-white divide-y">{content}</div>}
    </div>
  );
};



const FAQ = () => {
  return (
    <section class="flex justify-center bg-mediumGray">
        <div class="flex flex-col items-center w-[90%] md:w-9/12 py-16 text-white max-w-[1000px]">
            <h2 class="font-bold mb-10 text-2xl md:text-4xl">FAQs</h2>
            <div class="divide-y w-full">
                {faqList.map(({ question, answer }) => (
                <FrequentQuestion title={question} content={answer} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default FAQ;