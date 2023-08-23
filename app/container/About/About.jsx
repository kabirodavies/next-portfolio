'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop } from 'react-icons/si';

// counter
import CountUp from 'react-countup';

import { AppWrap, MotionWrap } from '../../wrapper';

import './About.scss';


// components

//framer motion
import { fadeIn } from '../../../variants';





const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <>
      <div className='h-full bg-primary/30  text-white py-32 text-center lg:text-left'>
        <motion.div 
        variants={fadeIn('right', 0.2)} 
        initial="hidden" 
        animate="show" 
        exit="hidden"
        className='hidden lg:flex absolute bottom-0 -left-[370px]'
        >
        </motion.div>

        <div className='container mx-auto h-full flex flex-col items-center lg:flex-row gap-x-6 text-gray-900'>
          {/* text */}
          <div className='flex-1 flex flex-col justify-center'>
            <motion.h2
              variants={fadeIn('right', 0.2)} 
              initial="hidden" 
              animate="show" 
              exit="hidden"
              className='h2'>
                Crafting <span className='text-[#313bac]'>digital</span> Naratives.
            </motion.h2>

            <motion.p 
              variants={fadeIn('right', 0.4)} 
              initial="hidden" 
              animate="show" 
              exit="hidden"
              className='max-w-[500px] mx-auto lg:mx-0 mb-6 lg:mb-12 px-2 lg:px-0'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </motion.p>
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

