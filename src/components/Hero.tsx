import Image from 'next/image';
import React from 'react'


const Hero = () => {
  const env = process.env.NODE_ENV === 'production';
  const link = env ? '/Link' : '';

  return (
    <div className="max-container">
      <div className="flex p-2 justify-center ">
        <div className="box-content">
          <Image className=" h-[270px]" src={link +'/logo_musholladarussalam_vertical_white.png'} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Hero