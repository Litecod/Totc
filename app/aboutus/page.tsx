import AboutPage from "@/components/AboutUs/AboutPage"
import Carousel from "@/components/Blog/Carousel"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"


const page = () => {
  return (
    <div>
        <Navbar />
        <AboutPage />
        <Carousel />
        <Footer />
    </div>
  )
}

export default page