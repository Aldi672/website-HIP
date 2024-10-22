import { useEffect } from "react";
import Hero from "../assets/img/Group 1.png";
import "../css/barr.css"

const Herro = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-load");
    elements.forEach((element) => {
      element.classList.remove("translate-y-10", "opacity-0");
      element.classList.add("translate-y-0", "opacity-90");
    });
  }, []);

  return (
    <div id="beranda">
      <div >
        <img src={Hero} alt="Hero Image" className="image" />
        <div className="content">
          <p className="text" data-aos="zoom-in-down" data-aos-duration="2000">
            Welcome to the website of PT Haekal Inti Pratama
          </p>



          <div className="progress-bar" data-aos="zoom-in-down" data-aos-duration="2000" data-aos-delay="400"></div>

          <p className="description [font-family:'Artifika']" data-aos="zoom-in-down" data-aos-duration="2000" data-aos-delay="600">
            GENERAL CONTRACTOR <br />
            MARINE SERVICES <br />
            SAFETY EQUIPMENT <br />

          </p>
          <div className="learn-more-container" data-aos="zoom-in-down" data-aos-duration="2000" data-aos-delay="200" >
            <button className="learn-more-text  font-normal tracking-[0] leading-[normal]" data-aos-delay="300">
              <a href="#lusin" className="[font-family:'Artifika']">Learn More</a>

            </button>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Herro;
