import "../css/page1.css"
import pipa9 from "../img2/pipa.png"
import pipa7 from "../img2/menguji.png"
import pipa5 from "../img2/api.png"
import pipa3 from "../img2/protek.png"
import pipa1 from "../img2/sar.png"
import pipa4 from "../img2/WhatsApp_Image_2024-10-09_at_13.25.34-removebg-preview.png"
import pipa8 from "../img2/testing.png"
import pipa2 from "../img2/brea.png"
import pipa6 from "../img2/apar.png"

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { EffectCoverflow, Pagination } from "swiper/modules"

const Page1 = () => {
    return (
        <div id="our" className="mt-20">
            <div className="Page1 relative px-6 py-20 md:py-40 font-inter mx-auto">
                <h3 className="text-4xl font-bold font-signika mb-5 text-slate-800 sm:text-5xl md:text-5xl text-center">
                    Our <span className="text-sky-500">Service</span>
                </h3>
                <h2 className="ituu text-2xl  mb-16">We are a company engaged in the field of periodic inspection services for safety equipment both on board ships and for life at sea. We can perform periodic inspections of the following equipment such as :</h2>

                <div className="box-Page1">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="box">
                                <img src={pipa1} />
                                <h3>Rescue Equipment</h3>
                                <h4>Life jacket,Life buoy,Life raft,Life boats,Rescue boats</h4>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="box">
                            <img src={pipa2} alt="" />
                            <h3>Breathing Equipment</h3>
                            <h4>Self contain breathing apparatus(SCBA),Emergency escape breathing device(EEBD),Medical oxygen sets,Air quality test</h4>
                        </div></SwiperSlide>
                        <SwiperSlide> <div className="box">
                            <img src={pipa3} alt="" />
                            <h3>Protection Equipment</h3>
                            <h4>Immersion Suit, Fireman Suit, Safety set</h4>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="box">
                            <img src={pipa4} alt="" />
                            <h3>Fire Alarm System</h3>
                            <h4>Fixed Fire detection system, Fixed gas detection system, fire alarm system, portable fire detection system, portable fire detection system</h4>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="box">
                            <img src={pipa5} alt="" />
                            <h3>Firefighting Fixed System</h3>
                            <h4>Dry powder fire system, water fire suppression systems, foam fire suppression system, gaseous fire detection system, carbon dioxidefire system</h4>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="box">
                            <img src={pipa6} alt="" />
                            <h3>Fire Extinguisher</h3>
                            <h4>Dry powder fire extinguisher, wet chemical fire extinguisher, water-fire extinguisher, foam fire extinguisher, Carbon dioxide fire extinguisher</h4>

                        </div>
                        </SwiperSlide>
                        <SwiperSlide> <div className="box">
                            <img src={pipa7} alt="" />
                            <h3>NDT <span>(Non Destructive Test)</span></h3>
                            <h4>NDT Conventional, (RT/UT/PT/MT, UT Thickness including UT thickness vessel, eddy current), NDT advance (LRUT, TOFD, Phased array, computerized RT, Boroscope, RAT)</h4>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="box">
                            <img src={pipa8} alt="" />
                            <h3>Testing Services</h3>
                            <h5>PSV Testing, Valve Leak testing, Hydrostatic Test, Vacuum test, Tank cleaning, Steam test, hardness test, infrared thermograph, in-situ
                                metallography, spark test (carbon steel PMI), grounding test, cathodic protection test, MFL. </h5>
                        </div></SwiperSlide>
                        <SwiperSlide> <div className="box">
                            <img src={pipa9} alt="" />
                            <h3>Pipeline Services</h3>
                            <h4>Pigging, Brushing, hydrotesting, Pig Launching, intelligent pigging, pipeline preservation</h4>
                        </div></SwiperSlide>

                    </Swiper>
















                </div>

            </div>

        </div>
    )
}
export default Page1