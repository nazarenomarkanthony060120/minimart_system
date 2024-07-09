import { Teko } from 'next/font/google'
import React from 'react'

const teko = Teko({ weight: '500', subsets: ['latin'] });

function Header() {

    const TITLE = 'Sample Minimart'; //not yet decided 
    return (
        <header className='flex justify-between items-center text-slate-200max-sm:px-5 max-sm:py-2 max-md:px-14  px-20 py-5'>
            <span className={`text-4xl text-slate-200 font-bold whitespace-pre max-sm:text-lg max-md:text-lg ${teko.className}`}>{TITLE}</span>
        </header>
    )
}

export default Header