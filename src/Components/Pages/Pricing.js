import React from 'react';

const Pricing = () => {
    return (
        <div className='container'>
            <h3 className='pricing-header'>Pricing Package Choose Your Plan</h3>
            <div className='pricing-underline'>
                <p><img src="https://i.ibb.co/3yx1zHc/Underline-3.png" alt="" /></p>
            </div>
            <p className='pricing-text'>We believe that great design should not be out of reach, so our services are less than half the price of a full-time designer.</p>
            <div className='pricing-btn'>
                <button className='p-button'>Monthly</button>
                <button className='p-button'>Yearly</button>
            </div>

            <div className='pricing-card-grid'>
                <div className='pricing-card'>
                    <div className='pricing-card-heading'>
                        <h4>Merketing</h4>
                        <h6>$899/mo</h6>
                    </div>

                    <ul className='pricing-card-list'>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Dedicated Designer</p></li>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Unlimited requests</p></li>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Unlimited brand profiles</p></li>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Native source files</p></li>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Real-time collaboration</p></li>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Banner Ads</p></li>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Clothing & Merchandise Design</p></li>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Packaging & Label</p></li>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Logo & Brand Guide</p></li>
                    </ul>
                    <button className='pricing-card-button'>$899/mo</button>
                </div>

                <div className='pricing-card'>
                    <div className='pricing-card-heading'>
                        <h4>UI/UX Design</h4>
                        <h6>$1000/ mo</h6>
                    </div>

                    <ul className='pricing-card-list'>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Dedicated Designer</p></li>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Unlimited requests</p></li>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Unlimited brand profiles</p></li>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Native source files</p></li>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Real-time collaboration</p></li>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Banner Ads</p></li>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Clothing & Merchandise Design</p></li>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Packaging & Label</p></li>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Logo & Brand Guide</p></li>
                    </ul>
                    <button className='pricing-card-button'>$1000/mo</button>
                </div>


                <div className='pricing-card'>
                    <div className='pricing-card-heading'>
                        <h4>Development</h4>
                        <h6>$899/mo</h6>
                    </div>

                    <ul className='pricing-card-list'>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Dedicated Designer</p></li>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Unlimited requests</p></li>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Unlimited brand profiles</p></li>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Native source files</p></li>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Real-time collaboration</p></li>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Banner Ads</p></li>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Clothing & Merchandise Design</p></li>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Packaging & Label</p></li>
                        <li className='flex'> ✔ 
                        <p style={{marginLeft:"10px",marginTop:"3px"}}>Logo & Brand Guide</p></li>
                    </ul>
                    <button className='pricing-card-button'>$1000/mo</button>
                </div>
                
            </div>
        </div>
    );
};

export default Pricing;