import { Navbar }       from "@/components/ui/Navbar";
import { Hero }         from "@/components/sections/Hero";
import { About }        from "@/components/sections/About";
import { Rooms }        from "@/components/sections/Rooms";
import { Amenities }    from "@/components/sections/Amenities";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA }          from "@/components/sections/CTA";
import { Booking }      from "@/components/sections/Booking";
import { Contact }      from "@/components/sections/Contact";
import { Footer }       from "@/components/sections/Footer";
import { Gallery }      from "@/components/sections/Gallery";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Gallery />
      <Amenities />
      <Testimonials />
      <CTA />
      <Booking />
      <Contact />
      <Footer />
    </>
  );
}