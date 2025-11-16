import React from 'react';
import veniss from '/venis.png'
import calendar from '/calendar.gif'

const Venis: React.FC = () => {
  return (
    <div className='w-[85%] flex flex-col justify-center items-center rounded-2xl gap-8 py-12  shadow-lg mt-12 text-center text-primary'>
      <h2 className="font-semibold text-6xl text-center mb-2 font-dance text-primary">¿Venís?</h2>
      <p className='text-lg font-sans px-4'>Cuento con tu presencia.<br/>¡Confirmá tu asistencia!</p>
      <img src={calendar} alt="calendarGif" className='w-[120px] translate-x-3' />
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSeHTZE20qn3JvGOFgdAQZVKG6owRy8PbsPF4NJX__0-37HEtA/viewform?usp=dialog'
        target='_blank'
        className='mt-6 shadow-lg rounded-full p-4 font-sans bg-primary text-white'>CONFIRMAR ASISTENCIA</a>
    </div>
  );
};

export default Venis;
