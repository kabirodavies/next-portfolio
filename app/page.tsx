import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { images } from './constants';

// import { About, Skills, Testimonial, Work, Header, Footer, Contact } from './container';
import { Header, About } from './container';

import { TopBar, NavBar } from './components';

import './page.scss';


const Home: NextPage = () => {
  return (
    <>
      <div className='app'>
        <TopBar />
        <NavBar />
               
      <section id="home" className=''>
        <Header />
      </section>
 
      <section id="about" className=''>
        <About />
      </section>

        {/*
      <section id="about" className=''>
        <About />
      </section>

      <section id="work" className=''>
        <Work />  
      </section>

      <section id="skill" className=''>
        <Skills />
      </section>

      <section id="testimonial" className=''>
        <Testimonial />
      </section>

      <section id="footer" className=''>
        <Footer />
      </section> */}

        <Link href={'#home'} >
          <footer className='sticky bottom-5 w-full cursor-pointer'>
            <div className='flex items-center justify-center'>
              <Image
                className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 
            cursor-pointer bg-black hover:bg-[#313BAC]'
                src={images.davis} alt={''} />
            </div>
          </footer>
        </Link>

      </div>
    </>
  )
}

export default Home 