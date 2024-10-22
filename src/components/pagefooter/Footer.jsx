import { FaInstagram, } from "react-icons/fa";
import Logo from "../img/WhatsApp_Image_2024-09-02_at_14.52.52-removebg.png";

const Footer = () => {
  return (
    <footer className="bg-sky-800 text-white py-12 mt-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Section 1: About SaveLife */}
          <div className="lg:w-1/3">
            <div className="flex items-center mb-5">
              <img className="w-10 h-auto" src={Logo} alt="" />

            </div>
            <p className="text-sm font-roboto">
              GENERAL CONTRACTOR
              MARINE SERVICES
              SAFETY EQUIPMENT
            </p>
            <div className="mt-6 flex flex-col ">
              <p className="font-semibold font-signika">Hubungi kami</p>
              <div className="flex items-center space-x-3 mt-2">
                <FaInstagram />
                <a href="https://www.instagram.com/savelife_46/?igsh=aDd1dnQ4MTkxaHMx" className="text-white  hover:text-sky-300">
                  savelife_46
                </a>
              </div>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Konten</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#beranda" className="text-white hover:text-sky-300">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#temasehat" className="text-white hover:text-sky-300">
                    Tema Sehat
                  </a>
                </li>
                <li>
                  <a href="#conkas" className="text-white hover:text-sky-300">
                    Kasus
                  </a>
                </li>
                <li>
                  <a href="#tentangkami" className="text-white hover:text-sky-300">
                    Tentang kami
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Sumbar informasi</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://ditpsd.kemdikbud.go.id/kss/sehat-fisik/" className="text-white hover:text-sky-300">
                    kemdikbut.go.id
                  </a>
                </li>
                <li>
                  <a href="https://p2ptm.kemkes.go.id/infographic-p2ptm/hipertensi-penyakit-jantung-dan-pembuluh-darah/apa-yang-dimaksud-sehat-dan-bugar" className="text-white hover:text-sky-300">
                    kemkes.go.id
                  </a>
                </li>
                <li>
                  <a href="https://www.unicef.org/indonesia/id/siaran-pers/indonesia-angka-orang-yang-kelebihan-berat-badan-dan-obesitas-naik-di-semua-kelompok">
                    unicef.org
                  </a>
                </li>
                <li>
                  <a href="https://unair.ac.id/penyakit-jantung-koroner-pada-kelompok-usia-produktif-di-indonesia/">
                    unair.ac.id
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">kredit</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://id.pinterest.com/" className="text-white hover:text-sky-300">
                    Pinterest
                  </a>
                </li>
                <li>
                  <a href="https://www.canva.com/" className="text-white hover:text-sky-300">
                    Canva
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-sky-700 pt-6 text-center">
          <p className="text-sm font-roboto">
            © {new Date().getFullYear()} SaveLife. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
