import React from 'react';
import partyGif from '/gifs/golden/partyGif.gif';
import infinito from '/utils/infinitoGolden.jpg';

const Party: React.FC = () => {
  return (
    <div className='w-[85%] mt-10 shadow-lg rounded-2xl flex flex-col justify-center items-center gap-8 py-12 text-center font-sans text-primary relative'>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-4 w-12 h-12 opacity-50 pointer-events-none border-t-[3px] border-l-[3px] border-golden rounded-tl-2xl"></div>
        <div className="absolute bottom-4 right-4 w-12 h-12 opacity-50 pointer-events-none border-b-[3px] border-r-[3px] border-golden rounded-br-2xl"></div>
      </div>
      <h2 className="font-semibold text-7xl text-center font-dance ">Fiesta</h2>
      <img src={partyGif} alt="partyGif" className='w-[100px]' />
      <p className='text-lg'>
          <strong>Petra</strong><br/>
          Av. Gaspar Campos 2448
      </p>
      <p className='text-lg text-center'>
        <strong>Desde: </strong>La ceremonia<br/>
        <strong>Hasta: </strong><img src={infinito} alt="infinito" className='inline w-6 mx-2'/>
      </p>
      <a href='https://maps.app.goo.gl/uyFxvRWdWK2pCMQ78'
        target='_blank'
        className='shadow-lg rounded-full p-4 bg-primary text-white font-semibold'>CÓMO LLEGAR</a>
    </div>
  );
};

export default Party;