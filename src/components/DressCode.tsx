import React from 'react';
import suitGif from '/gifs/golden/suitGif.gif';
import dressGif from '/gifs/golden/dressGif.gif';

const DressCode = () => {
  return (
    <div className='w-[85%] flex flex-col justify-center items-center rounded-2xl gap-6 py-12 font-sans shadow-lg mt-12 text-center text-primary bg-white relative'>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-4 w-12 h-12 opacity-50 pointer-events-none border-t-[3px] border-l-[3px] border-golden rounded-tl-2xl"></div>
        <div className="absolute bottom-4 right-4 w-12 h-12 opacity-50 pointer-events-none border-b-[3px] border-r-[3px] border-golden rounded-br-2xl"></div>
      </div>
      <h2 className="font-semibold text-6xl text-center font-dance ">¿Qué nos ponemos?</h2>
      <div className='flex'>
      <img src={suitGif} alt="suitGif" className='w-[70px] h-[70px]' />
      <img src={dressGif} alt="dressGif" className='w-[70px] h-[70px]' />
      </div>
      <div>
        <p className="text-lg">Dresscode:</p>
        <p className="text-xl font-bold">Elegante</p>
      </div>
    </div>
  );
};

export default DressCode;
