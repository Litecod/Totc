import Image from "next/image"
import Link from "next/link"
import img from "@/images/latest1.png"
import imgOne from "@/images/latest2.png"
import imgTwo from "@/images/latest3.png"
import imgThree from "@/images/latest4.png"


const LatestNews = () => {
    const List = [
        { id: 1, title: "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand", description: "Class Technologies Inc., the company that created Class,...", image: imgOne, absolute: "PRESS RELEASE" },
        { id: 2, title: "Zoom's earliest investors are betting millions on a better Zoom for schools", description: "Zoom was never created to be a consumer product. Nonetheless, the....", image: imgTwo, absolute: "NEWS"  },
        { id: 3, title: "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms", description: "This year, investors have reaped big financial returns from betting on Zoom...", image: imgThree, absolute: "NEWS"  },
    ]
    return (
        <div className="w-full mx-auto px-[0.8rem] sm:px-[3rem] lg:px-[5rem] py-[2rem] md:py-[4rem] mt-[5rem] md:mt-[3rem]">
            <div className=" flex flex-col gap-2 text-center">
                <h1 className="text-[2rem] text-[#2F327D]">Lastest News and Resources</h1>
                <p>See the developments that have occurred to TOTC in the world</p>
            </div>
            <div className="flex flex-col md:flex-row mt-[3rem] md:mt-[5rem] justify-between gap-[1rem]">
                <div className=" flex flex-col w-full md:w-[50%] md:max-w-[34rem] gap-[1.24rem]">
                    <Image src={img} alt="" />
                    <Link href={"/"} className=" px-[1rem] py-[0.2rem] text-[0.8rem] bg-[#49BBBD] text-[#fff] max-w-[4rem] rounded-3xl">New</Link>
                    <h2 className="text-[1.4rem] font-medium ">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h2>
                    <div className="flex flex-col text-[#0000008a] gap-[1rem]">
                        <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        <Link href={"/"} className="underline"> Read more</Link>
                    </div>
                </div>
                <div className=" flex flex-col w-full md:w-[50%] gap-[2rem] mt-[3rem]">
                    {List.map((item) => {
                        return (
                            <div key={item.id} className="flex justify-between gap-2 lg:gap-6">
                                <div className="relative">
                                    <Image src={item.image} alt="image" className=""/>
                                    <p className="absolute px-[1rem] py-[0.2rem] text-[0.6rem] bg-[#49BBBD] text-[#fff] right-[1rem] bottom-[1rem] rounded-3xl">{item.absolute}</p>
                                </div>
                                <div className=" flex flex-col gap-[1.5rem]">
                                    <h1 className="text-[1.2rem]">{item.title}</h1>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default LatestNews