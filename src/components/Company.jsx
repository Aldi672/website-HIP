import "../css/company.css"
import customer from "../gambar/WhatsApp Image 2024-10-14 at 15.13.00.jpeg"
import laut from "../gambar/WhatsApp Image 2024-10-14 at 15.13.12 (1).jpeg";
import jabat from "../gambar/WhatsApp Image 2024-10-14 at 15.13.12.jpeg"
import hh from "../gambar/WhatsApp Image 2024-10-14 at 15.13.13.jpeg"


const Company = () => {

    return (
        <body id="lusin">
            <h3 className="mt-10 text-4xl font-bold font-signika mb-5 text-slate-800 sm:text-5xl md:text-5xl text-center">
                Company<span className="text-sky-500">Value</span>
            </h3>
            <div className="container">

                <div className="card">
                    <div className="img-box">
                        <img src={hh} alt="" />
                    </div>
                    <div className="content">

                        <h2 className="gambar">Customer Focus</h2>
                        <p>We will do the best we can for our customers. Our focus is on the relationships we will build and maintain with them and adapt to their ever changing nature.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="img-box">
                        <img src={jabat} alt="" />
                    </div>
                    <div className="content">

                        <h2>Team Work</h2>
                        <p>Our team is passionate about what they do. By working together they are strong and bring a growing wealth of expertise, experience, innovation, and optimism which serve to increase our service levels and output.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="img-box">
                        <img src={laut} alt="" />
                    </div>
                    <div className="content">

                        <h2>Integrity</h2>
                        <p>All of our relationships are built on integrity. Our customers, suppliers and employees are critical to our operations, building trust and confidence with customer is very important to us. We are committed to being honest, reliable and honest in everything we do.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="img-box">
                        <img src={customer} alt="" />
                    </div>
                    <div className="content">

                        <h2>Profesionalism</h2>
                        <p>We do our best to be professional in everything we do, while being committed, confident and goal oriented. this drives us to maintain a high level of efficiency as we continuously strive for excellence.</p>
                    </div>
                </div>
            </div>

        </body>
    );

}

export default Company;