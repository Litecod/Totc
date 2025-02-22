import BlogList from '@/components/Blog/BlogList'
import HeroBlog from '@/components/Blog/HeroBlog'
import Carousel from '@/components/Blog/Carousel'
import Navbar from '@/components/Navbar'
import Marketing from '@/components/Blog/Marketing'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
        <Navbar />
        <HeroBlog />
        <BlogList />
        <Carousel />
        <Marketing />
        <Footer />
    </div>
  )
}

export default page