import React from 'react';
import regaloGif from '/gifs/base/regaloGif.gif'
import Popup from 'reactjs-popup';

const Regalo: React.FC = () => {
  return (
    <div className='mt-12 w-[85%] shadow-lg rounded-2xl flex flex-col justify-center items-center gap-8 py-12 px-6 text-center font-sans bg-primary text-white'>
      <img src={regaloGif} alt="anillogif" className='w-[120px]' />
      <p>Lo que más queremos es compartir con ustedes nuestro <strong>gran día</strong> ✨, pero si deseas regalarnos algo puedes hacer clic en el siguiente botón.<br/><strong>¡Muchas gracias!</strong></p>
      <Popup trigger={<button className='mt-4 font-semibold rounded-full p-4 bg-secondary shadow-btn'>VER INFORMACIÓN</button>} modal>
        {/* @ts-ignore: reactjs-popup children-as-function runtime supported, types mismatch */}
        {(close: () => void) => (
          <div className="relative bg-primary w-fit h-fit p-4 m-2 text-left rounded-2xl text-xl font-pop shadow-modal z-50 text-white">
            <button
              aria-label="Cerrar"
              onClick={close}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-lg leading-none"
            >
              ×
            </button>

            <p className="my-6 mx-6 text-6xl font-normal text-center font-dance">Neri y Fran</p>
            <img src={regaloGif} alt="anillogif" className='w-[120px] mx-auto mb-10' />
            
            <p className="my-2"><small>Titular: </small>Francisco Jose Prezzio</p>
            <p className="my-2"><small>Banco: </small>Brubank</p>
            <p className="my-2"><small>CBU: </small>1430001713030521790012</p>
            <p className="my-2"><small>Alias: </small>franciscoprezzio</p>
            <p className="my-2"><small>Nº cuenta: </small>1303052179001</p>
            <p className="my-2"><small>CUIT: </small>20-34399851-2</p>

            <p className="mt-8 mb-4 text-sm text-center">También va haber un cofre en el salón para dejar un sobre con dinero o .</p>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default Regalo;
