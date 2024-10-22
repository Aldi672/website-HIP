import { useEffect } from "react";
import aos from "aos";
import "../css/noba.css"
import "aos/dist/aos.css"; // Import stylesheet AOS
import Logo from "../assets/img/image.jpg";
import TenkaImage from "../assets/img/WhatsApp Image 2024-09-05 at 09.35.51 1 (2).png";

const Tenka = () => {
  useEffect(() => {
    aos.init({
      once: true, // Animasi hanya berjalan sekali
      duration: 1000, // Durasi animasi
    });
  }, []);

  return (
    <div id="tentangkami" className="w-full flex items-center justify-center bg-cover bg-center">
      <main

        className="p-14 flex  justify-center items-center"

      >
        {/* Kolom Kiri */}
        <div
          id="image"
          className="w-1/2 pr-[10rem]">
          <img
            id="tan"
            src={TenkaImage}
            alt="Tenka"
            className="animate-floating" // Bisa tetap menggunakan animasi floating
            data-aos="fade-up" // Animasi dari AOS untuk elemen gambar
          />
        </div>

        {/* Kolom Kanan */}
        <div id="body" className="" data-aos="fade-right"> {/* Animasi ketika masuk dari kanan */}
          <h1 id="intro" className="text-5xl font-bold mb-[1rem] mt-8" >INTRODUCTION</h1>
          <p id="bar" className="h-1 bg-yellow-500 mb-[1rem] mr-12"></p>
          <p className="geblek mb-4 text-white">
            To continue provide quality services, PT. Haekal Inti Pratama will continue to maintain the companys principles by carrying out effective control and management in every product and services we offer. PT. Haekal Inti Pratama as a leading General Contractor,  Safety Equipment. We offer integrity, skill and flexibility through the best combination of budget and speed. To prove our competitiveness,  we continuously improve our service and selection of quality product. To all partners and clients, we are committed to maintaining the  satisfaction of PT. Haekal Inti Pratama partners.
            This company profile was created as a basis for consideration, offers, cooperation, and product information  from our company. Finally, we thank you for the opportunity to receive and read this company profile and we hope for your cooperation.
            <br /><br />
            <div id="br" className="text-black font-semibold">CEO PT. Haekal Inti Pratama</div>
            <div id="br" className="text-black font-medium">Mohammad Fadillah</div>

          </p>

        </div>
      </main>
    </div >
  );
};

export default Tenka;
