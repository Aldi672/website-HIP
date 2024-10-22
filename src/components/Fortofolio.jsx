import "../css/porto.css"
import { useEffect, useRef, useState } from "react"
import img1 from '../gambar_2/WhatsApp Image 2024-10-14 at 15.21.07.jpeg'
import img2 from '../gambar_2/WhatsApp Image 2024-10-14 at 15.21.08 (1).jpeg'
import img3 from '../gambar_2/WhatsApp Image 2024-10-14 at 15.21.08 (2).jpeg'
import gambar4 from "../IMG3/IMG_0017.jpg"
import gambar5 from "../IMG3/IMG_0031.jpg"
import gambar6 from "../IMG3/IMG_0076.jpg"
import gambar7 from "../IMG3/IMG_0099.jpg"
import gambar8 from "../IMG3/IMG_0121.jpg"

import { useGSAP } from "@gsap/react"
import { gsap } from "gsap/gsap-core"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import anime from "animejs"

gsap.registerPlugin(ScrollTrigger);

const Fortofolio = () => {
    const contoh = useRef();
    const [rotatio, setRotation] = useState(0);
    const titleRef = useRef(null);
    const gambarRefs = useRef([]);
    gambarRefs.current = [];

    const { contextSafe } = useGSAP({
        scope: contoh
    });

    const addToRefs = (el) => {
        if (el && !gambarRefs.current.includes(el)) {
            gambarRefs.current.push(el);
        }
    };

    // eslint-disable-next-line no-unused-vars
    const onClickGood = contextSafe(() => {
        // eslint-disable-next-line no-undef
        const newRotation = rotatio + 360;
        setRotation(newRotation);
        // eslint-disable-next-line no-undef
        gsap.to('.good', { rotation: newRotation });
    });
    // eslint-disable-next-line no-undef
    useEffect(() => {
        // Ensure titleRef is available
        if (titleRef.current) {
            const textWrapper = titleRef.current;

            // Wrap every letter in a span
            textWrapper.innerHTML = textWrapper.textContent.replace(
                /\S/g,
                "<span class='letter'>$&</span>"
            );

            // Animate letters using Anime.js

        }
    }, []);
    useEffect(() => {
        // Setup ScrollTrigger for each image
        gambarRefs.current.forEach((el, i) => {
            ScrollTrigger.create({
                trigger: el,
                start: "top 80%", // When the top of the image reaches 80% of the viewport
                onEnter: () => {
                    // Anime.js animation when image enters the viewport
                    anime({
                        targets: el,
                        translateY: [-200, 0], // Animasi hujan dari atas
                        translateX: i % 2 === 0 ? [-100, 0] : [50, 0], // Efek gelombang kiri kanan
                        easing: "easeOutElastic(1, .8)", // Efek elastis
                        duration: 800, // Durasi total animasi
                        delay: i * 300, // Penundaan antar elemen berdasarkan index
                    });
                    anime.timeline().add({
                        targets: ".title .letter",
                        translateY: [-200, 0], // Move from -200px to 0
                        easing: "easeOutExpo", // Easing for the animation
                        duration: 1400, // Total duration of the animation
                        delay: (el, i) => 650 + 30 * i, // Stagger delay for each letter
                    });
                },

                once: true, // Animasi di-reset ketika di-scroll kembali
            });
        });
    }, []);


    return (
        <div id="fotofolio" className="ibu" >
            <header className="header">
                <p className="title text-4xl font-bold font-signika mt-20 sm:text-5xl md:text-7xl text-center text-sky-500" ref={titleRef}>
                    Portofolio
                </p>

            </header>


            <section className="projects1">
                <div className="project-item2">
                    <div className="project">
                        <img src={img1} ref={addToRefs} alt="Project 1" />
                    </div>


                    <div className="project">
                        <img src={img2} ref={addToRefs} alt="Project 2" />
                    </div>


                    <div className="project">
                        <img src={img3} ref={addToRefs} alt="Project 3" />
                    </div>


                    <div className="project">
                        <img src={gambar4} ref={addToRefs} alt="Project 4" />
                    </div>


                    <div className="project">
                        <img src={gambar5} ref={addToRefs} alt="Project 5" />
                    </div>


                    <div className="project">
                        <img src={gambar6} ref={addToRefs} alt="Project 6" />
                    </div>


                    <div className="project">
                        <img src={gambar7} ref={addToRefs} alt="Project 7" />
                    </div>


                    <div className="project">
                        <img src={gambar8} ref={addToRefs} alt="Project 8" />
                    </div>
                </div>
            </section>

        </div >
    );

}

export default Fortofolio;
