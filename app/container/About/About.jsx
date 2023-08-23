'use client';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';// counter

// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop } from 'react-icons/si';


import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

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

            {/* counters */}
            <div className='hidden md:flex md:max-w-xl lg:max-w-none mx-auto lg:mx-0 mb-8 '>
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

                {/* experience */}
                <div className='relative flex-1 after:w-[1px] after:h-full 
                  after:bg-white/10 after:absolute after:top-10 after:right-0'>
                    <div className='text-2xl lg:text-4xl font-extrabold text-[#313bac]'>
                      <CountUp start={0} end={30} duration={5} /> +
                    </div>
                    <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
                      Statisfied Clients
                    </div>
                  </div>

                {/* experience */}
                <div className='relative flex-1 after:w-[1px] after:h-full 
                  after:bg-white/10 after:absolute after:top-10 after:right-0'>
                    <div className='text-2xl lg:text-4xl font-extrabold text-[#313bac]'>
                      <CountUp start={0} end={10} duration={5} /> +
                    </div>
                    <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
                      Certifications
                    </div>
                  </div>                             

                {/* experience */}
                <div className='relative flex-1 after:w-[1px] after:h-full 
                  after:bg-white/10 after:absolute after:top-10 after:right-0'>
                    <div className='text-2xl lg:text-4xl font-extrabold text-[#313bac]'>
                      <CountUp start={0} end={10} duration={5} /> +
                    </div>
                    <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
                      Certifications
                    </div>
                  </div>  
              </div>
            </div>
          </div>

          {/* info */}
          <div className='flex flex-col w-full lg:max-w-[48%] h-[480px]'>
            <div className='flex gap-x-4 lg:gap-x-8 mx-auto lg:mx-0 mb-4'>
              {aboutData.map((item, itemIndex)=> {
                return (
                  <div key={itemIndex}
                    className={`${
                      index === itemIndex &&
                      'text-[#313BAC] after:w-[100%] after:bg-[#313BAC] after:transition-all after:duration-300' 
                       } cursor-pointer capitalize lg:text-lg relative after:w-8
                        after:h-[2px]  after:absolute after:bottom-1 after:left-0` }
                        onClick={()=> setIndex(itemIndex)}>
                          {item.title}
                    </div>
                    );
                  })}              
            </div>

            <div className='py-2 lg:py-6 flex flex-col gap-y-2 lg:gap-y-4 items-center lg:items-start '>
              {aboutData[index].info.map((item, itemIndex)=>{
                return (
                  <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w max gap-x-2 
                  items-center text-gray-600'>
                    {/* title */}
                    <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                    <div className='hidden md:flex'>-</div>
                    <div>{item.stage}</div>

                    {/* icons */}
                    <div className='flex gap-x-4'>
                      {item.icons?.map((icon, itemIndex)=> {
                        return (
                          <div className='text-2xl text-gray-600'>{icon}</div>
                        );
                      })}

                    </div>

                  </div>
                  );
              })}

            </div>            
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

