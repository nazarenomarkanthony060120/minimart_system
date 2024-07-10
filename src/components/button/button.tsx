'use client'
import Link from 'next/link'
import { useState } from 'react'
import ContactDeveloper from '../contact/page'

export function RegisterButton() {
    return (
        <Link href={'/register'}>
            <button className='border border-white rounded-md p-2 w-20 hover:bg-slate-700'>Register</button>
        </Link>
    )
}

export function LoginButton() {
    return (
        <Link href={'/login'}>
            <button className='border border-white rounded-md p-2 w-20 hover:bg-slate-700'>Login</button>
        </Link>
    )
}

export function ContactDeveloperButton() {
    const [ contact, setContact ] = useState(false)

    const handleClose = (contact:any) => {
        setContact(contact)
    }

    return (
        <>
            <div className={` ${contact ? '' : 'hidden'}`}>
                <ContactDeveloper isClick={handleClose}/>
            </div>
            <button className='border border-white rounded-md p-2 w-44 hover:bg-slate-700' onClick={ e => setContact(true) }>Contact Developer</button>
        </>
    )
}