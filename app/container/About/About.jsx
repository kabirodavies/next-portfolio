/* eslint-disable */
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import CountUp from 'react-countup';// counter

// icons
import { HiArrowNarrowRight } from 'react-icons/hi';

import { FaHtml5, FaCss3, FaNextjs, FaReact, FaWordpress, FaFigma, FaAws } from 'react-icons/fa';
import { SiJavascript, SiFramer, SiAdobexd, SiAdobephotoshop, 
  SiPython, SiScikitlearn, SiScipy, SiTensorflow, SiPowerbi } from 'react-icons/si';


import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

// data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Data Science',
        icons: [
          <SiPython />,
          <SiScikitlearn />,
          <SiScipy />,
          <SiTensorflow />,
          <SiPowerbi />,
          <FaAws />,
        ],
      },
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <SiJavascript />,
          <FaReact />,
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
    title: 'certifications',
    info: [
      {
        title: 'AWS Cloud Practitioner - Honoree',
        stage: '2022',
      },
      {
        title: 'Spark and Python for Big Data with Pyspark - Udemy',
        stage: '2022',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Data Scientist - Code for Africa',
        stage: '2023 - Date',
      },
      {
        title: 'Data Scientist- UpWork',
        stage: 'Aug 2022 - Date',
      },
      {
        title: 'Junior Data Scientist - ExploreAI',
        stage: 'Mar 2022 - Novr 2023',
      },
      {
        title: 'Systems Administrator - Loreto Insitite',
        stage: '2016 - 2022',
      },

      
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'Data Science - ExploreAI Academy',
        stage: '2021',
      },
      {
        title: 'Bsc information Technology- Meru University of Science and Technology',
        stage: '2016',
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
            Welcome to my portfolio! I am a passionate and versatile professional with a strong foundation in data science,
            engineering, and IT. With a natural curiosity, a drive to innovate, and a knack for creative problem-solving.
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

                {/* certifications */}
                <div className='relative flex-1 after:w-[1px] after:h-full 
                  after:bg-white/10 after:absolute after:top-10 after:right-0'>
                    <div className='text-2xl lg:text-4xl font-extrabold text-[#313bac]'>
                      <CountUp start={0} end={10} duration={5} /> +
                    </div>
                    <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
                      Certifications
                    </div>
                  </div> 

                {/* projects */}
                <div className='relative flex-1 after:w-[1px] after:h-full 
                  after:bg-white/10 after:absolute after:top-10 after:right-0'>
                    <div className='text-2xl lg:text-4xl font-extrabold text-[#313bac]'>
                      <CountUp start={0} end={15} duration={5} /> +
                    </div>
                    <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
                      Statisfied Clients
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
                  <div 
                    key={itemIndex}
                    className={`${
                      index === itemIndex && 
                      'text-[#313BAC] after:w-[100%] after:bg-[#313BAC] after:transition-all after:duration-300' 
                       } cursor-pointer capitalize lg:text-lg relative after:w-8
                        after:h-[2px]  after:absolute after:bottom-1 after:left-0`}
                        onClick={()=> setIndex(itemIndex)}
                        >
                          {item.title}
                    </div>
                    );
                  })}              
            </div>

            <div className='py-2 lg:py-6 flex flex-col gap-y-2 lg:gap-y-4 items-center lg:items-start '>
              {aboutData[index].info.map((item, itemIndex)=>{
                return (
                  <div 
                  key={itemIndex} 
                  className='flex-1 flex flex-col md:flex-row max-w max gap-x-2 
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

          {/* <Link href="https://google.com" target="_blank">  */} 
        <div>
          <Link href="/Resume-Davies Njogu Kabiro.pdf" target="_blank">
            <button className='text-white bg-[#313BAC] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#313BAC]
            hover:border-[#313BAC]'>
              View Resume
              <span className='group-hover:-rotate-45 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </Link>
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

