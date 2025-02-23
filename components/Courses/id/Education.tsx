import Image from "next/image";
import img from "@/images/Education.png"

const Education = () => {
    const mark = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
    ];
    return (
        <div className="bg-[#9dccff50] w-full mx-auto px-[0.8rem] sm:px-[3rem] lg:px-[5rem] py-[2rem] md:py-[4rem] pt-[2rem] md:pt-[3rem] md:pb-[3rem] ">
            <div className=" flex justify-between mb-[1.5rem] items-center">
                <h1 className="font-medium text-[1.5rem]">Top  Education offers and deals are listed here</h1>
                <h4 className="text-[#49BBBD] texe-[0.9rem]">See all</h4>
            </div>
            <div className="flex flex-col md:flex-wrap md:flex-row justify-between gap-5 md:gap-0 mx-auto">
                {mark.map((item) => {
                    return (
                        <div key={item.id} className="relative w-[100%] md:w-[21rem] lg:w-[23rem] h-[20rem] sm:h-auto mt-[3rem]">
                            <Image src={img} alt="image" className="-z-10 w-[100%] h-[100%]" />
                            <div className="absolute bg-[#0000003f] left-0 top-0 w-[100%] h-[100%] rounded-2xl flex flex-col gap-3 sm:gap-8 md:gap-6 p-[2rem] md:p-[1rem] lg:p-[2rem] text-[#fff]">
                                <div className="bg-[#ff0000] w-[5rem] py-[1.5rem] rounded-xl "><p className="text-center font-medium text-[1.3rem] ">50%</p></div>
                                <h2 className="font-medium text-[1.3rem]">FOR INSTRUCTION</h2>
                                <p className="font-medium sm:text-[2rem] md:text-[1.2rem]">TOTC's school management software helps traditional and online schools manage scheduling,</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Education