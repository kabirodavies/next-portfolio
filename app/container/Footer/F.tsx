// "use client";
// import React, { useState } from 'react';
// import { BsPhoneFill } from 'react-icons/bs'
// import { BiSolidMessage } from 'react-icons/bi'

// import { AppWrap, MotionWrap } from '../../wrapper';
// import './Footer.scss';
// import { SubmitHandler, useForm } from 'react-hook-form';

// // Add the necessary types for the form data

// type Inputs = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };

// const Footer = () => {
//   const { register, handleSubmit }= useForm<Inputs>();
//   const onSubmit: SubmitHandler<Inputs> = (formData) => {
//     window.location.href = `mailto:daviesnjogu@gmail.com?subject=${formData.subject}&
//     body=Hi may name is ${formData.name}. ${formData.message} (${formData.email})`   
//   };
  


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

//       {/* {!isFormSubmitted ? ( */}
//       <form className="app__footer-form app__flex" onSubmit={handleSubmit(onSubmit)}>
//           <div className="app__flex">
//             <input {...register('name')} className="p-text" type="text" placeholder="Name" />
//           </div>

//           <div className="app__flex">
//             <input {...register('email')} className="p-text" type="email" placeholder="Email" />
//           </div>

//           <div className="app__flex">
//             <input {...register('subject')} className="p-text" type="text" placeholder="Subject" />
//           </div>

//           <div>
//             <textarea 
//             {...register('message')}
//             className="p-text" placeholder="Message"
//             />
//           </div>

//           <button className="p-text" type="submit">Submit
//             {/* {loading ? 'Sending' : 'Send Message'} */}
//           </button>
//         </form>
//       {/* // ) : (
//          <div>
//            <h3 className="head-text">Thank you for getting in touch!</h3>
//          </div>
//        )} */}
//     </>
//   );
// };

// export default AppWrap(MotionWrap(Footer, 'app__footer'), 'footer', 'app__whitebg');
















// "use client";
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { BsPhoneFill } from 'react-icons/bs'
// import { BiSolidMessage } from 'react-icons/bi'

// import { images } from '../../constants';
// import { AppWrap, MotionWrap } from '../../wrapper';
// import { getMessages } from '@/sanity/sanity-utils';
// import './Footer.scss';

// const Footer = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false); 

//   const { name, email, message } = formData;

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
//       message: message,
//     }

//     client.create(contact)
//     .then(() => {
//       setLoading(false);
//       setIsFormSubmitted(true);

//     })
//   };


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

//       {!isFormSubmitted ? 
//       <div className='app__footer-form app__flex'>
//         <div className='app__flex'>
//           <input className='p-text' type='text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput}/>
//         </div>

//         <div className='app__flex'>
//           <input className='p-text' type='email' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput}/>
//         </div>

//         <div>
//           <textarea
//           className='p-text'
//           placeholder='Your Message'
//           value={message}
//           name='message'
//           onChange={handleChangeInput}
//           />
//         </div>
//         <button className='p-text' type='button'onClick={handleSubmit}>
//             {loading ? 'Sending' : 'Send Message'}
//         </button>
//       </div>
//       : <div>
//         <h3 className='head-text'>Thank you for getting in touch!</h3>
//       </div>}
//     </>   
//   )
// }
// export default AppWrap(
//   MotionWrap(Footer, 'app__footer'),
//   'footer', 
//   'app__whitebg'
// );





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

