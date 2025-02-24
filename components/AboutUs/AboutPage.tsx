import Image from "next/image"
import img from "@/images/students.png"
import Link from "next/link"


const AboutPage = () => {
    return (
        <div className="w-full mx-auto px-[0.8rem] sm:px-[3rem] lg:px-[5rem] py-[2rem] md:py-[4rem] pt-[3rem] pb-[2rem] md:pb-[5rem] flex flex-col gap-6 mt-[1rem]">
            <h1 className="text-[2rem] font-medium text-[#2F327D]">Why Swift UI Should Be on the Radar of Every Mobile Developer</h1>
            <div className=" text-[#26262691] flex flex-col gap-4 ">
                <p>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
                <p>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place. TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place. TOTC is a platform</p>
                <p>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place. TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage</p>
            </div>
            <hr className="border-[#000]" /><a href="`"></a>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 ">
                    <Image src={img} alt="" className=" bg-[#2f2f2f39] rounded-md w-[5rem]" />
                    <div className=" flex flex-col gap-4">
                        <p>Written by</p>
                        <p>Lina</p>
                    </div>
                </div>
                <div className="">
                    <button className="border-[2px] border-[#49BBBD] px-[1rem] sm:px-[3rem] py-[0.5rem] rounded-md"><Link href="/aboutus" className="text-[#49BBBD]">Follow</Link></button>
                </div>
            </div>

        </div>
    )
}

export default AboutPage