import React from 'react';
import fotosGif from '/fotosGif.gif';
import Slider from './Slider';

const Inolvidable: React.FC = () => {
  return (
    <div className='w-[85%] flex flex-col justify-center items-center rounded-2xl gap-0 pb-8 pt-12 font-sans shadow-lg mt-12 text-center'>
    
      <h2 className="font-semibold text-6xl text-center mb-2 font-dance text-primary">¡Que sea inolvidable!</h2>
      
      <Slider />
      <img src={fotosGif} alt="fotosGif" className='w-[120px]' />
    </div>
  );
};

export default Inolvidable;
