import React from 'react';
import About from './About';
import Customer from './Customer';
import Portfolio from './Portfolio';
import Pricing from './Pricing';
import Products from './Products';
import TalkAboutUs from './TalkAboutUs';
import WhatWeDo from './WhatWeDo';

const Home = () => {
    return (
        <div>
            <About></About>
            <Customer></Customer>
            <WhatWeDo></WhatWeDo>
            <Products></Products>
            <Pricing></Pricing>
            <TalkAboutUs></TalkAboutUs>
            <Portfolio></Portfolio>
        </div>
    );
};

export default Home;