"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Image from 'next/image';

import { AppWrap, MotionWrap } from '../../wrapper'; 
import { getTestimonials, getBrands } from '@/sanity/sanity-utils';
import './Testimonial.scss';

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    async function fetchTestimonials() {
      const testimonialData = await getTestimonials();
      setTestimonials(testimonialData);
    }
    fetchTestimonials();
  }, []);

  useEffect(() => {
    async function fetchBrands() {
      const brandData = await getBrands();
      setBrands(brandData);
    }
    fetchBrands();
  }, []);

  const test = testimonials[currentIndex];

  return (
    <>
     <h2 className='head-text'>Testimonial Placeholder </h2>
      { testimonials.length > 0 && (
        <>
        <div className='app__testimonial-item app__flex'>
          {test.image &&
            <Image
              src={test.image}
              alt='testimonial'
              width={250}
              height={150}
            />
          }
          <div className='app__testimonial-content'>
            <p className='p-text'>{test.feedback}</p>
            <div>
              <h4 className='bold-text'>{test.name}</h4>
              <h5 className='p-text'>{test.company}</h5>
            </div>
          </div>
        </div>
        
        <div className='app__testimonial-btns app__flex'>
              <div className='app__flex' onClick={handlePrev}>
                <HiChevronLeft/>
              </div>
              <div className='app__flex' onClick={handleNext}>
                <HiChevronRight/>
              </div>
            </div>
        </>
      )}

      <div className='app__testimonial-brands app__flex'>
        {brands.map((brand) => (
          <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, type: 'tween' }}
          key={brand._id}
          >
            {brand.image &&
            <Image
              src={brand.image}
              alt= {brand.name}
              width={250}
              height={200}
            />
            }

          </motion.div>
        ))}

      </div>

    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial', 
  'app__primarybg'
);