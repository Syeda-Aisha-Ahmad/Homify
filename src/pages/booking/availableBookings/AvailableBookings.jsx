import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import BookingModal from '../bookingModal/BookingModal';


const AvailableBookings = ({ selected }) => {

    const [bookingOptions, setBookingOptions] = useState([]);

    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setBookingOptions(data))
    }, [])

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className='text-center'>
                {/* {selected && <p className='font-md text-[#182b02s]'>You have selected: <span className='font-semibold'></span></p>} */}
                <h1 className='text-4xl md:text-[45px] lg:text-4xl text-[#182b02]  md:mt-20 font-serif leading-tight'>Available Services on {format(selected, 'PP')}</h1>
                <p className='text-lg text-neutral-600 mt-3'>Please select a service</p>
            </div>



            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    bookingOptions.map((service, i) => {
                        return (
                            <div key={service._id} className="box-style">
                                <h3 className='text-2xl font-medium mb-2'>{service.name}</h3>
                                <p>{service.slots.length > 0 ? service.slots[0] : 'Try Another Day'}</p>
                                <p className='font-medium text-sm mt-1'>{service.slots.length} {service.slots.length > 1 ? 'spaces' : 'space'} available</p>
                                <div className=''>
                                    <button onClick={showModal} className='text-[#182b02] bg-[#f2fce6] hover:bg-[#e9fad4] transition-all px-7 py-2 font-semibold text-sm rounded-sm mt-5'>Book Service</button>
                                    <BookingModal
                                        key={i}
                                        isModalOpen={isModalOpen}
                                        handleOk={handleOk}
                                        handleCancel={handleCancel}
                                        service={service}
                                        selected={selected}
                                    />
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    );
};

export default AvailableBookings;