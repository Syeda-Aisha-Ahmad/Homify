import React from 'react';

const Footer = () => {
    return (
        <div className='relative '>
            <div className='border absolute top-[-12px] w-full h-[80px] border-black z-10'></div>
            <div className='bg-[#101d01] pt-14 pb-5  px-8 lg:px-14 z-20 relative'>
                {/* <h1 className='text-6xl text-[#f0f8e6] w-8/12 font-serif leading-tight'>We Provide You</h1> */}

                <div className='md:flex text-white gap-20'>
                    <div className='md:w-3/12 mb-10'>
                        <h2 className='font-serif text-3xl mb-5'>Internal</h2>
                        <p className='text-sm'>Continue Travelling 2024 all rights reserved</p>
                    </div>


                    <div className='md:w-9/12 md:flex justify-evenly'>
                        <div className='mb-10'>
                            <h2 className='font-serif text-3xl mb-5'>Menu</h2>
                            <p className='mb-3'>Home</p>
                            <p className='mb-3'>Latest Work</p>
                            <p className='mb-3'>Recommandation</p>
                            <p className='mb-3'>Testimonial</p>
                        </div>

                        <div className='mb-10'>
                            <h2 className='font-serif text-3xl mb-5'>Help</h2>
                            <p className='mb-3'>Privacy & Policy</p>
                            <p>Terms & Service</p>
                        </div>

                        <div className='mb-10'>
                            <h2 className='font-serif text-3xl mb-5'>Social</h2>
                            <p className='mb-3'>Facebook</p>
                            <p className='mb-3'>Twitter</p>
                            <p className='mb-3'>Instagram</p>
                            <p className='mb-3'>Pinterest</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;