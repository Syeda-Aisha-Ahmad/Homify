import React from 'react';
import './Hero.css';
import { HiArrowLongRight } from "react-icons/hi2";

const Hero = () => {

    const info = [
        {
            amount: "200+",
            text: "Project Complete"
        },
        {
            amount: "500+",
            text: "Satisfied Client"
        },
        {
            amount: "150+",
            text: "Unique Style"
        },
    ]
    return (
        <div className='mx-5 lg:mx-14 mt-5 md:h-[500px]'>
            <h1 className='text-5xl md:text-6xl text-[#182b02] lg:w-8/12 font-serif leading-loose'>Design Studio For Modern Interiors</h1>

            <div className='md:flex py-5 md:py-8'>
                {/* left */}
                <div className='md:w-[50%]'>
                    <p className='text-lg text-neutral-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, sit. Placeat ipsa quo eos possimus eligendi fugit modi quae minima neque cupiditate? Expedita rem dolor quidem, sed incidunt blanditiis quaerat beatae quos ullam autem unde quae ad recusandae fugit explicabo?</p>
                    <div className='flex items-center gap-10 mt-5'>
                        <button className='css-button-retro--black'>Explore Now</button>
                        <div className='flex items-center gap-2'>
                            <button className='font-semibold '>About Us </button>
                            <HiArrowLongRight className='mt-1 text-2xl' />
                        </div>
                    </div>

                    <div className='mt-7 flex items-center justify-between'>


                        {
                            info.map((inf, i) => {
                                return (
                                    <div key={i} className="text-center">
                                        <p className='text-[#182b02] text-3xl font-semibold font-serif mb-2'>{inf.amount}</p>
                                        <p className='text-neutral-600 text'>{inf.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                {/* right */}
                <div className='md:w-[50%] h-[480px] relative bottom-[-60px] md:bottom-40 right-10'>
                    <div>
                        <div className='md:w-4/12 '>
                            <div className='border absolute right-[-27px] md:right-[-25px] lg:right-[-12px] top-[-12px] md:top-[100px] lg:top-[-12px] w-[60%] md:w-[75%] lg:w-[45%] h-[300px] md:h-[400px] lg:h-[350px] border-black z-10'></div>

                            {/* midium */}
                            <img className='hidden md:grid lg:hidden z-20 absolute right-[-15px] md:right-[-10px] w-[60%] md:w-[75%] h-[300px] top-[120px] md:h-[400px] md:ml-auto' src="https://img.freepik.com/premium-photo/this-scene-is-indoor-home-decoration-commercial-generative-ai_849906-2577.jpg?w=360" alt="" />

                            {/* small, large */}
                            <img className='md:hidden lg:grid z-20 absolute right-[-15px] md:right-0 w-[60%] md:w-[45%] h-[300px] md:h-[350px] md:ml-auto' src="https://img.freepik.com/premium-photo/this-scene-is-indoor-home-decoration-commercial-generative-ai_849906-2577.jpg?w=360" alt="" />
                        </div>


                        <div className='md:hidden lg:grid'>
                            <div className='border-[20px] absolute right-[83px] md:right-[130px] bottom-[93px] md:bottom-[12px] w-[60%] md:w-[45%] h-[300px] md:h-[350px] border-white z-20'></div>
                            <div className='border absolute right-[83px] md:right-[130px] bottom-[93px] md:bottom-[12px] w-[60%] md:w-[45%] h-[300px] md:h-[350px] border-black z-20'></div>
                            <img className='z-20 absolute right-24 md:right-[142px] bottom-20 md:bottom-0 w-[60%] md:w-[45%] h-[300px] md:h-[350px] ml-auto' src="https://img.freepik.com/premium-photo/create-apartments-living-room-open-style-picture-ai-generated-art_853163-3639.jpg?w=740" alt="" />
                        </div>
                    </div>

                    {/* <div className='absolute left-6'>
                        <img className='w-[42%]' src="https://img.freepik.com/free-photo/interior-design-with-photoframes-couch_23-2149385435.jpg?t=st=1710081164~exp=1710084764~hmac=b6beb977fa8e961793a857569a1cff9d0a9609243857b35fe3b26b23d3b05705&w=740" alt="" />
                    </div>

                    <div className='absolute left-6 bottom-0'>
                        <img className='w-[42%]' src="https://img.freepik.com/free-photo/modern-styled-entryway_23-2150695949.jpg?t=st=1710081146~exp=1710084746~hmac=451de2c81dc293a380a05db3b7cfff14dd96fdde219d11b604dcc081a2e93af8&w=740" alt="" />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Hero;