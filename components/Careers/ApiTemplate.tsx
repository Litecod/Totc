import Link from 'next/link'
import React from 'react'
import { FaAndroid, FaAppleAlt } from 'react-icons/fa'

const ApiTemplate = () => {
    return (
        <div className="w-full mx-auto px-[0.8rem] sm:px-[3rem] lg:px-[5rem] mt-[-5rem] z-10">
            <div className="bg-[#252641] lg:px-[5rem] flex flex-col md:flex-row justify-between gap-[2rem] md:gap-0 px-[0.8rem] sm:px-[3rem] py-[2rem] md:py-[4rem] text-center rounded-3xl">
                <h1 className='text-[#fff] text-[2rem] font-medium'>APP is available for free</h1>
                <div className="flex gap-4">
                    <Link href="/" className='text-[#fff] bg-[#29B9E7] px-[1.5rem] py-[0.5rem] items-center rounded-lg flex gap-2'><FaAndroid /> Android APP</Link>
                    <Link href="/" className='text-[#fff] bg-[#49BBBD] px-[1.5rem] py-[0.5rem] items-center rounded-lg flex gap-2'><FaAppleAlt /> IOS APP</Link>
                </div>
            </div>
        </div>
    )
}

export default ApiTemplate