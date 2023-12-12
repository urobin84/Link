import Image from 'next/image';
import React from 'react'


const Hero = () => {
  return (
    <div className="max-container">
      <div className="flex p-2 justify-center ">
        <div className="box-content">
          <Image className=" h-[270px]" src="/logo_musholladarussalam_vertical_white.png" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Hero