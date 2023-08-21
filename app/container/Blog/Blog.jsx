'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiArrowNarrowRight } from 'react-icons/hi';

import { images } from '@/app/constants';
import { getAbouts } from '@/sanity/sanity-utils';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Blog.scss';
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
     <h2 className='head-text'>Blog</h2>
   
      {/* <div className=''>
        <a href="/blog" className="text-black group border-2 px-6 py-3 my-2 ml-4 flex items-center
         hover:bg-[#313BAC] hover:text-white">
          View All Posts
          <span className="group-hover:-rotate-45 duration-300">
            <HiArrowNarrowRight className="ml-3" />
          </span>
        </a>
      </div> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__blog'),
   'blog',
   'app__whitebg'
);

