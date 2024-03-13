import { useState } from 'react';
import AvailableBookings from './availableBookings/AvailableBookings';
import './Booking.css';

import Hero from './hero/Hero';


const Booking = () => {

    const [selected, setSelected] = useState(new Date());

    return (
        <div className='mx-5 lg:mx-14 mt-10 mb-32'>
            <Hero
                selected={selected}
                setSelected={setSelected}
            />
            <AvailableBookings
                selected={selected}
            />








            {/* <div className='text-center'>
                <h1 className='text-4xl md:text-[45px] lg:text-4xl text-[#182b02]  mt-20 font-serif leading-tight'>Available Slots For Home Decoration</h1>
            </div> */}


            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {
                    services.map((service, i) => {
                        return (
                            <div key={i} className=" text-center py-10 mb-5 border shadow-md rounded-md ">
                                <h1 className='text-[#182b02] text-2xl font-semibold'>Teeth Orthodontics</h1>
                                <p className='text-neutral-600 mb-5'>8:00 AM - 9:00 AM</p>
                                <button className='css-button-retro--black'>Book Now</button>
                            </div>
                        )
                    })
                }
            </div> */}
        </div>
    );
};

export default Booking;