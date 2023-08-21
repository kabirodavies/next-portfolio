'use client';
import React, { useEffect, useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { getWorks } from '@/sanity/sanity-utils';
import { motion } from 'framer-motion';

import Image from 'next/image';
import { images } from '@/app/constants';

import { AppWrap, MotionWrap } from '../../wrapper';

import './Work.scss';

const categories = ['Data Science', 'Data Engineering', 'Web Development', 'All'];


const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const fetchWorks = async () => {
      const fetchedWorks = await getWorks();
      setWorks(fetchedWorks);
    };

    fetchWorks();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredWorks =
    selectedCategory === 'All'
      ? works
      : works.filter((work) => work.tags.includes(selectedCategory));

  return (
    <>
      <h2 className='head-text'>
        My Creative <span>Portfolio</span> Section
      </h2>

      <motion.div
        className='app__work-filter'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={`app__work-filter-item app__flex p-text ${
              selectedCategory === category ? 'active item-active' : ''
            }`}
            whileHover={{ scale: 1.1, originY: 0 }} // Scale up on hover
            whileTap={{ scale: 0.9 }} // Scale down on tap
            transition={{ duration: 0.2 }}
          >
            {category}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className='app__work-portfolio'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        {filteredWorks.map((work, index) => (
          <motion.div
            key={work.title + index}
            className='app__work-item app__flex'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className='app__work-img app__flex'>
              {work.image && (
                <Image src={work.image} alt={work.title} width={250} height={100} />
              )}
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className='app__work-hover app__flex'
              >
                <a href={work.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>

                <a href={work.codeLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className='app__work-tag app__flex'>
                <p className='p-text'>{work.tags[0]}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
   'work',
   'app__primarybg'
);