import React from 'react';

const TalkAboutUs = () => {
    return (
        <div className='container'>
            <h3 className='customer-heading'>Talk About Us</h3>
            <div className='customer-underline'>
                <p><img src="https://i.ibb.co/3yx1zHc/Underline-3.png" alt="" /></p>
            </div>

            <div className='flex'>
                <div className='talk-rev'>
                    <p> <span className='quote-1'>  <img src="https://i.ibb.co/pXJRFDN/quote-1.png" alt=""/> </span> We had a bit of a slow and bumpy start, but after changing the designer on their side everything went in a very good direction. The designers were talented and easy to work with. <span classname="quote"> <img src="https://i.ibb.co/gzZdq6J/quote-2.png" alt=""/> </span> </p>

                    <div className='flex'>
                        <img width={60} height={60} src='https://i.ibb.co/wYDFcNL/Ellipse-5.png' alt=''/>
                        <div style={{marginTop:"-30px", marginLeft:"10px"}}>
                            <h5>Shuvo Roy</h5>
                            <p style={{marginTop:"-40px"}}>Softcent Co-Founder</p>
                        </div>
                    </div>
                </div>
                <div style={{margin:"0px auto"}}>
                    <img src='https://i.ibb.co/9nr4vfL/Ellipse-6.png' alt=''></img>
                </div>
            </div>
        </div>
    );
};

export default TalkAboutUs;