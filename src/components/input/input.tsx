import React from 'react'

function input() {
    return (
        <>
            <input type="text" className='w-full p-2 shadow-lg border text-center' placeholder='Enter Email' required/>
            <input type="password" className='w-full p-2 shadow-lg border text-center' placeholder='Enter Password' required/>
        </>
    )
}

export default input