import jawir from "../assets/img/WhatsApp Image 2024-09-05 at 09.15.29 1.png"
import gambar from "../assets/img/WhatsApp Image 2024-09-04 at 16.47.25 2.png"
import "../css/style.css"
import vector3 from "../assets/img/Vector 3.svg"
import vector2 from "../assets/img/Vector 2.png"
import mantap1 from "../assets/tim/mantap.jpg"
import mantap2 from "../assets/tim/kapal.jpeg"
import mantap3 from "../assets/tim/lol.jpg"
import mantap4 from "../assets/tim/okkk.jpg"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { EffectCube, Pagination } from 'swiper/modules';

const Frame = () => {
    return (

        <div className="frame">

            <div className="div">
                <img src={gambar} className="baru" />
                <div className="over-group">
                    <div className="text-wrapper [font-family:'Alumni']">FAST RELIABLE PROFESIONAL</div>
                    <div className="overlap">
                        <div className="text-wrapper-2 [font-family:'Alumni']">ABOUT COMPANY</div>
                        <img className="vector" alt="Vector" src={vector3} />
                    </div>
                </div>
                <p className="PT ">
                    <p>PT. Haekal Inti Pratama, a company in the field of general contractor, safety equipment &amp; marine services
                        which was established in 2004, located in Jakarta - Indonesia. We have services in all major Indonesian ports.</p>
                    <p> We are fully committed to fast, quality and competitive services for domestic and foreign ships to our
                        customers. Abundant ship shop available in our stock integrated with fast response. </p>
                    <p> PT. Haekal Inti Pratama also provides quality safety equipment and services of the highest standard that
                        comply with manufacturer &amp; SOLAS requirements.</p>
                    <p>We serve our clients through the port areas of Indonesia
                        and Singapore with total performance commitment, not only promises.</p>

                </p>
                <div className="rectangle" />
                <div className="rectangle-2" />
                <div className="rectangle-3" />

                <img className="img" alt="Vector" src={vector2} />
                <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination]}
                    className="whatsapp-image"
                >
                    <SwiperSlide>
                        <img src={mantap1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mantap2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mantap3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mantap4} />
                    </SwiperSlide>
                    {/* <img className="whatsapp-image" alt="Whatsapp image" src={jawir} /> */}
                </Swiper>
            </div>

        </div>
    );
};

export default Frame;