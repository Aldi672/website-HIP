import { FaLongArrowAltRight } from "react-icons/fa";
import Hero from "../assets/hero2.png";

const Herro = () => {
  return (
    <div className="relative w-full h-screen "> {/* Adjust mt-20 based on navbar height */}
      <div className="w-full h-screen">
        <img src={Hero} className="object-cover w-full h-screen" alt="Hero Image" />
        <div className="absolute space-y-2 top-0 left-0 max-w-[600px] h-screen flex flex-col items-start justify-center px-10">
          <p className="text-xl font-bold text-orange-500">HINDARI PENYAKIT MENULAR HIV & AIDS</p>
          <h1 className="text-slate-700 text-4xl font-bold ">
            Mencegah lebih baik dari mengobati
          </h1>
          <button className="px-3 py-2 flex items-center gap-4 bg-red-300 rounded-lg">Pelajari Selengkapnya <FaLongArrowAltRight size={20} /></button>
        </div>
      </div>
    </div>
  );
};

export default Herro;
