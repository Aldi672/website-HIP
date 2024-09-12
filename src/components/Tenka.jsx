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

        className="flex-grow text-black p-10 flex  justify-center items-center"
        style={{ backgroundImage: `url(${Logo})` }}
      >
        {/* Kolom Kiri */}
        <div
          id="image"
          className="w-1/2 pr-[10rem]">
          <img
            src={TenkaImage}
            alt="Tenka"
            className="animate-floating" // Bisa tetap menggunakan animasi floating
            data-aos="fade-up" // Animasi dari AOS untuk elemen gambar
          />
        </div>

        {/* Kolom Kanan */}
        <div id="body" className="w-[50%] mt-[1000px]" data-aos="fade-right"> {/* Animasi ketika masuk dari kanan */}
          <h1 id="intro" className="text-5xl font-bold mb-[1rem]">INTRODUCTION</h1>
          <div id="bar" className="w-56 h-1 bg-yellow-500 mb-[1rem]"></div>
          <p className="mb-4">
            To continue provide quality services, PT. Haekal Inti Pratama will continue to maintain the company's principles by carrying out <br id="1" />effective control and management in every product and services we offer. PT. Haekal Inti Pratama as a leading General Contractor, <br id="1" /> Safety Equipment, and Medical Supplier (Hyperbaric Chamber & Marine Services) we always provides the best services and products to meet partner needs. We offer integrity, <br id="1" />skill and flexibility through the best combination of budget and speed. To prove our competitiveness, <br id="1" /> we continuously improve our service and selection of quality product. To all partners and clients, we are committed to maintaining the <br id="1" /> satisfaction of PT. Haekal Inti Pratama partners.
            This company <br id="1" />profile was created as a basis for <br id="1" />consideration, offers, cooperation, and product information <br id="1" /> from our company. Finally, we thank you for <br id="1" />y the opportunity to receive and <br id="1" />read this company profile and we hope for your cooperation.
            <br /><br />
            <div id="br" className="text-white font-semibold">CEO PT. Haekal Inti Pratama</div>
            <div id="br" className="text-white font-medium">Mohammad Fadillah</div>

          </p>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded" data-aos="zoom-in">
            READ MORE
          </button>
        </div>
      </main>
    </div>
  );
};

export default Tenka;
