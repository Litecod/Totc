"use client"

import Image from "next/image"
import imgOne from "@/images/blog1.png"
import imgTwo from "@/images/blog2.png"
import imgThree from "@/images/blog3.png"
import imgfour from "@/images/blog4.png"

// type imageList = {
//     id: number;
//     name: string;
//     src: string;
// }
//: imageList[]

const BlogList = () => {
    const image = [
        {id: 1, name: "UX/UI", src: imgOne},
        {id: 2, name: "React", src: imgTwo},
        {id: 3, name: "PHP", src: imgThree},
        {id: 4, name: "JavaScript", src: imgfour},
    ]

  return (
    <div className="px-[0.8rem] sm:px-[3rem] lg:px-[5rem] md:py-[4rem] mt-[5rem] md:mt-[3rem] mb-[5rem] md:mb-[3rem]">
        <h1 className="font-medium text-[1.5rem]">Start learning now</h1>
        <div className="flex flex-col md:flex-row justify-between mt-[2rem] gap-4 md:gap-0">
            {image.map((img) => {
                return (
                    <div key={img.id} className="w-full md:w-[20%] relative">
                        <Image src={img.src} alt="" className="w-[100%] z-0 "/>
                        <p className="absolute bottom-[10%] bg-[#ffffff90] hover:text-[#ffff] hover:bg-[#00000090] duration-150 z-10 w-[70%] text-center left-[15%] py-[0.5rem] rounded-xl">{img.name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default BlogList