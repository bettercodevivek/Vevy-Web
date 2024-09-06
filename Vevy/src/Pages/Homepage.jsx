import ContactUs from "../Components/Contact";
import Footer from "../Components/Footer";
import LandingPage from "../Components/Landing";
import OurServices from "../Components/Services";
import TechShowcase from "../Components/TechShowcase";
import TestimonialsPage from "../Components/Testimonials";

const Homepage = () =>{
    return(
      <div className="max-w-screen-2xl mx-auto overflow-hidden">
        <LandingPage/>
        <OurServices/>
        <TechShowcase/>
      <TestimonialsPage/>
        <ContactUs/>
        <Footer/>
      </div>
    );
}


export default Homepage;