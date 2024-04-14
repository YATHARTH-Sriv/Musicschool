import WhyChooseUs from "@/components/Whychooseus";
import FeaturedCourses from "@/components/featuredcourses";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import Instructors from "@/components/instructor";
import Navbar from "@/components/navbar";
import MusicSchoolTestimonials from "@/components/testimonial";
import UpcomingWebinars from "@/components/upcimingwebinars";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <Instructors />
      <Footer />
    </main>
  );
}
