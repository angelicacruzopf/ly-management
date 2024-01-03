const serviceList = [
    {
        id:'0',
        name: 'Planillas',
        position: 'Position',
        imageId: 'DD01'
    },
    {
        id:'1',
        name: 'Planillas de IVU',
        position: 'Position',
        imageId: 'DD02'
    },
    {
        id:'2',
        name: 'Ciclo de contabilidad',
        position: 'Position',
        imageId: 'DD03'
    },
    {
        id:'3',
        name: 'Estados financieros',
        position: 'Position',
        imageId: 'DD04'
    },
    {
        id:'4',
        name: 'Trimestrales',
        position: 'Position',
        imageId: 'DD05'
    },
    {
        id:'5',
        name: 'Consultoría',
        position: 'Position',
        imageId: 'DD06' 
    },
    {
        id:'6',
        name: 'SURI',
        position: 'Position',
        imageId: 'DD07' 
    },
]

// -------------------GET IMAGE -----------------------

function importAllImagesDepartment(context) {
    let images = {};
    context.keys().forEach((key) => {
      const imageId = key.replace(/^\.\/(.*)s\.png$/, '$1');
      images[imageId] = context(key).default;
    });
    return images;
  }
  
  const imageContext = require.context('!!file-loader!../assets/img/departamentos', false, /\.(png)$/);
  const imageMap = importAllImagesDepartment(imageContext);

  function getImageUrlDepmnt(department) {
    try {
      const image = imageMap[department.imageId];
      return image || ''; 
    } catch (error) {
      console.error("Error loading image:", error);
      return '';
    }
  }


//   ---------------CARD ---------------------

function DeptosCard() {
    const dataService = serviceList.map(value =>
        <div class="flex flex-col justify-center items-center text-center mb-4">
            <div class="bg-gray-300 rounded-full w-32 h-32 mb-4">
                <img src={getImageUrlDepmnt(value)} alt={value.name} class="object-cover h-full w-full"/>
                <div>
                    <h4 class="font-semibold mt-4">{value.name}</h4>
                </div>
            </div>
        </div>
    );
    return dataService;
};



export default function Servicios() {
    return (
        <section id="servicios" class="flex justify-center bg-darkGray text-white">
            <div class="flex flex-col items-center w-[90%] md:w-9/12 justify-center py-20 max-w-[800px]">
                <h2 class="font-bold text-center mb-10 text-2xl md:text-5xl">Nuestros servicios</h2>
                <div class="flex flex-wrap justify-evenly sm:justify-center md:justify-evenly gap-20">
                    <DeptosCard />
                </div>
            </div>
        </section>
    )
};
