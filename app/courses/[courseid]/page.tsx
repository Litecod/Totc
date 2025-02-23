import CourseId from '@/components/Courses/id/CourrseId'
import Education from '@/components/Courses/id/Education'
import Everthing from '@/components/Courses/id/Everthing'
import Marketing from '@/components/Courses/id/Marketing'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const page = () => {

  
  return (
    <div>
        <Navbar />
        <CourseId />
        <Marketing />
        <Everthing />
        <Education />
        <Footer />
    </div>
  )
}

export default page