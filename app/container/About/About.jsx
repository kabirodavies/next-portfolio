'use client';
import React, { useEffect, useState } from 'react';


import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';


const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <>
      <div className='h-full bg-primary/30  text-white py-32 text-center lg:text-left'>
        <div className='hidden lg:flex absolute bottom-0 -left-[370px]'></div>

        <div className='container mx-auto h-full flex flex-col items-center lg:flex-row gap-x-6 text-gray-900'>
          {/* text */}
          <div className='flex-1 flex flex-col justify-center'>
            <h2 className='h2'>
                Crafting <span className='text-[#313bac]'>digital</span> Naratives.
            </h2>

            <p className='max-w-[500px] mx-auto lg:mx-0 mb-6 lg:mb-12 px-2 lg:px-0'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
   'about',
   'app__whitebg'
);

