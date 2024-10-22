// eslint-disable-next-line no-unused-vars

import frame from '../img/05e5c61f-99bb-4ea4-8a8d-6e757b93f6bd-ai-brush-removebg-kbhrjlhu.png'
import gamar1 from '../img/gamar1.png'
import gamar2 from '../img/gamar2.png'
import gamar3 from '../img/gamar3.png'
import '../css/desk.css'

// eslint-disable-next-line react/prop-types

const BARA = () => {

    return (
        <div id='bara' className='bacground '>
            <h3 className="relative  text-4xl font-bold font-signika top-[10rem] mb-8 text-slate-800 sm:text-5xl md:text-5xl text-center">
                Other <span className="text-sky-500 ">Services</span>
            </h3>
            <div className='card1'>
                <img src={gamar1} className='car1' />
                <h4 className='h1 font-medium pt-2'>Testing</h4>
                <h4 className='bubur font-signika'>Hdrostastic Testing, Davit & Crane testing</h4>
            </div>
            <div className='card2'>
                <img src={gamar2} className='car2' />
                <h4 className='h2'>servicing</h4>
                <h4 className='bubur1 font-signika'>Repairing LSA FFE</h4>
            </div>
            <div className='card3'>
                <img src={gamar3} className='car3' />
                <h4 className='bubur2 font-signika'>Supplying (deck& engine store, galley, cabin, stationary, navigation, safety equipment marine chemical, span gas etc)</h4>
            </div>
            <img src={frame} className='gambar' />
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default BARA;