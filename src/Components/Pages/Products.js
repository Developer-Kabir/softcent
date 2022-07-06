import React from 'react';

const Products = () => {
    return (
        <div>
            <div className='container'>
                <h3 className='products-heading'>Our Products</h3>
                <div className='products-underline'>
                    <p><img src="https://i.ibb.co/3yx1zHc/Underline-3.png" alt="" /></p>
                </div>
                <div className='flex'>
                    <p>We believe that great design should not be out of reach, so our services <br></br> are less than half the price of a full-time designer.</p>
                    <div style={{marginLeft:"auto"}}>
                        <button className='products-section-btn'>See More</button>
                    </div>
                </div>
            </div>

            <div className='product-container-1'>
               <div className='product-detail'>
                   <h3 className='p-heading'>SwipeXYZ Product</h3> 
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                   <button className='p-button'>View Product</button>
               </div>  
               <div className='product-img'>
                    <div className='product-img-1'>
                        <img className='product-img-2' src="https://i.ibb.co/D5QkFJN/i-Phone-11-extra-Shadow-4-1.png" alt=""/>
                    </div>
               </div>  
            </div>
            <div className='product-container-2'>
               <div className='product-img'>
                    <div className='product-img-3'>
                        <img className='product-img-4' src="https://i.ibb.co/c2XtKZ1/i-Phone-11-extra-Shadow-4-1-1.png" alt=""/>
                    </div>
               </div>  
               <div className='product-detail-2'>
                   <h3 className='p-heading'>SwipeXYZ Product</h3> 
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                   <button className='p-button'>View Product</button>
               </div>  
            </div>
        </div>
    );
};

export default Products;