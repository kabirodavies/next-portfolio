import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { images } from './constants';

import { Header, About, Work, Testimonial, Services, Blog, Contact} from './container';

import { TopBar, NavBar, Footer } from './components';

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

        <section id="work" className=''>
          <Work />  
        </section>

        <section id="services" className=''>
          <Services />
        </section>

        <section id="testimonial" className=''>
          <Testimonial />
        </section>

        <section id="blog" className=''>
          <Blog />
        </section>

        <section id="contact" className=''>
          <Contact />
        </section>

      <Link href={'#home'} >
        <footer className='sticky lg:bottom-5 sm:bottom-20  w-full cursor-pointer'>
            <div className='flex items-center justify-center '>
              <Image
                className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 
                cursor-pointer bg-black hover:bg-[#313BAC]'
                src={images.davis} alt={''} />
            </div>
        </footer>
      </Link>
      </div>
      <Footer />
    </>
  )
}

export default Home 