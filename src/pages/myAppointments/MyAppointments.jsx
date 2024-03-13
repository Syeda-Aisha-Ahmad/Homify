import React from 'react';

const MyAppointments = () => {
    return (
        <div class="bg-[#f4faed] min-h-screen">
            {/* <div class=" md:fixed bg-white text-blue-800 px-10 py-1 z-10 w-full">
                <div class="flex items-center justify-between py-2 text-5x1">
                    <div class="font-bold text-neutral-500 text-xl">Admin <span class="text-[#182b02]">Panel</span></div>
                    <div class="flex items-center text-gray-500">
                        <span class="material-icons-outlined p-2">search</span>
                        <span class="material-icons-outlined p-2">notifications</span>
                        <div class="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 ml-2" ></div>
                    </div>
                </div>
            </div> */}

            <div class="flex flex-row pt-10 lg:px-10 pb-4">
                <div class="lg:w-3/12 mr-6 hidden lg:grid">
                    <div class="bg-white rounded-sm h-screen shadow-lg mb-6 px-2 py-4">
                        <div href="" class="inline-block bg-[#b1c798] hover:bg-[#97af7c] transition-all py-2 px-2 text-white rounded-sm font-semibold my-4 w-full">
                            My Appointments
                        </div>
                    </div>

                </div>

                <div class="md:w-11/12 lg:w-10/12 mx-auto">
                    <div class="flex">
                        <div class="bg-no-repeat md:flex items-center justify-between bg-[#b1c798] rounded-sm w-full p-6" >
                            <p class="text-4xl text-white">Welcome <br /><strong>Asha Mendela</strong></p>
                            <span class="bg-white text-lg font-semibold text-[#182b02] inline-block rounded-full px-8 py-3 mt-5 md:mt-0">My Total Appointments <span className='bg-[#b1c798] text-white py-2 px-4 rounded-full ml-2'>5</span></span>
                        </div>

                        {/* <div class="bg-no-repeat bg-orange-200 border border-orange-300 rounded-sm w-5/12 ml-2 p-6">
                            <p class="text-5xl text-indigo-900">Inbox <br /><strong>23</strong></p>
                            <a href="" class="bg-orange-300 text-xl text-white underline hover:no-underline inline-block rounded-full mt-12 px-8 py-2"><strong>See messages</strong></a>
                        </div> */}
                    </div>

                    <div className='flex items-center justify-between md:pr-4  mt-10'>
                        <h3 className='text-2xl text-[#182b02]'>My Appointment</h3>
                        <p className='px-3 py-2 bg-white shadow-lg border border-[#dde7d1]'>May 10, 2024</p>
                    </div>

                    {/* medium, large */}
                    <div class="hidden md:flex flex-col mt-5">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <table class="min-w-full">
                                        <thead class="border-b">
                                            <tr className='bg-[#b1c798]'>
                                                <th scope="col" class="text-base font-medium text-white px-6 py-4 text-left">no</th>
                                                <th scope="col" class="text-base font-medium text-white px-6 py-4 text-left">Name</th>
                                                <th scope="col" class="text-base font-medium text-white px-6 py-4 text-left">Serive</th>
                                                <th scope="col" class="text-base font-medium text-white px-6 py-4 text-left">Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="bg-white border-b">
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                                <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">John Doe</td>
                                                <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">Home Decoration</td>
                                                <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">08:30 AM - 09:00 AM</td>
                                            </tr>
                                            <tr class="bg-white border-b">
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                                <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">John Doe</td>
                                                <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">Home Decoration</td>
                                                <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">08:30 AM - 09:00 AM</td>
                                            </tr>
                                            <tr class="bg-white border-b">
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                                                <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">John Doe</td>
                                                <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">Home Decoration</td>
                                                <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">08:30 AM - 09:00 AM</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* small */}
                    <div class="grid grid-cols-1 md:hidden h-64 mt-6 ">
                        <div class="bg-white rounded-sm shadow-lg px-6 py-10 mb-4 text-center">
                            <h3 className='text-2xl font-semibold text-[#182b02] '>John Doe</h3>
                            <p className='text-neutral-500 text-lg mt-2 mb-1'>Home Decoration</p>
                            <p>08:30 AM - 09:00 AM</p>
                        </div>

                        <div class="bg-white rounded-sm shadow-lg px-6 py-10 mb-4 text-center">
                            <h3 className='text-2xl font-semibold text-[#182b02] '>John Doe</h3>
                            <p className='text-neutral-500 text-lg mt-2 mb-1'>Home Decoration</p>
                            <p>08:30 AM - 09:00 AM</p>
                        </div>

                        <div class="bg-white rounded-sm shadow-lg px-6 py-10 mb-4 text-center">
                            <h3 className='text-2xl font-semibold text-[#182b02] '>John Doe</h3>
                            <p className='text-neutral-500 text-lg mt-2 mb-1'>Home Decoration</p>
                            <p>08:30 AM - 09:00 AM</p>
                        </div>

                        <div class="bg-white rounded-sm shadow-lg px-6 py-10 mb-4 text-center">
                            <h3 className='text-2xl font-semibold text-[#182b02] '>John Doe</h3>
                            <p className='text-neutral-500 text-lg mt-2 mb-1'>Home Decoration</p>
                            <p>08:30 AM - 09:00 AM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAppointments;