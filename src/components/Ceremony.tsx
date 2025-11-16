import React from 'react';
import ceremonyText from '/ceremonia.png';
import party2 from '/partyGif.gif';

const Ceremony: React.FC = () => {
  return (
    <div className='w-[85%] shadow-lg rounded-2xl flex flex-col justify-center items-center gap-8 py-12 text-center font-sans text-primary'>
      <h2 className="font-semibold text-7xl text-center font-dance ">Fiesta</h2>
      <img src={party2} alt="party2" className='w-[100px]' />
      <p className='text-lg'><strong>Jano's Quinta Del Viso</strong><br/>Av. Pres. Arturo Umberto Illia<br/>12802-12900<br/><br/>Desde: <strong>14:30 hs</strong> <br/>Hasta: <strong>22:30 hs</strong> </p>
      <a href='https://maps.app.goo.gl/aWzVFJV7jUNGtHS6A?g_st=aw'
        target='_blank'
        className='shadow-lg rounded-full p-4 bg-primary text-white'>CÓMO LLEGAR</a>
    </div>
  );
};

export default Ceremony;
