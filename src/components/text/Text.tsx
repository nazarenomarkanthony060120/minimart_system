'use client'
import { TypeAnimation } from "react-type-animation";

export function TypeAnimationText() {
    const text = <TypeAnimation sequence={['Inventory Management System', 1000, 'Cash Management System', 1000, 'Stocks Management System', 1000]} speed={50} repeat={Infinity}/>;
    return (
        <>
            <span className='text-[30px] font-bold font-[Poppins]'>{text}</span>
        </>
    )
}
