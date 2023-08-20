"use client";

import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

import './TopBar.scss';

type Props = {};

export default function TopBar({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-strat justify-between z-20 xl:items-center bg-[#353738]'> 
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className='flex flex-row items-center text-white max-w-7xl mx-auto'
      >             
        <Link href='/' className=' social-icon-wrapper cursor-pointer'>
          <h1 className=' text-2xl'>
            <span style={{ fontWeight: 'bold' }}>davies</span>njogu.
          </h1>
        </Link>

      </motion.div>
      
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className='flex flex-row items-center text-gray-50 max-w-7xl mx-auto'
      >
        <div className='social-icon-wrapper'>
          <SocialIcon
            url='https://linkedin.com/in/kabirodavies'
            fgColor='white'
            bgColor='transparent'
            target='_blank'
            className='social-icon'
          />

          <SocialIcon
            url='https://github.com/kabirodavies'
            fgColor='white'
            bgColor='transparent'
            target='_blank'
            className='social-icon'
          />

          <SocialIcon
            url='https://twitter.com/kabirodavies'
            fgColor='white'
            bgColor='transparent'
            target='_blank'
            className='social-icon'
          />
        </div>
      </motion.div>
    </header>
  );
}
