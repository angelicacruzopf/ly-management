

function Form() {
    return(
        <form class="flex flex-col gap-4 h-full text-neitralGray">
            <div class="flex flex-col md:flex-row gap-4 w-full">
                <div className="field md:w-1/2">
                    <input type="text" name="firstName" id="firstName" 
                    required
                    maxlength="32"
                    pattern="[A-Za-z\s]{1,32}" class="placeholder:text-mediumGray
                    invalid:border-pink-500 invalid:text-pink-600"/>
                    <label
                    htmlFor="firstName"
                    title="Nombres"
                    data-title="Nombres"
                    ></label>
                    <span class="error">
                    Este campo no puede estar vacío, e.g. John
                    </span>
                </div>
                <div  className="field md:w-1/2">
                    <input type="text" name="lastName" id="lastName"  maxlength="32"
                    pattern="[A-Za-z]{1,32}"
                     required class="placeholder:text-mediumGray invalid:border-pink-500 invalid:text-pink-600"/>
                     <label
                    htmlFor="lastName"
                    title="Apellidos"
                    data-title="Apellidos"
                    ></label>
                    <span class="error">Este campo no puede estar vacío, e.g. Doe</span>
                </div>
                
            </div>
            
            <div class="col-span-2 field">
                <input type="email" name="email" id="email" class=" placeholder:text-mediumGray invalid:border-pink-500 invalid:text-pink-600"
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                required/>
                <label
                htmlFor="email"
                title="Correo electrónico"
                data-title="Correo electrónico"
                className="peer-invalid:text-pink-600"
            ></label>
            <span class="error">
                Este campo no puede estar vacío, e.g. correo@ejemplo.com
            </span>
            </div>


            <div class="col-span-2 field">
                <input type="tel" name="phone" id="phone" class=" placeholder:text-mediumGray focus:invalid:border-pink-500 invalid:text-pink-600"
                pattern="^\+[1-9]{1}[0-9]{3,14}$"
                required/>

            <label
                htmlFor="phone"
                title="Número telefónico"
                data-title="Número telefónico"
            ></label>
            <span class="error">
                Este campo no puede estar vacío, e.g. +27 123 4567
            </span>
                
            </div>
            <div class="col-span-2 row-span-6 h-full field">
                <textarea name="message" id="message" required class="h-full placeholder:pt-2 placeholder:text-mediumGray focus:invalid:border-pink-500 invalid:text-pink-600"></textarea>

                <label
                htmlFor="message"
                title="Escribe un mensaje"
                data-title="Escribe un mensaje"
                ></label>
            </div>           
        </form>
)}

export default function ContactUs() {
  return (
    <section id="contacto" class="flex flex-col bg-secondary">
      <div class="flex flex-col md:flex-row py-20 w-[90%] md:w-9/12 place-self-center gap-8 max-w-[1000px] text-white">
        <div class="flex flex-col w-full gap-8 md:w-1/2">
          <h2 class="font-bold md:mb-10 text-2xl text-center md:text-4xl md:text-left">
            ¿Necesitas algo?
            <br />
            ¡Envíanos un mensaje!
          </h2>
          <div class="font-semibold md:inline-block" hidden>
            <div class="flex items-center mb-7">
              <i class="fa-regular fa-envelope"></i>
              <p class="ms-4 break-all">hardwaresolutionspr@gmail.com</p>
            </div>
            <div class="flex items-center mb-7">
              <i class="fa-solid fa-phone"></i>
              <div class="flex flex-col gap-y-2 ms-4">
                <p>(939) 252 4501</p>
                <p>(939) 252 1602</p>
              </div>
            </div>
            <div class="flex items-center mb-7">
              <i class="fa-regular fa-clock"></i>
              <div class="flex flex-col ms-4  gap-y-4">
                <p>
                  <strong>Horarios:</strong>
                </p>
                <p>Lunes a sábado: 7:00am - 6:00pm</p>
                <p>Domingo: 8:00am - 2:00pm</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-2 md:w-1/2 flex flex-col justify-between">
          <Form />
          <div class="mt-4 transition-opacity hover:opacity-50 hover:ease-in">
            <button
              type="submit"
              class="bg-fourth text-white py-2 px-4 font-bold text-lg flex gap-2 items-center justify-center w-full  transition-all ease-in"
            >
              Enviar mensaje
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
