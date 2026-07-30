import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Divider from "./components/Divider";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Videos from "./components/Videos";
import Clients from "./components/Clients";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";

export default function Home() {
  return (
    <>
      <Loader />

      <Navbar />

      <Cursor />

      <main>

        <Hero />

        <Stats />

        <Divider />

        <WhyUs />

        <Divider />

        <Services />

        <Divider />

        <Portfolio />

        <Divider />

        <Videos />

        <Divider />

        <Clients />

        <Divider />

        <About />

        <Divider />

        <Testimonials />

        <CTA />

        <FAQ />

        <Contact />

      </main>

      <Footer />

      <Whatsapp />

    </>
  );
}