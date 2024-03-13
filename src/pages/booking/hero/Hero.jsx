import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';

const Hero = ({ selected, setSelected }) => {



    return (
        <div className='flex flex-col-reverse md:flex-row'>
            <div className='md:w-1/2  h-[300px] md:h-[500px] relative'>

                <div className='border absolute right-[-27px] md:right-[-25px] lg:right-[80px] top-[-12px] md:top-[100px] lg:top-[65px] w-[60%] md:w-[75%] lg:w-[70%] h-[300px] md:h-[400px] lg:h-[80%] bg-[#b1c798] border-black z-10'></div>

                <div className='border relative border-black mt-5 md:mt-20 mx-auto h-[80%] w-[70%] my-auto z-20 bg-white'>
                    <DayPicker
                        mode='single'
                        selected={selected}
                        onSelect={setSelected}
                        className='w-full px-[60px] py-10'
                    />
                </div>
            </div>
            <div className='md:w-1/2'>
                <img className='md:w-10/12' src="https://homendecorbd.com/wp-content/uploads/2021/12/home-grocery-755261.jpg.webp" alt="" />
            </div>
        </div>
    );
};

export default Hero;