import React from 'react';
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className='container contact'>
            <div className='contact-banner'>
                <h3>Looking for a
                    <br />Software Partner?</h3>
                <div style={{ margin: "auto 0px auto auto" }}>
                    <button className='contact-btn'>START A PROJECT</button>
                </div>
            </div>

            <div className='flex'>
                <div style={{ width: '30%', paddingRight:"80px" }}>
                    <Link to='/'><img src="https://i.ibb.co/C2XdFKq/logo-v2-1.png" alt="" /></Link>
                    <p>Get a fully stacked design team that will give you accessible design, exhaustive research, and an outstanding experience.</p>
                    <p>Email: info@softcent.eu</p>
                    <p>Phone: +(372) 57836500</p>

                </div>
                <div className='port-grid' style={{ width: '70%' }}>
                    <div>
                        <h6>Company</h6>
                        <ul>
                            <li style={{margin:'12px 0px'}}>About us</li>
                            <li style={{margin:'12px 0px'}}>Our portfolio</li>
                            <li style={{margin:'12px 0px'}}>Our Product</li>
                            <li style={{margin:'12px 0px'}}>Our Team</li>
                            <li style={{margin:'12px 0px'}}>Our Priceing</li>
                            <li style={{margin:'12px 0px'}}>Testimonials</li>
                            <li style={{margin:'12px 0px'}}>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h6>Our Service</h6>
                        <ul>
                            <li style={{margin:'12px 0px'}}>Marketing</li>
                            <li style={{margin:'12px 0px'}}>UI/UX Design</li>
                            <li style={{margin:'12px 0px'}}>Graphic Design (Branding)</li>
                            <li style={{margin:'12px 0px'}}>Development</li>
                            <li style={{margin:'12px 0px'}}>New Products</li>
                        </ul>
                    </div>
                    <div>
                        <h6>Supports</h6>
                        <ul>
                            <li style={{margin:'12px 0px'}}>FAQs</li>
                            <li style={{margin:'12px 0px'}}>Support Policy</li>
                            <li style={{margin:'12px 0px'}}>Privacy Policy</li>
                            <li style={{margin:'12px 0px'}}>Trams of Service</li>
                            <li style={{margin:'12px 0px'}}>Refund Policy</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;