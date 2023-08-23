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
import Avatar from '../../components/Avatar';
// import Circles from '../../components/Circles';

//framer motion
import { fadeIn } from '../../../variants';




// data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];



const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <>
      <div className='h-full bg-primary/30  text-white py-32 text-center lg:text-left'>
        {/* <Circles /> */}
        {/* avatar img*/}
        <motion.div 
        variants={fadeIn('right', 0.2)} 
        initial="hidden" 
        animate="show" 
        exit="hidden"
        className='hidden lg:flex absolute bottom-0 -left-[370px]'
        >
          <Avatar />
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

            {/* counters */}
            <motion.div
              variants={fadeIn('right', 0.6)} 
              initial="hidden" 
              animate="show" 
              exit="hidden"            
              className='hidden md:flex md:max-w-xl lg:max-w-none mx-auto lg:mx-0 mb-8 '>

              <div className='flex flex-1 lg:gap-x-6'>

                 {/* experience */}
                <div className='relative flex-1 after:w-[1px] after:h-full
                after:bg-white/10 after:absolute after:top-10 after:right-0'>
                  <div className='text-2xl lg:text-4xl font-extrabold text-[#313bac]'>
                    <CountUp start={0} end={6} duration={5} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
                    Years of experience
                  </div>
                </div>

                {/* certifications */}
                <div 
                  className='relative flex-1 after:w-[1px] after:h-full 
                  after:bg-white/10 after:absolute after:top-10 after:right-0'>
                    <div className='text-2xl lg:text-4xl font-extrabold text-[#313bac]'>
                      <CountUp start={0} end={10} duration={5} /> +
                    </div>
                    <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
                      Certifications
                    </div>
                  </div>                             

                {/* certifications */}
                <div 
                  className='relative flex-1 after:w-[1px] after:h-full 
                  after:bg-white/10 after:absolute after:top-10 after:right-0'>
                    <div className='text-2xl lg:text-4xl font-extrabold text-[#313bac]'>
                      <CountUp start={0} end={10} duration={5} /> +
                    </div>
                    <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
                      Certifications
                    </div>
                  </div> 

                {/* certifications */}
                <div 
                  className='relative flex-1 after:w-[1px] after:h-full 
                  after:bg-white/10 after:absolute after:top-10 after:right-0'>
                    <div className='text-2xl lg:text-4xl font-extrabold text-[#313bac]'>
                      <CountUp start={0} end={10} duration={5} /> +
                    </div>
                    <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
                      Certifications
                    </div>
                  </div> 

              </div>

            </motion.div>
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

