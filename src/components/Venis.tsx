import React from 'react';
import calendarGIF from '/gifs/golden/calendarGIF.gif'

const Venis: React.FC = () => {
  return (
    <div className='w-[85%] flex flex-col justify-center items-center rounded-2xl gap-8 py-12  shadow-lg mt-12 text-center text-primary relative'>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-4 w-12 h-12 opacity-50 pointer-events-none border-t-[3px] border-l-[3px] border-golden rounded-tl-2xl"></div>
        <div className="absolute bottom-4 right-4 w-12 h-12 opacity-50 pointer-events-none border-b-[3px] border-r-[3px] border-golden rounded-br-2xl"></div>
      </div>
      <h2 className="font-semibold text-6xl text-center mb-2 font-dance text-primary">¿Venís?</h2>
      <p className='text-lg font-sans px-4'>Cuento con tu presencia.<br/><strong>¡Confirmá tu asistencia!</strong></p>
      <img src={calendarGIF} alt="calendarGif" className='w-[120px] translate-x-3' />
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSf1TCt_1psftC2QvfkUHzS_hJi6W9_VJS47UENbPsjQu2K9GQ/viewform?usp=dialog'
        target='_blank'
        className='mt-6 font-semibold shadow-lg rounded-full p-4 font-sans bg-primary text-white'>CONFIRMAR ASISTENCIA</a>
    </div>
  );
};

export default Venis;
