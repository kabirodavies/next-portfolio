/* eslint-disable */
"use client";
import React, { useState } from 'react';
import Image from 'next/image';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { getMessages } from '@/sanity/sanity-utils';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); 

  const { name, email, subject, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true); 
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      subject:subject,
      message: message,
    }

    client.create(contact)
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true);

    })
  };


  return (
    <>

      <h2 className='head-text'>Let's<span> connect.</span></h2>

      {!isFormSubmitted ? 
      <div className='app__footer-form app__flex'>

        <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Name' name='name' value={name} onChange={handleChangeInput}/>
        </div>
        <div className='app__flex'>
          <input className='p-text' type='email' placeholder='Email' name='email' value={email} onChange={handleChangeInput}/>
        </div>
        <div className='app__flex'>
          <input className='p-text' type='subject' placeholder='Subject' name='subject' value={subject} onChange={handleChangeInput}/>
        </div>

        <div>
          <textarea
          className='p-text'
          placeholder='Your Message'
          value={message}
          name='message'
          onChange={handleChangeInput}
          />
        </div>
        <button className='p-text' type='button'onClick={handleSubmit}>
            {loading ? 'Sending' : 'Send Message'}
        </button>
      </div>
      : <div>
        <h3 className='head-text'>Thank you for getting in touch!</h3>
      </div>}
    </>   
  )
}
export default AppWrap(
  MotionWrap(Contact, 'app__footer'),
  'footer', 
  'app__primarybg'
);
