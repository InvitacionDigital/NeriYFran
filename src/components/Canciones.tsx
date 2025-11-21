import React from 'react';
import microGif from '/gifs/golden/microGif.gif';

const Canciones: React.FC = () => {
  return (
    <div className='w-[85%] shadow-lg rounded-2xl flex flex-col justify-center items-center gap-8 py-12 text-center font-sans mt-12 text-primary relative'>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-4 w-12 h-12 opacity-50 pointer-events-none border-t-[3px] border-l-[3px] border-golden rounded-tl-2xl"></div>
        <div className="absolute bottom-4 right-4 w-12 h-12 opacity-50 pointer-events-none border-b-[3px] border-r-[3px] border-golden rounded-br-2xl"></div>
      </div>
      <h4 className="font-semibold text-6xl text-center mb-2 font-dance text-primary">Play List</h4>
      <img src={microGif} alt="microGif" className='w-[80px]' />
      <p className='text-lg px-4'>¡Ayudame sugiriendo las <strong>canciones</strong> que pensás que no pueden faltar en la <strong>fiesta</strong>!</p>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSeBgM8IILxsP1vzkbKfUjlgfC1nsuURKQ3yWs2ZcLZkbcw1UA/viewform?usp=dialog'
        target='_blank'
        className='mt-6 shadow-lg rounded-full p-4 bg-primary text-white font-semibold'>AÑADÍ TU TEMA</a>
    </div>
  );
};

export default Canciones;