import LandingPage from "../Components/Landing";
import OurServices from "../Components/Services";
import Testimonials from "../Components/Testimonials";

const Homepage = () =>{
    return(
      <div className="max-w-screen-2xl mx-auto overflow-hidden">
        <LandingPage/>
        <OurServices/>
        <Testimonials/>
      </div>
    );
}


export default Homepage;