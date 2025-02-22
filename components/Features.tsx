import Image from "next/image";
import features from "@/images/feature1.png";
import feature from "@/images/feature2.png";
import feature3 from "@/images/feature3.png";
import feature4 from "@/images/feature4.png";
import feature5 from "@/images/feature5.png";
import user from "@/images/user.png";
import user1 from "@/images/user2.png";
import user2 from "@/images/users3.png";

const Features = () => {
  return (
    <div className="px-[0.8rem] sm:px-[3rem] lg:px-[5rem] mt-[5rem] md:mt-[10rem] ">
      <div className="text-center flex flex-col gap-[-0.8rem] md:gap-[1rem] ">
        <h1 className="text-[1.5rem] md:text-[1.7rem] font-medium text-[#2F327D]">
          Our <span className="text-[#00CBB8]">Features</span>
        </h1>
        <h5 className="md:w-[70%] lg:w-[62%] mx-auto text-[0.7rem] md:text-[1rem] text-[#696984]">
          This very extraordinary feature, can make learning activities more
          efficient
        </h5>
      </div>
      <div className="mt-[5rem] flex flex-col md:flex-row justify-between max-w-[70rem] mx-auto">
        <div className="w-full md:w-[50%] ">
          <Image src={features} alt="An Instructor" className="w-[100%]" />
        </div>
        <div className="relative w-full md:w-[50%] mt-[3rem] md:mt-0 lg:mt-[1.5rem] xl:mt-[3.5rem] md:max-w-[25rem] ">
          <h1 className="text-[1.5rem] md:text-[1.2rem] lg:text-[1.7rem] font-medium text-[#2F327D] text-center md:text-left">
            A <span className="text-[#00CBB8]">user interface</span> designed
            for the classroom
          </h1>
          <div className="flex flex-col gap-[2rem] mt-[2.5rem] max-w-[25rem] md:max-w-auto mx-auto md:mx-0">
            <div className="flex gap-4 items-center">
              <div className="shadow-sm shadow-[#00000050] rounded-full py-[0.7rem] px-[0.7rem] ">
                <Image src={user} alt="User" className="w-[1.8rem] " />
              </div>
              <p className="text-[#696984] md:text-[0.8rem] lg:text-[1rem]">
                Teachers don't get lost in the grid view and have a dedicated
                Podium space.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="shadow-sm shadow-[#00000050] rounded-full py-[0.7rem] px-[0.7rem] ">
                <Image src={user1} alt="User" className="w-[1.8rem] " />
              </div>
              <p className="text-[#696984] md:text-[0.8rem] lg:text-[1rem]">
                TA's and presenters can be moved to the front of the class.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="shadow-sm shadow-[#00000050] rounded-full py-[0.7rem] px-[0.7rem] ">
                <Image src={user2} alt="User" className="w-[1.8rem] " />
              </div>
              <p className="text-[#696984] md:text-[0.8rem] lg:text-[1rem]">
                Teachers can easily see all students and class data at one time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-[5rem] flex flex-col md:flex-row justify-between items-center text-center md:text-left max-w-[75rem] mx-auto">
        <div className="w-full md:w-[50%] max-w-[30rem] flex flex-col gap-4 mt-[rem] relative">
          <h1 className="text-[1.5rem] md:text-[1.2rem] lg:text-[1.7rem] font-medium text-[#00CBB8] md:max-w-[20rem]">
            Tools
            <span className="text-[#2F327D]">For Teachers And Learners</span>
          </h1>
          <h5 className="text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] text-[#696984] md:max-w-[28rem]">
            TOTC's school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system.
          </h5>
        </div>
        <div className="relative w-full md:w-[50%] max-w-[35rem] mt-5 md:mt-0 z-10">
          <Image src={feature} alt="An Instructor" className="w-[100%]" />
        </div>
      </div>
      <div className="relative mt-[5rem] flex flex-col md:flex-row justify-between items-center text-center md:text-left max-w-[75rem] mx-auto">
        <div className="relative w-full md:w-[50%] max-w-[35rem] mt-5 md:mt-0 z-10 hidden md:block">
          <Image src={feature3} alt="An Instructor" className="w-[100%]" />
        </div>
        <div className="w-full md:w-[50%] max-w-[30rem] flex flex-col gap-4 mt-[rem] relative">
          <h1 className="text-[1.5rem] md:text-[1.2rem] lg:text-[1.7rem] font-medium  text-[#2F327D] md:max-w-[15rem]">
            Assessments, <span className="text-[#00CBB8] ">Quizzes,</span> Tests
          </h1>
          <h5 className="text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] text-[#696984] md:max-w-[28rem]">
            Easily launch live assignments, quizzes, and tests. Student results
            are automatically entered in the online gradebook.
          </h5>
        </div>
        <div className="relative w-full md:w-[50%] max-w-[35rem] mt-5 md:mt-0 z-10 md:hidden">
          <Image src={feature3} alt="An Instructor" className="w-[100%]" />
        </div>
      </div>
      <div className="relative mt-[5rem] flex flex-col md:flex-row justify-between items-center text-center md:text-left max-w-[75rem] mx-auto">
        <div className="w-full md:w-[50%] max-w-[30rem] flex flex-col gap-4 mt-[rem] relative">
          <h1 className="text-[1.5rem] md:text-[1.2rem] lg:text-[1.7rem] font-medium text-[#00CBB8] md:max-w-[17rem]">
            Class Management
            <span className="text-[#2F327D]"> Tools for Educators</span>
          </h1>
          <h5 className="text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] text-[#696984] md:max-w-[28rem]">
            Class provides tools to help run and manage the class such as Class
            Roster, Attendance, and more. With the Gradebook, teachers can
            review and grade tests and quizzes in real-time.
          </h5>
        </div>
        <div className="relative w-full md:w-[50%] max-w-[35rem] mt-5 md:mt-0 z-10">
          <Image src={feature4} alt="An Instructor" className="w-[100%]" />
        </div>
      </div>
      <div className="relative mt-[5rem] flex flex-col md:flex-row justify-between items-center text-center md:text-left md:max-w-[75rem] mx-auto">
        <div className="relative w-full md:w-[50%] max-w-[35rem] mt-5 md:mt-0 z-10 hidden md:block ">
          <Image src={feature5} alt="An Instructor" className="w-[100%]" />
        </div>
        <div className="w-full md:w-[50%] max-w-[30rem] flex flex-col gap-4 mt-[rem] relative">
          <h1 className="text-[1.5rem] md:text-[1.2rem] lg:text-[1.7rem] font-medium text-[#2F327D]  md:max-w-[20rem]">
            One-on-One
            <span className="text-[#00CBB8]"> Discussions</span>
          </h1>
          <h5 className="text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] text-[#696984] md:max-w-[28rem]">
            Teachers and teacher assistants can talk with students privately
            without leaving the Zoom environment.
          </h5>
        </div>
        <div className="relative w-full md:w-[50%] max-w-[35rem] mt-5 md:mt-0 z-10 block md:hidden">
          <Image src={feature5} alt="An Instructor" className="w-[100%]" />
        </div>
      </div>
      <p className="px-[1rem] py-[0.8rem] rounded-[20rem] max-w-[13rem] text-center text-[#49BBBD] border-[2px] border-[#49BBBD] duration-150 hover:border-[transparent] hover:text-[#ffff] hover:bg-[#49BBBD] mx-auto mt-[1rem] md:mt-[3rem]">
        Start a class today
      </p>
    </div>
  );
};

export default Features;
