'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BiSolidMap, BiSolidPhone, BiSolidEnvelope } from 'react-icons/bi'
import { SocialIcon } from 'react-social-icons';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs'



import { images } from '@/app/constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Contact.scss';

const Contact = () => {
  return (
    <>
        <h2 className='head-text'>Let's have a chat</h2>

        <div className="app__contact-container">
            <div className='contact-info'>
                <h4>Contact Information</h4>
                <p>Fill up the form.</p>
                <div className='icon-text'>
                    <i className='icon'><BiSolidMap/></i>
                    <span>Nairobi, Kenya</span>
                </div>

                <div className='icon-text'>
                    <i className='icon'><BiSolidPhone/></i>
                    <span>+254 (115) 746-131</span>
                </div>
                
                <div className='icon-text'>
                    <i className='icon'><BiSolidEnvelope/></i>
                    <span>daviesnjogu@gmail.com</span>
                </div>

                <div className='social-media'>

                    <a href='https://linkedin.com/in/kabirodavies' target='_blank' rel='noopener noreferrer'>
                        < BsLinkedin 
                        fgColor='gray'
                        className='social-icon'
                        />
                    </a>

                    <a href='https://github.com/kabirodavies' target='_blank' rel='noopener noreferrer'>
                        < BsGithub 
                        fgColor='gray'
                        className='social-icon'
                        />
                    </a>

                    <a href='https://twitter.com/kabirodavies' target='_blank' rel='noopener noreferrer'>
                        <BsTwitter
                        fgColor='gray'
                        className='social-icon'
                        />
                    </a>

                </div>
            </div>
            <form>
                <div className='col'>
                    <div className='form-group'>
                        <input className="p-text" type="text" placeholder="First Name" name="name" />
                    </div>

                    <div className='form-group'>
                        <input className="p-text" type="text" placeholder="Last Name" name="name" />
                    </div>
                </div>

                <div className='col'>
                     <div className='form-group'>
                        <input className="p-text" type="email" placeholder="Email" name="phone" />
                    </div>

                    <div className='form-group'>
                        <input className="p-text" type="tel" placeholder="Phone" name="tel" />
                    </div>                    
                </div>

                <div className='col'>
                    <div className='form-group'>
                        <label>How can I assist you today?</label>
                        <div className='radio'>
                            <div className='radio-button'>
                                <input type='radio'id="radioweb" name="type" value="web"/><label for="radioweb">Web Development</label>
                            </div>

                            <div className='radio-button'>
                                <input type='radio' id="radiodata" name="type" value="data"/><label label for="radiodata">Data Science</label>
                            </div>
                            
                            <div className='radio-button'>
                                <input type='radio'  id="radiointerview" name="type" value="interview"/><label for="radiointerview">Hire Me</label>
                            </div>

                            <div className='radio-button'>
                                <input type='radio'  id="radioother" name="type" value="other"/><label for="radioother">Other</label>
                            </div> 
                        </div>
                     
                    </div>

                </div>
            </form>

        </div>
    </>
    
  )
}
export default AppWrap(
    MotionWrap(Contact, 'app__contact'),
     'contact',
     'app__whitebg'
  );