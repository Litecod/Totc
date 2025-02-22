import {
  FaPaintBrush,
  FaTv,
  FaConnectdevelop,
  FaBriefcase,
  FaMoneyCheck,
  FaFilm,
  FaBook,
} from "react-icons/fa";

const Choice = () => {

  return (
    <div className="w-full mx-auto px-[0.8rem] sm:px-[3rem] lg:px-[5rem] py-[2rem] md:py-[4rem] pt-[2rem] md:pt-[3rem] md:pb-[3rem] ">
      <h1 className="text-[1.5rem] font-medium text-center md:text-left">Choice favourite course from top category </h1>
      <div className="mt-[3rem] flex flex-col md:flex-row md:flex-wrap justify-between gap-5 md:gap-10">
        <div className="p-[1rem] w-full md:w-[17rem] shadow-sm shadow-[#00000034] flex flex-col gap-4 text-center rounded-xl">
          <div className="p-[1rem] max-w-[3.5rem] bg-[#49BBBD4D] rounded-sm mx-auto">
            <FaPaintBrush className="text-[#49BBBD] text-[1.3rem]" />
          </div>
          <h1 className="font-medium text-[1.5rem]">Design</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
        </div>
        <div className="p-[1rem] w-full md:w-[17rem] shadow-sm shadow-[#00000034] flex flex-col gap-4 text-center rounded-xl">
          <div className="p-[1rem] max-w-[3.5rem] bg-[#5B72EE4D] rounded-sm mx-auto">
            <FaTv className="text-[#5B72EE] text-[1.3rem]" />
          </div>
          <h1 className="font-medium text-[1.5rem]">Web Development</h1>
          <p className="text-[#00000092]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
        </div>
        <div className="p-[1rem] w-full md:w-[17rem] shadow-sm shadow-[#00000034] flex flex-col gap-4 text-center rounded-xl">
          <div className="p-[1rem] max-w-[3.5rem] bg-[#9DCCFF4D] rounded-sm mx-auto">
            <FaConnectdevelop className="text-[#9DCCFF] text-[1.3rem]" />
          </div>
          <h1 className="font-medium text-[1.5rem]">Development</h1>
          <p className="text-[#00000092]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
        </div>
        <div className="p-[1rem] w-full md:w-[17rem] shadow-sm shadow-[#00000034] flex flex-col gap-4 text-center rounded-xl">
          <div className="p-[1rem] max-w-[3.5rem] bg-[#00CBB84D] rounded-sm mx-auto">
            <FaBriefcase className="text-[#00CBB8] text-[1.3rem]" />
          </div>
          <h1 className="font-medium text-[1.5rem]">Business</h1>
          <p className="text-[#00000092]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
        </div>
        <div className="p-[1rem] w-full md:w-[17rem] shadow-sm shadow-[#00000034] flex flex-col gap-4 text-center rounded-xl">
          <div className="p-[1rem] max-w-[3.5rem] bg-[#F48C064D] rounded-sm mx-auto">
            <FaMoneyCheck className="text-[#F48C06] text-[1.3rem]" />
          </div>
          <h1 className="font-medium text-[1.5rem]">Payment</h1>
          <p className="text-[#00000092]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
        </div>
        <div className="p-[1rem] w-full md:w-[17rem] shadow-sm shadow-[#00000034] flex flex-col gap-4 text-center rounded-xl">
          <div className="p-[1rem] max-w-[3.5rem] bg-[#EE645B4D] rounded-sm mx-auto">
            <FaBook className="text-[#EE645B] text-[1.3rem]" />
          </div>
          <h1 className="font-medium text-[1.5rem]">Photography</h1>
          <p className="text-[#00000092]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
        </div>
        <div className="p-[1rem] w-full md:w-[17rem] shadow-sm shadow-[#00000034] flex flex-col gap-4 text-center rounded-xl">
          <div className="p-[1rem] max-w-[3.5rem] bg-[#2526414D] rounded-sm mx-auto">
            <FaFilm className="text-[#252641] text-[1.3rem]" />
          </div>
          <h1 className="font-medium text-[1.5rem]">Acting</h1>
          <p className="text-[#00000092]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
        </div>
        <div className="p-[1rem] w-full md:w-[17rem] shadow-sm shadow-[#00000034] flex flex-col gap-4 text-center rounded-xl">
          <div className="p-[1rem] max-w-[3.5rem] bg-[#49BBBD4D] rounded-sm mx-auto">
            <FaBriefcase className="text-[#49BBBD] text-[1.3rem]" />
          </div>
          <h1 className="font-medium text-[1.5rem]">Business</h1>
          <p className="text-[#00000092]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
        </div>
      </div>
    </div>
  );
};

export default Choice;
