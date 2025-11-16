import React from 'react';
import gracias from '/gracias.png'

const Gracias: React.FC = () => {
  return (
    <div className='h-fit w-full bg-primary p-8 pt-12 mt-12'>
      <img src={gracias} alt="gracias" className='w-[60%] m-auto' />
      <p className='text-white text-center text-2xl font-bold mt-10'>Será una gran noche y me encantaría que la disfrutes conmigo, espero verte ahí.</p>
      
    </div>
  );
};

export default Gracias;
