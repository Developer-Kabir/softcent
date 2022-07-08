import React from 'react';

const Portfolio = () => {
    return (
        <div className='container'>
            <div  style={{margintop:'50px'}} className='flex'>
                <div>
                    <h3>Our Portfolio</h3>
                    <div className='what-we-do-underline'>
                        <p><img src="https://i.ibb.co/3yx1zHc/Underline-3.png" alt="" /></p>
                    </div>
                </div>
                <div className='port-button'>
                    <button>⇦</button>
                    <button>⇨</button>
                </div>
            </div>

            <div className='port-grid'>
                <div>
                    <div className='port-img' >
                        <img src="https://i.ibb.co/fMQK7Mw/Colory-Cover-1.png" alt="" />
                    </div>
                    <h4 style={{ textAlign: "center" }}>Color System Design</h4>
                </div>
                <div>
                    <div className='port-img' >
                        <img src="https://i.ibb.co/xhQmMrL/Colory-Cover-1-1.png" alt="" />
                    </div>
                    <h4 style={{ textAlign: "center" }}>Logo Design</h4>
                </div>
                <div>
                    <div className='port-img' >
                        <img src="https://i.ibb.co/Z6HYQTX/Mockup-1.png" alt="" />
                    </div>
                    <h4 style={{ textAlign: "center" }}>UI/UX Design</h4>
                </div>
            </div>

            <div style={{textAlign:'center',marginTop:'50px'}}>
                <button className='products-section-btn'>See All Portfolio</button>
            </div>
        </div>
    );
};

export default Portfolio;