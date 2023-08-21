"use client";
import React, { FormEvent, useState } from 'react'

import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

type Props = {}

const Footer = (props: Props) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const onSubmit = async (e: FormEvent) =>{
        e.preventDefault()

        try {
            const res = await fetch('/app/pages/api/contact.ts', {
                method: 'POST',
                body: JSON.stringify({
                    name, email, message
                }),
                headers: {
                    'content-type': 'application/json',

                },
            })

        } catch(err:any) {
            console.error('Err', err)
        }

    }


    return (
        <>
            <form onSubmit={onSubmit}>
                <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" 
                    placeholder="Name" 
                />
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    placeholder="Email" 
                />
                <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">Submit</button>

            </form>
        </>
    )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'footer', 'app__primarybg');

// 'app__primarybg'