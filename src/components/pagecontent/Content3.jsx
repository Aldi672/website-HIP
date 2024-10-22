import { FaArrowRight } from "react-icons/fa6";
import Food from "/src/assets/img/sehatj2.png";
import sehatj3 from "/src/assets/img/sehatj3.png";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import aos from "aos";
import 'aos/dist/aos.css';

const Content3 = () => {
  const [visibleSections, setVisibleSections] = useState(Array(5).fill(false));

  // Content3 for each section
  const sectionContents = [
    "penyebab stres secara umum adalah situasi tegang di rumah, seperti adanya kekerasan di dalam rumah tangga, perpisahan orang tua, atau kematian orang terdekat. Situasi sekolah juga menjadi penyebab—misalnya, harus berkenalan dengan teman baru atau melalui suatu ujian bisa membuat anak merasa takut  .",
    "Pada nyeri kepala, kehilangan kesadaran dalam beberapa waktu, telinga berdenging, lebih sensitif pada cahaya, pandangan kabur, hingga koma. Cedera kepala merupakan adanya benturan dari luar yang dapat mengakibatkan gangguan fungsi otak, penurunan kemampuan belajar, dan gangguan perkembangan otak.",
    "Stres dan cemas Berkurangnya kemampuan untuk mengingat dan berkonsentrasi. Sulit menghindari pikiran mengganggu yang berkaitan dengan kejadian traumatis. Terus-menerus teringat kejadian traumatis tersebut tanpa bisa dikendalikan. Merasa hilang arah dan disorientasi.",
    "karena kehilangan kontak sosial sosial dan penghasilan. Efek berbahayanya, terutama dalam jangka panjang, adalah bisa sampai pada kematian karena bunuh diri, terutama bagi mereka yang tidak mendapatkan dukungan sosial.",
  ];

  const sectionTitles = [
    "Stres berat dalam jangka waktu yang lama",
    "Cedera pada kepala",
    "Memiliki Trauma berat",
    "Kehilangan pekerjaan",
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
          Sehat <span className="text-sky-500">Jiwa</span>
        </h3>
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10">
          <div data-aos="fade-right" className="lg:w-1/2 h-full justify-center flex">
            <img src={Food} alt="Sehat Fisik" className="w-72 lg:w-96" />
          </div>
          <div data-aos="fade-left" className="lg:w-1/2 max-w-full xl:max-w-full text-start lg:text-left">
            <h2 className="mt-6 text-2xl font-semibold text-slate-800 sm:text-3xl font-signika">
              Mengapa kita harus memiliki <span className="text-sky-500">Jiwa</span>
              yang sehat
            </h2>
            <p className="mt-2 text-slate-600 sm:text-xl">
              Karena jiwa merupakan bagian integral dari kesehatan bila jiwa kurang sehat, maka kualitas hidup akan berkurang. Kesehatan ini merupakan sesuatu
              yang dibutuhkan oleh semua orang, yaitu perasaan sehat, bahagia, dan semangat mengatasi tantangan hidup.
              keluarga dan orang lain. Oleh karena itu deteksi sedini mungkin lebih penting daripada mengobati.
            </p>
            <div className="mt-4 sm:mt-6 group flex justify-center lg:justify-start">
              <a
                href="#pembahasan"
                className="inline-flex items-center px-5 py-3 bg-sky-500 text-white rounded-md shadow-lg uppercase font-semibold tracking-wider text-sm sm:text-base transition-all duration-300 hover:bg-sky-600"
              >
                Lanjut
                <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
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
              Ciri-ciri ganguan kesehatan <span className="text-sky-500">jiwa</span>
            </h2>
            <div>
              <ul className="max-w-[500px] space-y-2 font-roboto text-[15px] md:text-xl list-decimal">
                <li>
                  Merasa sedih sepanjang waktu.
                </li>
                <li>Bingung atau tidak mampu berkonsentrasi.</li>
                <li>Mampu memenuhi tuntutan hidup</li>
                <li>Ketakutan, kekhawatiran yang berlebihan, atau perasaan bersalah yang ekstrem</li>
                <li>Menarik diri untuk berhubungan dengan teman atau melakukan aktivitas.</li>
              </ul>
            </div>
          </div>

          {/* page2 */}
          <div data-aos="fade-up-left" className="p-4">
            <h2 className="mt-6 text-2xl mb-5 font-semibold text-slate-800 sm:text-3xl font-signika sm:mt-8 lg:mt-0">
              Tips mencapai <span className="text-sky-500">Jiwa</span> yang sehat
            </h2>
            <div className="h-96 overflow-y-auto ">
              {[
                {
                  title: "Connect",
                  items: [
                    "Hidup terasa lebih berwarna ketika kita berinteraksi dengan lingkungan sekitar. Saling menyapa, berbagi cerita, berbagi rasa dan buah pikiran membuat hidup tidak terasa sepi.",
                    "Seringkali pikiran dan emosi yang negatif justru tumbuh subur saat orang hanya sibuk bicara dengan hari dan diri sendiri. Tak mengherankan dari kesendirian itulah mulai berkembang masalah yang lebih serius, seperti ilusi sampai halusinasi.",
                  ],
                },
                {
                  title: "Be active",
                  items: [
                    "Bangkit, dan biarkan tubuh bergerak. Berjalan, berlari, bersepeda, olahraga permainan, berkebun atau kegiatan apa pun yang membuat tubuh kita bergerak.",
                    "Saat kita aktif, ada aliran emosi yang positif, apalagi bila itu dilakukan dengan senang hati.",
                  ],
                },
                {
                  title: "Take notice",
                  items: [
                    "Bila hal itu terus terjadi, bisa jadi gejala depresi mulai berkembang dalam diri. Cobalah menilai kehidupan lebih bermakna dari hal-hal yang kecil dan tidak biasa. Sensitiflah terhadap hal-hal yang indah.",
                    "Kurangi kebiasaan berujar, “Ah, itu biasa saja.” Jadikan hal yang sangat biasa menjadi luar biasa. Maka saat itulah kita merasakan jiwa yang sangat positif.",
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
            Penyebab gangguan kesehatan
            <span className="text-sky-500"> jiwa</span>
          </h1>

          <div className="flex flex-col xl:px-72 w-full lg:flex-row-reverse items-center justify-evenly">
            <img
              src={sehatj3}
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

export default Content3;
