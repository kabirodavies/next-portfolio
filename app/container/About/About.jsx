'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiArrowNarrowRight } from 'react-icons/hi';

import { images } from '@/app/constants';
import { getAbouts } from '@/sanity/sanity-utils';
import { AppWrap, MotionWrap } from '../../wrapper';

import './About.scss';
import Link from 'next/link';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    async function fetchAbouts() {
      const aboutData = await getAbouts();
      setAbouts(aboutData);
    }
    fetchAbouts();
  }, []);

  return (
    <>
      <h2 className='head-text'>
        Good Development <span>means</span>
        <br />
        Good <span>Business</span>
      </h2>
{/* 
      <div>
        <a href="/work" className="text-black group border-2 px-6 py-3 my-2 flex items-center
         hover:bg-[#313BAC] hover:text-white">
          View Work
          <span className="group-hover:-rotate-45 duration-300">
            <HiArrowNarrowRight className="ml-3" />
          </span>
        </a>
      </div> */}


      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            whileHover={{ scale: 1.1 }}
            key={about.title + index}
            className='app__profile-item'
          >
            {about.image && <Image src={about.image} alt={about.title} width={250} height={100} />}
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
   'about',
   'app__whitebg'
);

