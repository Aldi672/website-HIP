import img from '../components/img/mubadala.jpeg'
import img2 from '../components/img/eni.jpeg'
import img3 from '../components/img/medcoenergi.jpeg'
import '../css/Client.css'

const PageClient = () => {

    return (
        <div className='bata'>
            <header className='logo clien'>
                <h1 className='text-4xl font-bold font-signika  text-sky-500 sm:text-5xl md:text-5xl text-center '>Our <span className='text-cyan-950'>client</span></h1>
                <h2>In addition to providing foreign and local ship inspection services, we are also helps in supporting oil and gas activities Here are several of our clients.</h2>
            </header>

            <section className="client-list">
                <ul className='clien'>
                    <li>
                        <div className="client-card bau">
                            <img src={img} />
                            <h2>Mubadala Energy</h2>
                            <p>Provision of safety equipment maintenance services.</p>
                        </div>
                    </li>
                    <li>
                        <div className="client-card">
                            <img src={img2} />
                            <h2>Eni Muara Bakau B.V</h2>
                            <p>Privision of inspection, recertification, and maintenance services for LSA and Safety Equipment.</p>
                        </div>
                    </li>
                    <li>
                        <div className="client-card bau">
                            <img src={img3} />
                            <h2>Medco E&P Indonesia</h2>
                            <p>Fire extinguisher inspection services.</p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );

}

export default PageClient;