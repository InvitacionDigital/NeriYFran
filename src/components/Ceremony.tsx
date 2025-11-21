import React from 'react';
import churchGIF from '/gifs/golden/churchGIF.gif';

const Ceremony: React.FC = () => {
  return (
    <div className='w-[85%] shadow-lg rounded-2xl flex flex-col justify-center items-center gap-8 py-12 text-center font-sans text-primary'>
      <h2 className="font-semibold text-7xl text-center font-dance ">Ceremonia</h2>
      <img src={churchGIF} alt="churchGIF" className='w-[100px]' />
      <p className='text-lg'><strong>Parroquia santa Ana</strong><br/>C. Tucumán 853<br/><br/><strong>20:00 hs</strong> </p>
      <a href='https://maps.app.goo.gl/5WpuA5eZaxic6aki6'
        target='_blank'
        className='shadow-lg rounded-full p-4 bg-primary text-white font-semibold'>CÓMO LLEGAR</a>
    </div>
  );
};

export default Ceremony;
