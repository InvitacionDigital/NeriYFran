import React, { useRef, useState } from 'react';
import song from '/song.mp3';
import Popup from 'reactjs-popup';

const Music: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [open, setOpen] = useState<boolean>(true);

  const handleStart = async () => {
    try {
      await audioRef.current?.play();
    } catch (e) {
      // play can fail in some environments; swallow the error
    }
    setOpen(false);
  };

  return (
    <>
      <Popup open={open} modal closeOnDocumentClick={false}>
        <div className="bg-primary w-fit h-fit p-4 m-2 text-left rounded-2xl text-xl font-pop shadow-modal z-50 text-white">
          <h1 className="my-4 mx-6 text-6xl font-bold text-center font-dance">¿Ingresar con música?</h1>
          <p className="mb-10 mt-6 mx-6 text-xs font-normal text-center font-pop">La música de fondo es parte de la experiencia</p>
          <div className="flex justify-evenly mb-4">
            <button className='font-semibold rounded-full px-4 text-sm py-2 bg-[#707170] ' onClick={() => setOpen(false)}>Sin música</button>
            <button className='font-semibold rounded-full px-4 text-sm py-2 bg-[#9cad78] ' onClick={handleStart}>Con música</button>
          </div>
        </div>
      </Popup>

      <audio ref={audioRef} src={song} loop controls className='w-full my-[-25px]'>
      </audio>
    </>
  );
};

export default Music;
