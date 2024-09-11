import { FaGithub, FaInstagram } from "react-icons/fa6";
// import Aldi from "../assets/tim/aldi.png";
// import Niki from "../assets/tim/niki.png";
// import Irfan from "../assets/tim/irfan.png";
// import Evan from "../assets/tim/evan.png";
// import Lintang from "../assets/tim/lintang.png";

const MyTeam = () => {
  return (
    <section id="timkami" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-signika text-5xl text-center font-bold text-gray-900">
            Tim Kami
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-5xl mx-auto">
          {/* Member 1 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6 transition-transform transform hover:-translate-y-2 hover:scale-105">
              <img alt="Aldi Kurniawan"
                className="w-40 h-40 rounded-full object-cover border border-transparent hover:border-indigo-600 shadow-lg"
              />
            </div>
            <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-300 hover:text-indigo-600">
              Aldi Kurniawan
            </h4>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/Aldi672" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-all duration-300">
                <FaGithub size={30} />
              </a>
              <a href="https://www.instagram.com/alta.break/?igsh=ZGUzMzM3NWJiOQ%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-all duration-300">
                <FaInstagram size={30} />
              </a>
            </div>
            <span className="text-gray-500 text-center block mt-4 transition-all duration-300 hover:text-gray-900">
              Design
            </span>
          </div>

          {/* Member 2 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6 transition-transform transform hover:-translate-y-2 hover:scale-105">
              <img alt="Niki Ahmad Hamdani"
                className="w-40 h-40 rounded-full object-cover border border-transparent hover:border-indigo-600 shadow-lg"
              />
            </div>
            <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-300 hover:text-indigo-600">
              Niki Ahmad Hamdani
            </h4>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/Fishniki/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-all duration-300">
                <FaGithub size={30} />
              </a>
              <a href="https://www.instagram.com/fishniki_/?igsh=MWdrY2t3YWM3bmJiOA%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-all duration-300">
                <FaInstagram size={30} />
              </a>
            </div>
            <span className="text-gray-500 text-center block mt-4 transition-all duration-300 hover:text-gray-900">
              Programmer
            </span>
          </div>

          {/* Member 3 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6 transition-transform transform hover:-translate-y-2 hover:scale-105">
              <img
                alt="Muhammad Irfan M."
                className="w-40 h-40 rounded-full object-cover border border-transparent hover:border-indigo-600 shadow-lg"
              />
            </div>
            <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-300 hover:text-indigo-600">
              Muhammad Irfan Maulana
            </h4>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/muhammad-irfan" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-all duration-300">
                <FaGithub size={30} />
              </a>
              <a href="https://www.instagram.com/_ifnnmll/?igsh=MTRvZzI3ZTdhajZ3aQ%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-all duration-300">
                <FaInstagram size={30} />
              </a>
            </div>
            <span className="text-gray-500 text-center block mt-4 transition-all duration-300 hover:text-gray-900">
              Programmer
            </span>
          </div>

          {/* Member 4 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6 transition-transform transform hover:-translate-y-2 hover:scale-105">
              <img alt="Evan Destian Saputra"
                className="w-40 h-40 rounded-full object-cover border border-transparent hover:border-indigo-600 shadow-lg"
              />
            </div>
            <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-300 hover:text-indigo-600">
              Evan Destian Saputra
            </h4>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/vaneedestian" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-all duration-300">
                <FaGithub size={30} />
              </a>
              <a href="https://www.instagram.com/epandstian/?igsh=MTI3NGExa3kzM2o0YQ%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-all duration-300">
                <FaInstagram size={30} />
              </a>
            </div>
            <span className="text-gray-500 text-center block mt-4 transition-all duration-300 hover:text-gray-900">
              Searcher
            </span>
          </div>

          {/* Member 5 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6 transition-transform transform hover:-translate-y-2 hover:scale-105">
              <img

                alt="Muhammad Lintang A."
                className="w-40 h-40 rounded-full object-cover border border-transparent hover:border-indigo-600 shadow-lg"
              />
            </div>
            <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-300 hover:text-indigo-600">
              Muhammad Lintang Andiyan
            </h4>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/lintang34" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-all duration-300">
                <FaGithub size={30} />
              </a>
              <a href="https://www.instagram.com/muh.lintang21/?igsh=dm51NjFmNnZxbnpu" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-all duration-300">
                <FaInstagram size={30} />
              </a>
            </div>
            <span className="text-gray-500 text-center block mt-4 transition-all duration-300 hover:text-gray-900">
              Design
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyTeam;
