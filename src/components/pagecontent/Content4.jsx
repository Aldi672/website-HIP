import { FaArrowRight } from "react-icons/fa6";
import gambar1 from "../img/lol.jpg"
import gambar2 from "../img/hh.jpg"
import gambar3 from "../img/customer.jpeg"
import gambar4 from "../img/jabat.png"
import gambar5 from "../img/laut.jpg"


import "../css2/special.css"

import "aos/dist/aos.css";


const Content4 = () => {


  return (
    <div className=" mt-20 ">
      <div className="bar px-6 py-20 xl:px-20 mx-auto">
        <h3 id="logo" className="text-4xl font-bold font-signika mb-5 text-slate-800 sm:text-5xl md:text-5xl text-center">
          Our <span className="text-sky-500">Specialities</span>
        </h3>
        <section className="specialities ">
          <div className="speciality-card">
            <img src={gambar1} />
            <h2 className="font-semibold">EXPERIENCE AND PROFESIONAL</h2>
            <p>We have succeeded in meeting the needs of prioritizing professionalism and product quality.</p>
          </div>

          <div className="speciality-card ">
            <img src={gambar2} />
            <h2 className="font-semibold">EFECTIVITY</h2>
            <p>To continue to expand the company network, we provide high quality products to meet the needs of partners effectively and efficiently.</p>
          </div>

          <div className="speciality-card mt-3">
            <img src={gambar3} />
            <h2 className="font-semibold">CUSTOMER CARE</h2>
            <p>We are ready to carry out continuous communication to eliminate your worries. you can continue to discuss and consult with us even after the products and services completed ave been.</p>
          </div>
          <div className="speciality-card">
            <img src={gambar4} />
            <h2 className="font-semibold">GOOD PRICE</h2>
            <p>You can choose the quality products and services we provide according to your budget and company needs.</p>
          </div>

          <div className="speciality-card ">
            <img src={gambar5} />
            <h2 className="font-semibold">RELIABILITY</h2>
            <p>We always uphold integrity with the principle of trust is an important factor to maintain good relations in order to achieve maximum results and provide the best solutions.</p>
          </div>
        </section>
      </div>




    </div>
  );
};

export default Content4;
