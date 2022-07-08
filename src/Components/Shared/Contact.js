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
                <div style={{ width: '30%', paddingRight: "80px" }}>
                    <Link to='/'><img style={{
                        marginTop: '50px'
                    }} src="https://i.ibb.co/C2XdFKq/logo-v2-1.png" alt="" /></Link>
                    <p>Get a fully stacked design team that will give you accessible design, exhaustive research, and an outstanding experience.</p>
                    <p>Email: info@softcent.eu</p>
                    <p>Phone: +(372) 57836500</p>
                    <div className='flex'>
                        <Link to='/https://web.facebook.com/search/top?q=softcent'><img style={{
                            width: '40px',
                            margin: '0px 5px'
                        }} src="Assets/facebook-brands.svg" alt="" /></Link>
                        <Link to='/'><img style={{
                            width: '40px',
                            margin: '0px 5px'
                        }} src="Assets/linkedin-in-brands.svg" alt="" /></Link>
                        <Link to='/'><img style={{
                            width: '40px',
                            margin: '0px 5px'
                        }} src="Assets/instagram-brands.svg" alt="" /></Link>
                        <Link to='/'><img style={{
                            width: '40px',
                            margin: '0px 5px'
                        }} src="Assets/twitter-brands.svg" alt="" /></Link>

                        <Link to='/'><img style={{
                            width: '40px',
                            margin: '0px 5px'
                        }} src="Assets/whatsapp-brands.svg" alt="" /></Link>
                    </div>
                </div>
                <div className='port-grid' style={{ width: '70%', marginTop: '30px' }}>
                    <div>
                        <h6>Company</h6>
                        <ul style={{
                            marginTop: '-20px'
                        }}>
                            <li style={{ margin: '12px 0px' }}><Link to='/about'>About us</Link></li>
                            <li style={{ margin: '12px 0px' }}><Link to='/work'>Our portfolio</Link></li>
                            <li style={{ margin: '12px 0px' }}><Link to='/product'>Our Product</Link></li>
                            <li style={{ margin: '12px 0px' }}><Link to='/team'>Our Team</Link></li>
                            <li style={{ margin: '12px 0px' }}><Link to='/pricing'>Our Priceing</Link></li>
                            <li style={{ margin: '12px 0px' }}><Link to='/testiomonal'>Testimonials</Link></li>
                            <li style={{ margin: '12px 0px' }}><Link to='/'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h6>Our Service</h6>
                        <ul style={{
                            marginTop: '-20px'
                        }}>
                            <li style={{ margin: '12px 0px' }}><Link to='/'>Marketing</Link></li>
                            <li style={{ margin: '12px 0px' }}><Link to='/'>UI/UX Design</Link></li>
                            <li style={{ margin: '12px 0px' }}><Link to='/'>Graphic Design (Branding)</Link></li>
                            <li style={{ margin: '12px 0px' }}><Link to='/'>Development</Link></li>
                            <li style={{ margin: '12px 0px' }}><Link to='/'>New Products</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h6>Supports</h6>
                        <ul style={{
                            marginTop: '-20px'
                        }}>
                            <li style={{ margin: '12px 0px' }}><Link to='/'>FAQs</Link></li>
                            <li style={{ margin: '12px 0px' }}><Link to='/'>Support Policy</Link></li>
                            <li style={{ margin: '12px 0px' }}><Link to='/'>Privacy Policy</Link></li>
                            <li style={{ margin: '12px 0px' }}><Link to='/'>Trams of Service</Link></li>
                            <li style={{ margin: '12px 0px' }}><Link to='/'>Refund Policy</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;