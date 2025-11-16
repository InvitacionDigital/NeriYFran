import React from 'react';
import GoDown from './GoDown';

const Hero: React.FC = () => {
  return (
    <div className='bg-[url("/bg.jpeg")] opacity-95 w-full min-w-[300px] max-w-[1000px] aspect-[9/16] bg-contain bg-center bg-no-repeat flex flex-col justify-center py-0 items-center relative '>
      <div className='flex items-center gap-2'>
        <span className='border-b border-secondary w-14 h-0'></span>
        <p className='font-[poppins] text-primary'>30.11.2025</p>
        <span className='border-b border-secondary w-14 h-0'></span>
      </div>
      <div className='text-7xl text-center w-[205px] relative my-12'>
        <h2 className='text-secondary opacity-30 text-[10rem] absolute top-1/2 -translate-y-1/2'>casamiento</h2>
        <h1 className='z-30 relative font-semibold text-primary'>NeriYFran</h1>
        <h1 className='text-xl relative '>casamiento</h1>
      </div>
      <span className='border-b border-secondary w-44 h-0'></span>

      <GoDown />
    </div>
  );
};

export default Hero;
