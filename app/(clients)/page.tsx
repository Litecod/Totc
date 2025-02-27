import CloudSoftware from "@/components/CloudSoftware";
import CountUp from "@/components/CountUp";
import Explore from "@/components/Explore";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LatestNews from "@/components/LatestNews";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";
import Toct from "@/components/Toct";

export default function Home() {
  return (
    <div className="max-w-[1550px] xl:mx-auto">
      <Navbar />
      <Hero />
      <CountUp />
      <CloudSoftware />
      <Toct />
      <Features />
      <Explore />
      <Testimonial />
      <LatestNews />
      <Footer />
    </div>
  );
}

//bg-[url(@/images/header-bg.png)]
