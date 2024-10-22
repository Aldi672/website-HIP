import "../css/contact.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import mail from "../assets/tim/email.png"
import location from "../assets/tim/location.png"
import telep from "../assets/tim/phone.png"
import shape from "../assets/tim/shape.png"

import { useState, useRef } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const inputRefs = useRef([]);

    const focusFunc = (index) => {
        const parent = inputRefs.current[index].parentNode;
        parent.classList.add("focus");
    };

    const blurFunc = (index) => {
        const parent = inputRefs.current[index].parentNode;
        if (inputRefs.current[index].value === "") {
            parent.classList.remove("focus");
        }
    };

    const sendToWhatsApp = () => {
        const whatsappNumber = '6283827638478'; // Ganti dengan nomor WhatsApp Anda
        const text = `My Name Is ${name}\n Email: ${email}\n Phone: ${phone}\n Message: ${message}`;
        const encodedMessage = encodeURIComponent(text)
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappLink, '_blank');
    };
    return (
        <body id="contact">
            <div className="container1">
                <span className="big-circle"></span>
                <img src={shape} className="square" alt="" />
                <div className="form">
                    <div className="contact-info">
                        <h3 className="title">Let's get in touch</h3>
                        <p className="text">
                            Experience professional and quality service. We look forward to working with you.
                        </p>

                        <div className="info">
                            <div className="information">
                                <img src={location} className="icon" alt="" />
                                <p>Graha Haekal 2nd floor, Jl. Bugis No.48 Tanjung Priok, Jakarta Utara</p>
                            </div>
                            <div className="information">
                                <img src={mail} className="icon" alt="" />
                                <p>contact@haekalpratama.com</p>
                            </div>
                            <div className="information">
                                <img src={telep} className="icon" alt="" />
                                <p>021-22495683</p>
                            </div>
                        </div>

                        <div className="social-media">
                            <p>My Social media:</p>
                            <div className="social-icons">

                                <a href="https://www.instagram.com/haekal_inti_pratama?igsh=MTl3ODJ0OW9oank4cQ==">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <span className="circle one"></span>
                        <span className="circle two"></span>

                        <form id="contact-form" autoComplete="off">
                            <h3 className="title">Contact us</h3>
                            <div className="input-container">
                                <input
                                    ref={(el) => (inputRefs.current[0] = el)}
                                    type="text"
                                    name="name"
                                    className="input  bg-transparent rounded-full border-[2px] border-white"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onFocus={() => focusFunc(0)}
                                    onBlur={() => blurFunc(0)}
                                />
                                <label>Username</label>
                                <span>Username</span>
                            </div>
                            <div className="input-container">
                                <input
                                    ref={(el) => (inputRefs.current[1] = el)}
                                    type="email"
                                    name="email"
                                    className="input bg-transparent rounded-full border-[2px] border-white"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onFocus={() => focusFunc(1)}
                                    onBlur={() => blurFunc(1)}
                                />
                                <label>Email</label>
                                <span>Email</span>
                            </div>
                            <div className="input-container">
                                <input
                                    ref={(el) => (inputRefs.current[2] = el)}
                                    type="tel"
                                    name="phone"
                                    className="input bg-transparent rounded-full border-[2px] border-white"
                                    required
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    onFocus={() => focusFunc(2)}
                                    onBlur={() => blurFunc(2)}
                                />
                                <label>Phone</label>
                                <span>Phone</span>
                            </div>
                            <div className="input-container textarea">
                                <textarea
                                    ref={(el) => (inputRefs.current[3] = el)}
                                    name="message"
                                    className="input "
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onFocus={() => focusFunc(3)}
                                    onBlur={() => blurFunc(3)}
                                ></textarea>
                                <label>Message</label>
                                <span>Message</span>
                            </div>
                            <input type="button" value="Send to WhatsApp" className="btn" onClick={sendToWhatsApp} />
                        </form>
                    </div>
                </div>
            </div>

        </body>
    );
}
export default Contact