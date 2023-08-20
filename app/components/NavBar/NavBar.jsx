"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiNewspaper,
  HiEnvelope,
} from 'react-icons/hi2';

import './NavBar.scss';

export const navData = [
  { name: 'home', path: '#home', icon: <HiHome /> },
  { name: 'about', path: '#about', icon: <HiUser /> },
  { name: 'work', path: '#work', icon: <HiViewColumns /> },
  { name: 'skill', path: '#skill', icon: <HiRectangleGroup /> },
  { name: 'testimonial', path: '#testimonial', icon: <HiChatBubbleBottomCenterText /> },
  { name: 'blog', path: '#blog', icon: <HiNewspaper /> },
  { name: 'contact', path: '#footer', icon: <HiEnvelope /> },
];

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('#home');

  const handleLinkClick = (path) => {
    setActiveLink(path);
    scrollToSection(path);
  };

  const scrollToSection = (path) => {
    const section = document.querySelector(path);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const sectionOffsets = navData.reduce((acc, link) => {
      const section = document.querySelector(link.path);
      if (section) {
        acc[link.path] = section.offsetTop;
      }
      return acc;
    }, {});

    const currentPosition = window.scrollY + window.innerHeight / 2;

    for (const [path, offset] of Object.entries(sectionOffsets)) {
      if (currentPosition >= offset) {
        setActiveLink(path);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className='app__nav'>
      <div className='app__nav-icons'>
        {navData.map((link, index) => {
          const isActive = activeLink === link.path;

          return (
            <Link
              className={`app__nav-icon group hover:text-accent transition-all duration-300 ${
                isActive ? 'text-[#313BAC]' : ''
              }`}
              href={link.path}
              key={index}
              onClick={() => handleLinkClick(link.path)}
            >
              {/* tooltip */}
              <div className='absolute pr-14 right-0 hidden lg:group-hover:flex'>
                <div className='bg-[#313BAC] relative flex text-white p-[6px] rounded-[3px]'>
                  <div className='text-[12px] leading-none font-semibold capitalize'>{link.name}</div>
                  {/* triangle */}
                  <div className='border-solid border-l-[#313BAC] border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
                </div>
              </div>
              {/* icon */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;