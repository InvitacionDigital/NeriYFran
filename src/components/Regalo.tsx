import React from 'react';
import regaloGif from '/regaloGif.gif'
import Popup from 'reactjs-popup';

const Regalo: React.FC = () => {
  return (
    <div className='mt-12 w-[85%] shadow-lg rounded-2xl flex flex-col justify-center items-center gap-8 py-12 px-6 text-center font-sans bg-primary text-white'>
      <img src={regaloGif} alt="anillogif" className='w-[120px]' />
      <p>El mejor regalo es que vengas,<br/>pero si deseás regalarme algo, podés colaborar con mis sueños y anhelos✨<br/><strong>¡Muchas gracias!</strong></p>
      <Popup trigger={<button className='mt-6 font-semibold rounded-full p-4 bg-secondary shadow-btn'>VER INFORMACIÓN</button>} modal>
        <div className="bg-primary w-fit h-fit p-4 m-2 text-left rounded-2xl text-xl font-pop shadow-modal z-50 text-white">
        <p className="my-6 text-6xl font-normal text-center font-dance">Casamiento NeriYFran</p>
          <img src={regaloGif} alt="anillogif" className='w-[120px] mx-auto mb-10' />
          
          <p className="my-4">CBU: 0000003100057697720322</p>
          <p className="my-4 mb-8">Alias: mel.marquezzz</p> 
        </div>
      </Popup>
    </div>
  );
};

export default Regalo;
