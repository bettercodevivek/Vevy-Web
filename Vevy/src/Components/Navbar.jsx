const Navbar = () =>{
    return(
    <div className="sticky top-0 bg-white z-10 font-mono">
     <nav className="w-full flex flex-row items-center justify-center  text-xl leading-10 py-4">
        <div className="flex-1 ml-16 flex flex-row items-center gap-4">
            <img className="h-12" src="/website-svgrepo-com.svg"/>
            <h1 className="font-semibold">VEVY WEB SOLUTIONS</h1>
        </div>
        <div className="flex-1 flex flex-row items-center justify-center gap-8">
      <a href="#">Home</a>
      <a href="#">Our Services</a>
      <a href="#">Our Work</a>
      <a href="#">Testimonials</a>
      <a href="#">Contact Us</a>
      </div>
     </nav>
    </div>
    );
}


export default Navbar;