import { FaArrowRight } from "react-icons/fa6";
import Sehatl from "/src/assets/img/sehatl.png";
import Sehatl2 from "/src/assets/img/sehatl2.png";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import aos from "aos";
import 'aos/dist/aos.css';

const Content5 = () => {
  const [visibleSections, setVisibleSections] = useState(Array(5).fill(false));

  // Content for each section
  const sectionContents = [
    "Lingkungan yang kotor dapat menjadi sarang nyamuk dan berbagai bakteri. Ada beberapa penyakit akibat lingkungan kotor, seperti demam berdarah, hepatitis, diare, tifus.",
    "Keadaan lingkungan sekitar juga memiliki dampak terhadap kesehatan mental. Lingkungan yang kotor ternyata bisa menyebabkan suasana hati jelek dan kesehatan mental pun dapat menurun.",
    "Tinggal di kawasan yang kumuh dan kotor tentu saja tidak akan merasa nyaman untuk berlama-lama. Bahkan, melihat lingkungan yang berantakan saja, kita mungkin sudah malas untuk mengunjunginya.",
    "Lingkungan yang tidak sehat bisa Menyebabkan penyakit pernapasan, penyakit air, gangguan sistem saraf, penyakit jantung, dan masalah kulit.",
    "Lingkungan tidak sehat juga bisa merusak habitat, mengurangi keanekaragaman hayati, dan menyebabkan perubahan iklim serta kerusakan ekosistem laut.",
  ];

  const sectionTitles = [
    "Sumber Penyakit",
    "Mengurangi Kesehatan Mental",
    "Kenyamanan untuk Tinggal Berkurang",
    "Mengancam kesehatan Manusia",
    "Merusak ekosistem",
  ];

  const toggleSection = (index) => {
    const newVisibility = [...visibleSections];
    newVisibility[index] = !newVisibility[index];
    setVisibleSections(newVisibility);
  };

  aos.init({
    once: true
  })

  return (
    <div className="mt-20 ">
      <div className="relative container px-6 py-20 md:py-40 font-inter max-w-md sm:max-w-xl md:max-w-5xl lg:max-w-full xl:px-64 mx-auto">
        <h3 className="text-4xl font-bold font-signika mb-5 text-slate-800 sm:text-5xl md:text-5xl text-center">
          Sehat <span className="text-sky-500">Lingkungan</span>
        </h3>

      </div>

      <div className="p-6 lg:py-56 py-20 w-full -my-2 flex justify-center backdrop-blur-sm">
        <div className="absolute right-0 left-0 top-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              d="M0,96L80,85.3C160,75,320,53,480,48C640,43,800,53,960,74.7C1120,96,1280,128,1360,144L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              d="M0,256L80,250.7C160,245,320,235,480,234.7C640,235,800,245,960,256C1120,267,1280,277,1360,282.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
        {/* Kontainer untuk kedua halaman */}
        <div
          id="pembahasan"
          className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 z-50"
        >
          {/* page1 */}
          <div data-aos="fade-up-right" className="p-10 w-full  ">
            <h2 className=" text-2xl font-semibold mb-3  text-slate-800 sm:text-3xl font-signika sm:mt-8 lg:mt-0">
              Ciri-Ciri <span className="text-sky-500">lingkungan</span> yang sehat
            </h2>
            <div>
              <ul className="max-w-[500px] space-y-2 font-roboto text-[15px] md:text-xl list-decimal">
                <li>Lingkungan Terlihat Rapi dan Bersih</li>
                <li>Pengelolaan Limbah Dilakukan dengan Baik</li>
                <li>Terdapat Fasilitas Pengelolaan Sampah</li>
                <li>Banyak Tanaman Hijau di Lingkungan Sekitar</li>
                <li>Tempat Pembuangan Sampah Dapat Ditemukan dengan Mudah</li>
              </ul>
            </div>
          </div>

          {/* page2 */}
          <div data-aos="fade-up-left" className="p-4">
            <h2 className="mt-6 text-2xl mb-5 font-semibold text-slate-800 sm:text-3xl font-signika sm:mt-8 lg:mt-0">
              Tips <span className="text-sky-500">lingkungan</span> terhindar dari penyakit
            </h2>
            <div className="h-96 overflow-y-auto ">
              {[
                {
                  title: "Kelola Sampah dengan Baik",
                  items: [
                    "membuat tempat sampah sesuai jenisnya, sampah organic dan anorganik",
                    "manfaatkan sampah organic menjadi pupuk kompos",
                  ],
                },
                {
                  title: "Jaga Kebersihan Air",
                  items: [
                    "Sumber mata air harus dilindungi dari bahan pencemar",
                    "Pisahkan jarak antara sumber air dengan jamban dan tempat pembuangan sampah minimal 10 meter",
                  ],
                },
                {
                  title: "Ventilasi yang baik",
                  items: [
                    "Membersihkan udara dari bahan-bahan kimia",
                    "Mengurangi kelembaban udara di rumah",
                  ],
                },
              ].map((section, index) => (
                <div key={index} className="inline-block mb-1">
                  <div className="flex py-5 gap-2 px-5 rounded-lg border">
                    <div className="w-2 min-w-[5px] rounded-md bg-sky-500"></div>
                    <div>
                      <h1 className="font-medium font-signika">
                        {section.title}
                      </h1>
                      <ul className="list-disc pl-5 space-y-1">
                        {section.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="p-6 -mt-8">
          <div className="absolute right-0 left-0 w-full -z-50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#0099ff"
                d="M0,160L80,149.3C160,139,320,117,480,90.7C640,64,800,32,960,37.3C1120,43,1280,85,1360,106.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
              ></path>
            </svg>
          </div>
          <h1 className="md:text-center mt-20 md:mt-40 text-start mb-10 font-signika text-2xl md:text-3xl lg:text-4xl">
            Dampak apabila tidak menjaga
            <span className="text-sky-500"> lingkungan</span>
          </h1>

          <div className="flex flex-col xl:px-72 w-full lg:flex-row-reverse items-center justify-evenly">
            <img
              src={Sehatl2}
              alt="image"
              data-aos="zoom-out-left"
              className="md:w-[50%] w-full h-auto"
            />

            <div data-aos="zoom-out-right" className="w-full">
              {sectionContents.map((content, index) => (
                <div
                  key={index}
                  className=" border py-3 px-5 w-full max-w-[500px] mx-auto lg:mx-0 shadow-lg rounded-md mt-4"
                >
                  <div className="flex lg:text-xl items-center gap-2 font-signika justify-between">
                    {sectionTitles[index]}
                    <button onClick={() => toggleSection(index)}>
                      {visibleSections[index] ? (
                        <FiMinus size={20} />
                      ) : (
                        <MdAdd size={20} />
                      )}
                    </button>
                  </div>
                  <div
                    className={`${visibleSections[index] ? "block" : "hidden"
                      } `}
                  >
                    <p className="text-start mt-5 font-roboto">{content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content5;
