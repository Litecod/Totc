import CourseId from '@/components/Courses/id/CourrseId'
import Everthing from '@/components/Courses/id/Everthing'
import Marketing from '@/components/Courses/id/Marketing'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Course } from '@/data/item'

const page = () => {

  
  return (
    <div>
        <Navbar />
        <CourseId />
        <Marketing />
        <Everthing />
        <Footer />
    </div>
  )
}

export default page