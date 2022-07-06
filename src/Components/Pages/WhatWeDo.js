import React from 'react';

const WhatWeDo = () => {
    return (
        <div className='container'>
            <h3 className='what-we-do-heading'>What We Do</h3>
            <div className='what-we-do-underline'>
                <p><img src="https://i.ibb.co/3yx1zHc/Underline-3.png" alt="" /></p>
            </div>

            <div className='what-we-do-grid'>
                <div>
                    <div className='what-we-do'>
                        <img width={52} height={52} src='https://i.ibb.co/BVv7tGj/branding-1.png' alt=''></img>
                        <h4>Branding</h4>
                    </div>
                    <ul className='what-we-do-list'>
                        <li>Brand Strategy</li>
                        <li>Social media</li>
                        <li>Marketing Assets</li>
                        <li>Presentations</li>
                        <li>Build MVP Version</li>
                        <li>Pitch Deck</li>
                    </ul>
                </div>
                <div>
                    <div className='what-we-do'>
                        <img width={52} height={52} src='https://i.ibb.co/4Zfh0tm/UX.png' alt=''></img>
                        <h4>UI/UX Design</h4>
                    </div>
                    <ul className='what-we-do-list'>
                        <li>User Interface</li>
                        <li>User Experience</li>
                        <li>Design System</li>
                        <li>Wireframe</li>
                        <li>Prototype</li>
                        <li>Website & Mobile App</li>
                        <li>IOS + Android</li>
                    </ul>
                </div>
                <div>
                    <div className='what-we-do'>
                        <img width={52} height={52} src='https://i.ibb.co/4Zfh0tm/UX.png' alt=''></img>
                        <h4>Development</h4>
                    </div>
                    <ul className='what-we-do-list'>
                        <li>Front End (HTML, CSS, React)</li>
                        <li>Backend (Node.js, MongoDB)</li>
                        <li>iOS (Swift)</li>
                        <li>Android (Kotlin, Flutter)</li>
                        <li>Blockchain Development (NFT)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;