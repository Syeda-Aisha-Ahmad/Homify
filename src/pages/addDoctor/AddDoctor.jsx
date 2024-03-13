import React from 'react';

const AddDoctor = () => {
    return (
        <div class="bg-[#f4faed] min-h-screen">
            <div class="hidden md:fixed bg-white text-blue-800 px-10 py-1 z-10 w-full">
                <div class="flex items-center justify-between py-2 text-5x1">
                    <div class="font-bold text-neutral-500 text-xl">Admin <span class="text-[#182b02]">Panel</span></div>
                    <div class="flex items-center text-gray-500">
                        <span class="material-icons-outlined p-2">search</span>
                        <span class="material-icons-outlined p-2">notifications</span>
                        <div class="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 ml-2" ></div>
                    </div>
                </div>
            </div>

            <div class="flex flex-row pt-24 lg:px-10 pb-4">
                <div class="lg:w-3/12 mr-6 hidden lg:grid">
                    <div class="bg-white rounded-sm h-screen shadow-lg mb-6 px-2 py-4">
                        <div href="" class="inline-block bg-[#b1c798] hover:bg-[#97af7c] transition-all py-2 px-2 text-white rounded-sm font-semibold my-1 w-full">
                            All Users
                        </div>

                        <div href="" class="inline-block bg-[#b1c798] hover:bg-[#97af7c] transition-all py-2 px-2 text-white rounded-sm font-semibold my-1 w-full">
                            Add a Doctor
                        </div>

                        <div href="" class="inline-block bg-[#b1c798] hover:bg-[#97af7c] transition-all py-2 px-2 text-white rounded-sm font-semibold my-1 w-full">
                            Manage Doctors
                        </div>

                        <div href="" class="inline-block bg-[#b1c798] hover:bg-[#97af7c] transition-all py-2 px-2 text-white rounded-sm font-semibold my-1 w-full">
                            Home
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

                    <div class="flex items-center justify-center p-12 ">
                        <div class="mx-auto w-full max-w-[550px] bg-white py-8 px-20">
                            <form>
                                <div class="mb-5">
                                    <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                                        Full Name
                                    </label>
                                    <input type="text" name="name" id="name" placeholder="Full Name"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>

                                <div class="mb-5">
                                    <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
                                        Email Address
                                    </label>
                                    <input type="email" name="email" id="email" placeholder="Enter your email"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>


                                <div class="w-[400px] relative border-2 border-gray-300 border-dashed rounded-lg p-6 mb-5" id="dropzone">
                                    <input type="file" class="absolute inset-0 w-full h-full opacity-0 z-50" />
                                    <div class="text-center">
                                        <img class="mx-auto h-12 w-12 opacity-50" src="https://www.svgrepo.com/show/357902/image-upload.svg" alt="" />

                                        <h3 class="mt-2 text-sm font-medium text-neutral-500">
                                            <label for="file-upload" class="relative cursor-pointer">
                                                <span>Drag and drop</span>
                                                <span class="text-[#182b02]"> or browse </span>
                                                <span>to upload</span>
                                                <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                                            </label>
                                        </h3>
                                        <p class="mt-1 text-xs text-gray-500">
                                            PNG, JPG, GIF up to 10MB
                                        </p>
                                    </div>

                                    <img src="" class="mt-4 mx-auto max-h-40 hidden" id="preview" />
                                </div>

                                <div>
                                    <button className='css-button-retro--black w-full'>Add</button>
                                </div>
                            </form>
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

export default AddDoctor;