"use client";

import React from 'react';
import Link from 'next/link';

import './Footer.scss';

type Props = {};

export default function Footer({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-strat justify-between z-20 xl:items-center bg-[#353738]'> 
      <div className='flex flex-row items-center text-white max-w-7xl mx-auto'>           
        <Link href='https://kabiro.vercel.app' className=' social-icon-wrapper cursor-pointer'>
          <h1 className=' text-1xl'>
            <span style={{ fontWeight: 'bold' }}>Built by Davies with </span>Next.js & Sanity.
          </h1>
        </Link>
      </div>
    </header>
  );
}
