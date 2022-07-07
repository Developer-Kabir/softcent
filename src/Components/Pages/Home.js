import React from 'react';
import About from './About';
import Customer from './Customer';
import Pricing from './Pricing';
import Products from './Products';
import WhatWeDo from './WhatWeDo';

const Home = () => {
    return (
        <div>
            <About></About>
            <Customer></Customer>
            <WhatWeDo></WhatWeDo>
            <Products></Products>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;