import "../components/css2/faq.css"
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import aos from "aos";
import 'aos/dist/aos.css';

const Faq = () => {
    const [visibleSections, setVisibleSections] = useState(Array(5).fill(false));

    const sectionContents = [
        "PT HIP has certification recognized by ClassNK, Lloyd's Register, DNV, RINA, and BKI.",
        "You can contact us via email or telephone with the required service details, and we will provide an official price quote.",
        "Yes, PT HIP also provides food supply services for ship kitchens and ship chandler services to meet various ship supply needs.",
        "Yes, we provide repair and replacement services for safety equipment that does not meet standards. We also provide recommendations for replacement parts if necessary.",
        "We accept payments in IDR (Rupiah) and USD (United States Dollars).",
    ];

    const sectionTitles = [
        "What classification bodies recognize PT HIP certification?",
        "How do I get a price quote for PT HIP services?",
        "Can PT HIP provide other activities besides LSA FFE inspections and services?",
        "Does PT HIP offer repair services after inspection?",
        "In what currencies does PT HIP accept payments?",
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
        <div className="Bara">
            <div className="faq-container">
                <h3 className="text-4xl font-bold font-signika mb-5 text-sky-500 sm:text-5xl md:text-5xl text-center">
                    Frequently  <span className="text-black">Ask </span><span className="text-orange-500"> Question</span>
                </h3>


                <div data-aos="zoom-out-right" className="w-full">
                    {sectionContents.map((content, index) => (
                        <div
                            key={index}
                            className="faq-label "
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
    )
}
export default Faq