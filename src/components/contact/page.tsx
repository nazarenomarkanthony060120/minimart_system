import { ContactDeveloperProps } from '@/interface/contact/interface'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { toast } from 'react-toastify'

function ContactDeveloper(props: any) {
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ isSubmit, setIsSubmit ] = useState(false)

    const submitContact = async (e: any) => {
        e.preventDefault()
    }

    return (
        <div className='absolute flex flex-col left-5 bottom-5 w-96 h-fit text-black border-2 border-cyan-300 bg-white rounded-md gap-7 p-5 z-10'>
            <div className="flex justify-between">
                <div className="">
                    <span className='text-lg font-semibold'>Contact Developer</span>
                </div>
                <div className=" hover:text-white hover:bg-red-600 rounded-full p-1" onClick={ () => props.isClick(false) }>
                    <AiOutlineClose />
                </div>
            </div>
            <form action="" onSubmit={ submitContact }>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className='border-2 border-cyan-300 p-2 rounded-md' placeholder='Enter Email' onChange={ e => setEmail(e.target.value) }/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message">Message:</label>
                        <textarea className='border-2 border-cyan-300 p-2 rounded-md ' name="message" id="message" cols={30} rows={7} placeholder='Enter Message' onChange={ e => setMessage(e.target.value) }></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button className='border-2 border-cyan-300 p-2 rounded-md hover:bg-cyan-300 shadow-lg hover:shadow-cyan-300'>Submit</button>
                    </div>
                </div>
            </form>
            
        </div>
    )
}

export default ContactDeveloper