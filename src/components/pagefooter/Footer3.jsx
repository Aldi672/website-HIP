import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import mail from "../img/email.png"
import Logo from "../img/WhatsApp_Image_2024-09-02_at_14.52.52-removebg.png"


const Footer3 = () => {
  return (
    <footer className="bg-sky-300 text-white py-12 mt-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Section 1: About SaveLife */}
          <div className="lg:w-1/3">
            <div className="flex items-center mb-5">
              <img className="w-52 h-auto" src={Logo} alt="" />

            </div>
            <p className="text-sm font-roboto">
              PT. Haekal Inti Pratama will continue to maintain the companys principles by carrying out effective control and management in every product and services we offer..
            </p>
            <div className="mt-6 flex flex-col">
              <p className="font-semibold font-signika">Contact us</p>
              <div className="flex items-center space-x-3 mt-2">
                <FaInstagram />
                <a href="https://www.instagram.com/haekal_inti_pratama?igsh=MTl3ODJ0OW9oank4cQ==" className="text-white  hover:text-sky-300">
                  haekal_inti_pratama
                </a>

              </div>
              <div className="flex items-center space-x-3 mt-2">
                <FaEnvelope />
                <a href="https://www.instagram.com/haekal_inti_pratama?igsh=MTl3ODJ0OW9oank4cQ==" className="text-white  hover:text-sky-300">
                  haekal_inti_pratama
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

                    Home page
                  </a>
                </li>
                <li>
                  <a href="#tentangkami" className="text-white hover:text-sky-300">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#frame" className="text-white hover:text-sky-300">
                    Company
                  </a>
                </li>
                <li>
                  <a href="#fotofolio" className="text-white hover:text-sky-300">
                    Portofolio
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
                  <a href="https://www.figma.com/" className="text-white hover:text-sky-300">
                    Figma
                  </a>
                </li>
                <li>
                  <a href="https://www.bing.com/images/create" className="text-white hover:text-sky-300">
                    Bing Image
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-sky-700 pt-6 text-center">
          <p className="text-sm font-roboto">
            © {new Date().getFullYear()} PT.haekal_inti_pratama
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;
