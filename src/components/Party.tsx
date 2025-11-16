import React from 'react';
import ceremonyText from '/ceremonia.png';
import party2 from '/partyGif.gif';

const Ceremony: React.FC = () => {
  return (
    <div className='w-[85%] shadow-lg rounded-2xl flex flex-col justify-center items-center gap-8 py-12 text-center font-sans text-primary'>
      <h2 className="font-semibold text-7xl text-center font-dance ">Fiesta</h2> persona bailando (emoji)
      <img src={party2} alt="party2" className='w-[100px]' />
      <p className='text-lg'><strong>Petra</strong><br/>Av. Gaspar Campos 2448<br/><br/>Desde: <strong>Luego de la ceremonia</strong> <br/>Hasta: <strong>♾️</strong> </p>
      <a href='https://maps.app.goo.gl/uyFxvRWdWK2pCMQ78'
        target='_blank'
        className='shadow-lg rounded-full p-4 bg-primary text-white'>CÓMO LLEGAR</a>
    </div>
  );
};

export default Ceremony;