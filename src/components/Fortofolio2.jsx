
import img4 from '../gambar_2/WhatsApp Image 2024-10-14 at 15.21.08.jpeg'

import img6 from '../gambar_2/WhatsApp Image 2024-10-14 at 15.21.14.jpeg'
import img7 from '../gambar_2/WhatsApp Image 2024-10-14 at 15.21.15.jpeg'

import img9 from '../gambar_2/WhatsApp Image 2024-10-14 at 15.21.21.jpeg'
import img10 from '../gambar_2/WhatsApp Image 2024-10-14 at 15.21.22 (1).jpeg'
import img11 from '../gambar_2/WhatsApp Image 2024-10-14 at 15.21.22.jpeg'
import img12 from '../gambar_2/WhatsApp Image 2024-10-14 at 15.21.24 (1).jpeg'
import img13 from '../gambar_2/WhatsApp Image 2024-10-14 at 15.21.24.jpeg'

import img15 from '../gambar_2/WhatsApp Image 2024-10-14 at 15.21.28.jpeg'
import img16 from '../gambar_2/WhatsApp Image 2024-10-14 at 15.21.29 (1).jpeg'

import img19 from '../gambar_2/WhatsApp Image 2024-10-14 at 15.21.33.jpeg'
import img20 from '../gambar_2/WhatsApp Image 2024-10-14 at 15.21.41.jpeg'

import { useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap/gsap-core"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import anime from "animejs"

gsap.registerPlugin(ScrollTrigger);

const Fortofolio2 = () => {
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
        <div>
            <div id="fotofolio" className="ibu" >



                <section className="projects1">
                    <div className="project-item2">



                        <div className="project">
                            <img src={img4} ref={addToRefs} alt="Project 4" />
                        </div>





                        <div className="project">
                            <img src={img6} ref={addToRefs} alt="Project 6" />
                        </div>


                        <div className="project">
                            <img src={img7} ref={addToRefs} alt="Project 7" />
                        </div>



                        <div className="project">
                            <img src={img9} ref={addToRefs} alt="Project 8" />
                        </div>
                        <div className="project">
                            <img src={img10} ref={addToRefs} alt="Project 8" />
                        </div>
                        <div className="project">
                            <img src={img11} ref={addToRefs} alt="Project 8" />
                        </div>
                        <div className="project">
                            <img src={img12} ref={addToRefs} alt="Project 8" />
                        </div>
                        <div className="project">
                            <img src={img13} ref={addToRefs} alt="Project 8" />
                        </div>

                        <div className="project">
                            <img src={img15} ref={addToRefs} alt="Project 8" />
                        </div>
                        <div className="project">
                            <img src={img16} ref={addToRefs} alt="Project 8" />
                        </div>
                        <div className="project">
                            <img src={img19} ref={addToRefs} alt="Project 8" />
                        </div><div className="project">
                            <img src={img20} ref={addToRefs} alt="Project 8" />
                        </div>

                    </div>
                </section>

            </div >
        </div>
    );

}

export default Fortofolio2;