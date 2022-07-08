import React from 'react';

const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                <h2 >Software services for <br></br>startups without <br></br> limits..</h2>
                <div style={{
                    position:'absolute',
                    top:"250px",
                    left:'160px'
                }}>
                    <p><img src="https://i.ibb.co/3yx1zHc/Underline-3.png" alt="" /></p>
                </div>
                <p style={{ margin: '-42px 0px 67px 0px' }}>We believe that great design should not be out of reach, so our services <br></br> are less than half the price of a full-time designer.</p>

                <div className='v-img'>
                    <div
                        id='v-player'
                    >
                        <img className='v-button' src='https://i.ibb.co/KsQcwLJ/Polygon-1-1.png' alt=''></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;