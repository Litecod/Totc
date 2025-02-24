import React from 'react'
import { BsFillPeopleFill } from 'react-icons/bs'
import { FaCheck } from 'react-icons/fa'
import { IoIosPerson } from 'react-icons/io'

const Membership = () => {
    return (
        <div className='w-full mx-auto px-[0.8rem] sm:px-[3rem] lg:px-[5rem] py-[2rem] md:py-[4rem] pt-[2rem] md:pt-[3rem] pb-[3rem] mb-[2rem] md:mb-0'>
            <h1 className='text-center text-[2rem] sm:text-[3rem] font-medium mb-[4rem] text-[#49BBBD]'>Affordable pricing</h1>
            <div className="flex flex-col md:flex-row gap-[2rem] md:gap-0 mx-auto w-full lg:w-[70%]">
                <div className="shadow-md shadow-[#0000004d] md:shadow-none p-[1rem] rounded-lg">
                    <div className=" relative ">
                        <div className="flex flex-col gap-5">
                            <h3 className='text-[#49BBBD]'>Like a pussy</h3>
                            <div className="flex items-baseline">
                                <h3 className='text-[2rem] font-medium'>Free </h3>
                                <span className='text-[0.8rem] font-medium'> / FOREVER</span>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-2 items-center">
                                    <div className="rounded-full bg-[#b8b8b89f] p-[0.5rem]">
                                        <FaCheck className=" text-[0.8rem] text-[#000]" />
                                    </div>
                                    <span>Components-driven system</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="rounded-full bg-[#b8b8b89f] p-[0.5rem]">
                                        <FaCheck className=" text-[0.8rem] text-[#000]" />
                                    </div>
                                    <span>Sales-boosting landing pages</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="rounded-full bg-[#b8b8b89f] p-[0.5rem]">
                                        <FaCheck className=" text-[0.8rem] text-[#000]" />
                                    </div>
                                    <span>Awesome Feather icons pack</span>
                                </div>
                            </div>
                        </div>
                        <button className='w-full py-[0.8rem] border-[2px] border-[#0000004a] text-[#49BBBD] rounded-lg mt-[7rem]'>Try For Free</button>
                    </div>

                </div>
                <div className="shadow-md shadow-[#0000004d] p-[1rem] rounded-lg">
                    <div className=" relative ">
                        <div className="flex flex-col gap-5">
                            <div className="flex justify-between"><h3 className='text-[#49BBBD] flex items-center'><IoIosPerson /> Individual</h3>
                            <h2 className='text-[0.7rem] px-[1rem] py-[0.2rem] rounded-3xl border-[1px] border-[red]'>BEST !</h2>
                            </div>
                            <div className="flex items-baseline">
                                <h3 className='text-[2rem] font-medium'>$24 </h3>
                                <span className='text-[0.8rem] font-medium'> / MONTH</span>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-2 items-center">
                                    <div className="rounded-full bg-[#ffa60090] p-[0.5rem]">
                                        <FaCheck className=" text-[0.8rem] text-[#000]" />
                                    </div>
                                    <span>Components-driven system</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="rounded-full bg-[#ffa60090] p-[0.5rem]">
                                        <FaCheck className=" text-[0.8rem] text-[#000]" />
                                    </div>
                                    <span>Sales-boosting landing pages</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="rounded-full bg-[#ffa60090] p-[0.5rem]">
                                        <FaCheck className=" text-[0.8rem] text-[#000]" />
                                    </div>
                                    <span>Awesome Feather icons pack</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="rounded-full bg-[#ffa60090] p-[0.5rem]">
                                        <FaCheck className=" text-[0.8rem] text-[#000]" />
                                    </div>
                                    <span>Themed into 3 different styles</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="rounded-full bg-[#ffa60090] p-[0.5rem]">
                                        <FaCheck className=" text-[0.8rem] text-[#000]" />
                                    </div>
                                    <span>Will help to learn Figma</span>
                                </div>
                            </div>
                        </div>
                        <button className='w-full py-[0.8rem] text-[#fff] bg-[#49BBBD] rounded-lg mt-[1rem]'>Regular license</button>
                    </div>

                </div>
                <div className="shadow-md shadow-[#0000004d] md:shadow-none p-[1rem] rounded-lg">
                    <div className=" relative ">
                        <div className="flex flex-col gap-5">
                            <h3 className='text-[#49BBBD] flex items-center'><BsFillPeopleFill /> Corporate</h3>
                            <div className="flex items-baseline">
                                <h3 className='text-[2rem] font-medium'>$12</h3>
                                <span className='text-[0.8rem] font-medium'> / Editor</span>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-2 items-center">
                                    <div className="rounded-full bg-[#49bbbd90] p-[0.5rem]">
                                        <FaCheck className=" text-[0.8rem] text-[#000]" />
                                    </div>
                                    <span>Components-driven system</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="rounded-full bg-[#49bbbd90] p-[0.5rem]">
                                        <FaCheck className=" text-[0.8rem] text-[#000]" />
                                    </div>
                                    <span>Sales-boosting landing pages</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="rounded-full bg-[#49bbbd90] p-[0.5rem]">
                                        <FaCheck className=" text-[0.8rem] text-[#000]" />
                                    </div>
                                    <span>Awesome Feather icons pack</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="rounded-full bg-[#49bbbd90] p-[0.5rem]">
                                        <FaCheck className=" text-[0.8rem] text-[#000]" />
                                    </div>
                                    <span>Themed into 3 different styles</span>
                                </div>
                            </div>
                        </div>
                        <button className='w-full py-[0.8rem] border-[2px] border-[#0000004a] text-[#49BBBD] rounded-lg mt-[4rem]'>Try For Free</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Membership