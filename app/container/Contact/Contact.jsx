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
  


























//   // "use client";
// // import React, { useState } from 'react';
// // import Image from 'next/image';

// // import { images } from '../../constants';
// // import { AppWrap, MotionWrap } from '../../wrapper';
// // import { getMessages } from '@/sanity/sanity-utils';
// // import './Footer.scss';

// // const Footer = () => {
// //   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
// //   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
// //   const [loading, setLoading] = useState(false); 

// //   const { name, email, message } = formData;

// //   const handleChangeInput = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSubmit = () => {
// //     setLoading(true); 
// //     const contact = {
// //       _type: 'contact',
// //       name: name,
// //       email: email,
// //       message: message,
// //     }

// //     client.create(contact)
// //     .then(() => {
// //       setLoading(false);
// //       setIsFormSubmitted(true);

// //     })
// //   };


// //   return (
// //     <>
// //       <h2 className='head-text'>Let's have a chat</h2>

// //       <div className='app__footer-cards'>
// //         <div className='app__footer-card'>
// //           <Image src={images.email} alt='email'/>
// //           <a href='mailto:daviesnjogu@gmail.com' className='p-text' >daviesnjogu@gmail.com</a>
// //         </div>

// //         <div className='app__footer-card'>
// //           <Image src={images.mobile} alt='mobile'/>
// //           <a href='tel: +254 (115) 746-131' className='p-text' >+254 (115) 746-131</a>
// //         </div>
// //       </div>

// //       {!isFormSubmitted ? 
// //       <div className='app__footer-form app__flex'>
// //         <div className='app__flex'>
// //           <input className='p-text' type='text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput}/>
// //         </div>

// //         <div className='app__flex'>
// //           <input className='p-text' type='email' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput}/>
// //         </div>

// //         <div>
// //           <textarea
// //           className='p-text'
// //           placeholder='Your Message'
// //           value={message}
// //           name='message'
// //           onChange={handleChangeInput}
// //           />
// //         </div>
// //         <button className='p-text' type='button'onClick={handleSubmit}>
// //             {loading ? 'Sending' : 'Send Message'}
// //         </button>
// //       </div>
// //       : <div>
// //         <h3 className='head-text'>Thank you for getting in touch!</h3>
// //       </div>}
// //     </>   
// //   )
// // }
// // export default AppWrap(
// //   MotionWrap(Footer, 'app__footer'),
// //   'footer', 
// //   'app__whitebg'
// // );


// "use client";
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { BsPhoneFill } from 'react-icons/bs'
// import { BiSolidMessage } from 'react-icons/bi'



// import { AppWrap, MotionWrap } from '../../wrapper';
// import { getMessages } from '@/sanity/sanity-utils';
// import './Footer.scss';

// // Add the necessary types for the form data
// interface FormValues {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// const Footer = () => {
//   const [formData, setFormData] = useState<FormValues>({ name: '', email: '', subject: '',  message: '' });
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const { name, email, subject, message } = formData;

//   const handleChangeInput = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = () => {
//     setLoading(true);
//     const contact = {
//       _type: 'contact',
//       name: name,
//       email: email,
//       subject: subject,
//       message: message,
//     };

//     // Reuse the existing client instance from the getMessages function
//     getMessages().then((client) => {
//       client.create(contact).then(() => {
//         setLoading(false);
//         setIsFormSubmitted(true);
//       });
//     });
//   }

//   return (
//     <>
//       <h2 className='head-text'>Let's have a chat</h2>

//       <div className='app__footer-cards'>
//         <div className='app__footer-card'>
//           <i className='icon'><BiSolidMessage/></i>
//           <a href='mailto:daviesnjogu@gmail.com' className='p-text' >daviesnjogu@gmail.com</a>
//         </div>

//         <div className='app__footer-card'>
//           <i className='icon'><BsPhoneFill/></i>
//           <a href='tel: +254 (115) 746-131' className='p-text' >+254 (115) 746-131</a>
//         </div>
//       </div>

//       {!isFormSubmitted ? (
//         <div className="app__footer-form app__flex">
//           <div className="app__flex">
//             <input className="p-text" type="text" placeholder="Name" name="name" value={name} onChange={handleChangeInput} />
//           </div>

//           <div className="app__flex">
//             <input className="p-text" type="email" placeholder="Email" name="email" value={email} onChange={handleChangeInput} />
//           </div>

//           <div className="app__flex">
//             <input className="p-text" type="text" placeholder="Subject" name="subject" value={subject} onChange={handleChangeInput} />
//           </div>

//           <div>
//             <textarea
//               className="p-text"
//               placeholder="Message"
//               value={message}
//               name="message"
//               onChange={handleChangeInput}
//             />
//           </div>
//           <button className="p-text" type="button" onClick={handleSubmit}>
//             {loading ? 'Sending' : 'Send Message'}
//           </button>
//         </div>
//       ) : (
//         <div>
//           <h3 className="head-text">Thank you for getting in touch!</h3>
//         </div>
//       )}
//     </>
//   );
// };

// export default AppWrap(MotionWrap(Footer, 'app__footer'), 'footer', 'app__whitebg');

