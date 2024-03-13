import React from 'react';
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";
import img from '../../../assets/open.png';



const Review = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mx-5 lg:mx-14 mt-10 mb-24 md:my-24 lg:mt-24 lg:mb-40'>


            {/* left */}
            <div className='pt-7'>
                <div className='md:w-[85%] mx-auto relative mb-10'>

                    <img className=' lg:hidden absolute opacity-10 top-[80px] w-[40%] md:w-[50%] mx-auto' src={img} alt="" />
                    <h1 className='text-5xl lg:text-6xl text-[#182b02] font-serif leading-tight mb-3 lg:mb-7'>Our Happy Clients</h1>

                    <img className='hidden lg:grid w-3/12 mx-auto' src={img} alt="" />

                    <p className='text-neutral-500 md:text-neutral-700 lg:text-neutral-500 mt-5 mb-10'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores debitis deleniti ab tempora molestiae, nam, repellat eligendi, tempore velit iusto accusantium nesciunt! Quidem minima sit voluptates at omnis inventore facere?
                    </p>

                    <div className='flex items-center justify-between'>
                        {/* left */}
                        <div>
                            <h2 className='text-3xl font-serif'>Asha Mandela</h2>
                            <p className='text-neutral-500 text-sm'>Founder of Hasan's Heart</p>
                        </div>

                        {/* right */}
                        <div className='text-center'>
                            <h3 className='text-3xl'>01/05</h3>
                            <p className='flex text-4xl gap-4'>
                                <HiArrowLongLeft />
                                <HiArrowLongRight />
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* right */}
            <div className=' hidden lg:grid relative'>
                <div className='border text-black absolute right-[26px] top-[-12px] w-10/12 h-[510px] border-black '></div>
                <img className='w-10/12 right-10 absolute' src="https://img.freepik.com/premium-photo/modern-bright-interior-3-d-rendering_1016228-16033.jpg?w=740" alt="" />
            </div>


            {/* left */}
            <div className='lg:hidden relative mb-[480px] md:mb-0'>
                <div className='border text-black absolute left-[12px] md:left-[12px] lg:left-[12px] top-[-12px] w-full md:w-11/12 lg:w-10/12 h-[500px] md:h-[450px] border-black '></div>
                <img className='w-full h-[500px] md:h-[450px] md:w-11/12 lg:w-10/12 absolute' src="https://img.freepik.com/premium-photo/modern-bright-interior-3-d-rendering_1016228-16033.jpg?w=740" alt="" />
            </div>


        </div>
    );
};

export default Review;