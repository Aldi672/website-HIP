import { useEffect } from "react";
import Hero from "../assets/img/Group 1.png";

const Herro = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-load");
    elements.forEach((element) => {
      element.classList.remove("translate-y-10", "opacity-0");
      element.classList.add("translate-y-0", "opacity-90");
    });
  }, []);

  return (
    <div id="beranda" className="relative w-full h-screen">
      <div className="w-full h-full">
        <img src={Hero} className="object-cover w-full " alt="Hero Image" />
        <div className="space-y-1 top-10 lg:ml-20 max-w-[90%] md:max-w-[600px] h-full flex flex-col items-start justify-center px-4 md:px-10 lg:gap-6" >
          <p className="absolute w-[90%] md:w-[710px] top-[20%] md:top-[221px] left-[5%] md:left-[51px] [font-family:'Inika'] font-normal text-white text-[6vw] md:text-[4vw] lg:text-[55px] tracking-[0] leading-[normal]" data-aos="zoom-in-down" data-aos-duration="2000">
            Welcome to the website of PT Haekal Inti Pratama
          </p>
          <div className="absolute w-[70%] md:w-60 h-[61px] top-[60%] md:top-[622px] left-[5%] md:left-[51px] bg-[#053858ab] rounded-[50px] mt-10 md:mt-0" data-aos="zoom-in-down" data-aos-duration="2000" data-aos-delay="200">
            <div className="absolute top-3 left-[10%] md:left-[37px] [font-family:'Artifika'] font-normal text-white text-[5vw] md:text-2xl lg:text-3xl tracking-[0] leading-[normal]" data-aos-delay="300">
              Learn More
            </div>
          </div>
          <div className="absolute w-[70%] md:w-[274px] h-[15px] top-[35%] md:top-[400px] left-[5%] md:left-[51px] bg-[#6899c1e0] rounded-[20px]" data-aos="zoom-in-down" data-aos-duration="2000" data-aos-delay="400" />
          <p className="absolute w-[90%] md:w-[418px] top-[40%] md:top-[465px] left-[5%] md:left-[51px] [font-family:'Artifika'] font-normal text-white text-[4vw] md:text-lg lg:text-xl tracking-[0] leading-[normal] " data-aos="zoom-in-down" data-aos-duration="2000" data-aos-delay="600">
            GENERAL CONTRACTOR <br />
            MARINE SERVICES <br />
            SAFETY EQUIPMENT <br />
            MEDICAL SUPPLIER
          </p>
        </div>
      </div>
    </div>
  );
};

export default Herro;
