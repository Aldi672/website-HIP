import img1 from '../mag/1.jpg'
import img2 from '../mag/2.jpg'
import img3 from '../mag/3.jpg'
import '../css/sertif.css'
import img8 from '../mag/bki-removebg-preview.png'
import img6 from '../mag/clasnk-removebg-preview.png'

import img4 from '../mag/dnv.jpg'
import img5 from '../mag/lr-removebg-preview.png'
import img7 from '../mag/ria-removebg-preview.png'

const Sertif = () => {

    return (
        <div className="conta">
            <div >
                <h1 className='text-3xl font-bold font-signika  text-sky-500 sm:text-5xl md:text-5xl text-center'>Certificated <span className='text-cyan-950'>by</span></h1>
                <div className="certificate-gallery">
                    <div className="certificate">
                        <img src={img1} />
                        <p>ISO 9001</p>
                    </div>
                    <div className="certificate">
                        <img src={img2} />
                        <p>ISO 45001</p>
                    </div>
                    <div className="certificate">
                        <img src={img3} />
                        <p>ISO 14001</p>
                    </div>
                </div>
            </div>
            <h2 className='text-4xl font-bold font-signika  text-black sm:text-5xl md:text-5xl text-center'>Approved by</h2>
            <div className="approved-gallery">
                <img src={img4} />
                <img src={img5} />
                <img src={img6} />
                <img src={img7} />
                <img src={img8} />


            </div>
        </div>
    );

}

export default Sertif;