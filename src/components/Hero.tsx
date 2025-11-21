import React from 'react';
import GoDown from './GoDown';
import noscasamos from '/utils/noscasamos.png';

const Hero: React.FC = () => {
  return (
    <div className='bg-[url("/fondos/bg.jpg")] opacity-95 w-full min-w-[300px] max-w-[1000px] aspect-[9/16] bg-contain bg-center bg-no-repeat flex flex-col justify-center gap-10 py-0 items-center relative '>
      <img src={noscasamos} alt="noscasamos" className='w-[250px] mx-auto '/>
      <div className='text-8xl text-center w-fit'>
        <h1 className='text-golden leading-[0.6]'>Neri</h1>  
        <h1 className='-translate-y-5 text-golden'>y</h1>
        <h1 className='text-golden leading-[0.6]'>Fran</h1>
      </div>
      <div className='flex items-center gap-2 text-2xl text-gray-700 mt-4'>
        <span className='border-b border-gray-700 w-16 h-0'></span>
        <p className='font-[poppins] text-gray-600'>21.02.2026</p>
        <span className='border-b border-gray-700 w-16 h-0'></span>
      </div>
      <GoDown />
    </div>
  );
};

export default Hero;