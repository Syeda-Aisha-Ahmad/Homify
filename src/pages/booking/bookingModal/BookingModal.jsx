import React from 'react';
import { Button, Modal } from 'antd';
import { format } from 'date-fns';
import { Select, Space } from 'antd';

const BookingModal = ({ isModalOpen, handleOk, handleCancel, service, selected }) => {
    const date = format(selected, 'PP');

    return (
        <div>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <form >

                    <div className="">
                        <div className="space-y-4">
                            <h1 className="text-center text-4xl font-serif font-semibold text-[#182b02]">{service.name}</h1>
                            <hr />
                            <div className="flex items-center border-2  py-2 px-3 rounded-md mb-4">
                                <input className="pl-2  outline-none border-none w-full" type="text" name="date" value={date} readOnly />
                            </div>

                            <div className="flex items-center rounded-md border-2 py-2 px-3">
                                {/* <input className="pl-2 bg-[#f4ffe9] outline-none border-none w-full" type="text" name="pass" id="" value={service.slots} /> */}
                                <select className="select select-bordered w-full focus:outline-none">
                                    <option disabled selected>Select a Time Slot</option>
                                    {
                                        service.slots.map(slot =>
                                            <option value={slot}>{slot}</option>
                                        )
                                    }
                                </select>
                            </div>

                            <div className="flex items-center border-2 py-2 px-3 rounded-md">
                                <input className="pl-2 outline-none border-none w-full" type="text" name="fullName" id="" placeholder="Full Name" />
                            </div>

                            <div className="flex items-center border-2 py-2 px-3 rounded-md">
                                <input className="pl-2 outline-none border-none w-full" type="password" name="pass" id="" placeholder="Phone Number" />
                            </div>

                            <div className="flex items-center border-2 py-2 px-3 rounded-md">
                                <input className="pl-2 outline-none border-none w-full" type="email" name="email" id="" placeholder="Email" />
                            </div>
                        </div>


                        <button className='css-button-retro--black w-full mt-5'>Submit</button>
                        <hr />


                    </div>

                </form>
            </Modal>
        </div>
    );
};

export default BookingModal;