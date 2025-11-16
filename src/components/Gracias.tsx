import React from 'react';
import gracias from '/gracias.png'

const Gracias: React.FC = () => {
  return (
    <div className='h-fit w-full bg-primary p-12 mt-12'>
      <img src={gracias} alt="gracias" className='w-[60%] m-auto' />
    </div>
  );
};

export default Gracias;
