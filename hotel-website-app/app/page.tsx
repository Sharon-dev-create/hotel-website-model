import { Navbar }        from "@/components/ui/Navbar";
import { Hero }          from "@/components/sections/Hero";
import { About }         from "@/components/sections/About";
import { Rooms }         from "@/components/sections/Rooms";
import { Amenities }     from "@/components/sections/Amenities";
import { Testimonials }  from "@/components/sections/Testimonials";
import { Booking }       from "@/components/sections/Booking";
import { Contact }       from "@/components/sections/Contact";
import { CTA }           from "@/components/sections/CTA";
import { Footer }        from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Testimonials />
      <CTA />
      <Booking />
      <Contact />
      <Footer />
    </>
  );
}