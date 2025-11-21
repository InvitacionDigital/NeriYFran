import React from 'react';
import down from '/utils/down.png';

const GoDown = () => {
  return (
    <div className='absolute bottom-14'>
      <img src={down} alt="down" className='animate-bounce w-[35px] h-[35px]'/>
    </div>
  );
};

export default GoDown;
