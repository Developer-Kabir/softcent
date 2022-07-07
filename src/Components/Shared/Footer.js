import React from 'react';
import Contact from './Contact';
import Copyright from './Copyright';

const Footer = () => {
    return (
        <div>
            <Contact></Contact>
            <hr className='container'/ >
            <Copyright></Copyright>
        </div>
    );
};

export default Footer;