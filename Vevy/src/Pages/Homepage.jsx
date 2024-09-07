import ContactUs from "../Components/Contact";
import Footer from "../Components/Footer";
import LandingPage from "../Components/Landing";
import OurServices from "../Components/Services";
import TechShowcase from "../Components/TechShowcase";
import TestimonialsPage from "../Components/Testimonials";
import { FaPhoneAlt,FaWhatsapp } from "react-icons/fa";

const Homepage = () =>{
  const handleCallClick = () => {
    window.location.href = 'tel:+918979145539'; // Replace with your phone number
  };

  const handleWhatsappClick = () => {
    window.open('https://wa.me/+918979145539', '_blank'); // Replace with your WhatsApp number
  };
    return(
      <div className="max-w-screen-2xl mx-auto overflow-hidden">
        <LandingPage/>
        {/* Fixed Icons */}
      <div className="fixed bottom-4 right-4 flex flex-col-reverse gap-4 z-50">
        <button
          onClick={handleCallClick}
          className="bg-black p-4 rounded-full text-white shadow-lg hover:bg-green-500 transition-colors duration-300"
        >
          <FaPhoneAlt className="text-2xl" />
        </button>
        <button
          onClick={handleWhatsappClick}
          className="bg-green-500 p-4 rounded-full text-white shadow-lg hover:bg-green-700 transition-colors duration-300"
        >
          <FaWhatsapp className="text-2xl" />
        </button>
      </div>
        <OurServices/>
        <TechShowcase/>
      <TestimonialsPage/>
        <ContactUs/>
        <Footer/>
      </div>
    );
}


export default Homepage;