import React from 'react';
import { Carousel } from 'flowbite-react';
// import foto3 from '/fotos/foto3.jpeg';
// import foto4 from '/fotos/foto4.jpeg';
// import foto5 from '/fotos/foto5.jpeg';
// import foto6 from '/fotos/foto6.jpeg';
// import foto7 from '/fotos/foto7.jpeg';
// import foto8 from '/fotos/foto8.jpeg';
// import foto9 from '/fotos/foto9.jpeg';
// import foto10 from '/fotos/foto10.jpeg';

const Slider = () => {
  return (
    <div className="h-[400px] w-full my-4">
      <Carousel leftControl=" " rightControl=" " slideInterval={1500}>
        {/* <div className='w-[85%] rounded-lg flex justify-center items-center'>
          <img src={foto3} alt="..." className=' h-full max-h-[400px] rounded-lg' />
        </div>
        <div className='w-[85%] rounded-lg flex justify-center items-center'>
          <img src={foto4} alt="..." className=' h-full max-h-[400px] rounded-lg' />
        </div>
        <div className='w-[85%] rounded-lg flex justify-center items-center'>
          <img src={foto5} alt="..." className=' h-full max-h-[400px] rounded-lg' />
        </div>
        <div className='w-[85%] rounded-lg flex justify-center items-center'>
          <img src={foto6} alt="..." className=' h-full max-h-[400px] rounded-lg' />
        </div>
        <div className='w-[85%] rounded-lg flex justify-center items-center'>
          <img src={foto7} alt="..." className=' h-full max-h-[400px] rounded-lg' />
        </div>
        <div className='w-[85%] rounded-lg flex justify-center items-center'>
          <img src={foto8} alt="..." className=' h-full max-h-[400px] rounded-lg' />
        </div>
        <div className='w-[85%] rounded-lg flex justify-center items-center'>
          <img src={foto9} alt="..." className=' h-full max-h-[400px] rounded-lg' />
        </div>
        <div className='w-[85%] rounded-lg flex justify-center items-center'>
          <img src={foto10} alt="..." className=' h-full max-h-[400px] rounded-lg' />
        </div> */}
      </Carousel>
    </div>
  );
}

export default Slider;
