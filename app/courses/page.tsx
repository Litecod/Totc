import Choice from '@/components/Courses/Choice'
import CoursesHero from '@/components/Courses/CoursesHero'
import Get from '@/components/Courses/Get'
import Learning from '@/components/Courses/Learning'
import Recommended from '@/components/Courses/Recommended'
import Student from '@/components/Courses/Student'
import TheCourse from '@/components/Courses/TheCourse'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const page = () => {
  return (
    <div>
        <Navbar />
        <CoursesHero />
        <Choice />
        <Recommended />
        <Get />
        <Learning />
        <TheCourse />
        <Student />
        <Footer />
    </div>
  )
}

export default page