import React from 'react';

const Customer = () => {
    return (
        <div className='container'>
            <h3 className='customer-heading'>Our Customers</h3>
          <p className='customer-underline'><img src="https://i.ibb.co/3yx1zHc/Underline-3.png" alt="" /></p>
            <div className='customer-grid'>
                <img src='https://i.ibb.co/PTtfmgt/image-1.png' alt=''></img>
                <img src='https://i.ibb.co/DQTY44Y/image-2.png' alt=''></img>
                <img src='https://i.ibb.co/xF7Ww6f/image-3.png' alt=''></img>
                <img className='image-4' src='https://i.ibb.co/Jsyn6nG/image-4.png' alt=''></img>
            </div>
        </div>
    );
};

export default Customer;