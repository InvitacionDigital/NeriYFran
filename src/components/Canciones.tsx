import React from 'react';
import sigaText from '/siga.png';
import microGif from '/microGif.gif';

const Canciones: React.FC = () => {
  return (
    <div className='w-[85%] shadow-lg rounded-2xl flex flex-col justify-center items-center gap-8 py-12 text-center font-sans mt-12 text-primary'>
      <h4 className="font-semibold text-6xl text-center mb-2 font-dance text-primary">Play List</h4>
      <img src={microGif} alt="microGif" className='w-[80px]' />
      <p className='text-lg '>¡Ayudame sugiriendo las canciones que pensás que no pueden faltar en la fiesta!</p>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSf4w6PVL-CGfoN9tUTHPu1J4rEgi9ntYfKdIoMMoR2xbkOdXA/viewform?usp=dialog'
        target='_blank'
        className='mt-6 shadow-lg rounded-full p-4 bg-primary text-white'>AÑADÍ TU TEMA</a>
    </div>
  );
};

export default Canciones;