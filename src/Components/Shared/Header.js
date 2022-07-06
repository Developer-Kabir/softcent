import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='container'>
            <div className='navmenu'>
                <div className='header-main'>
                    <Link to='/'><img src="https://i.ibb.co/C2XdFKq/logo-v2-1.png" alt="" /></Link>
                </div>
                <div className='header-menu'>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/work">WORK</Link></li>
                        <li><Link to="/product">PREMIUM PRODUCTS</Link></li>
                        <li><Link to="/blog">BLOG</Link></li>
                        <button>START A PROJECT</button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;