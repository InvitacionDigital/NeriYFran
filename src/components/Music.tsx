import React from 'react';

import song from '/song.mp3';

const Music = () => {
  return (
    <audio src={song} loop controls className='w-full my-[-25px]'>
    </audio>
  );
};

export default Music;
