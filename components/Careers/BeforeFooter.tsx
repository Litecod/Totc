import Image from 'next/image'
import img from "@/images/beforefooter.png"
import Link from 'next/link'

const BeforeFooter = () => {
    const list = [
        { id: 1, title: "Become a Teacher", link: "Apply a Teacher" },
        { id: 2, title: "Become a Coursector", link: "Apply a Coursector" },
    ]
    return (
        <div className='w-full mx-auto px-[0.8rem] sm:px-[3rem] lg:px-[5rem] py-[2rem] md:py-[4rem] mt-[5rem] md:mt-[3rem] mb-[3rem]'>
            <div className="flex flex-col md:flex-row gap-[2rem] md:gap-0 justify-between">
                {list.map((item) => {

                    return (
                        <div key={item.id} className="w-full md:w-[47%] flex flex-col gap-5 rounded-xl shadow-lg shadow-[#8282821f] p-[1.2rem]">
                            <Image src={img} alt='img' />
                            <h1 className="text-[1.3rem] font-medium mt-[-1rem]">{item.title}</h1>
                            <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                            <div className="">
                                <Link href="/careers" className="float-right px-[2rem] py-[0.8rem] bg-[#49BBBD] text-[#fff] rounded-xl mt-[2rem]">{item.title}</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BeforeFooter