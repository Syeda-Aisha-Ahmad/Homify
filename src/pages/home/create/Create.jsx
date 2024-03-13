import React from 'react';

const Create = () => {
    return (
        <div className='px-5 lg:px-14 py-10 bg-[#f4faed] mt-10'>
            <h1 className='text-5xl lg:text-6xl text-[#182b02] lg:w-8/12 font-serif leading-tight'>Create Your Space</h1>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mt-10 lg:mt-20'>
                <div>
                    <h4 className='text-base font-semibold font-serif'>The strength of the building</h4>
                    <p className='text-neutral-500 text-xs mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quasi quo eligendi voluptatum unde rerum illo.</p>

                    <img src="https://img.freepik.com/premium-photo/home-interior_1037171-3583.jpg?w=740" alt="" />
                </div>

                <div className='hidden md:grid'>
                    <img className='mb-5' src="https://img.freepik.com/free-psd/modern-interior-design-living-room_176382-1265.jpg?t=st=1710144679~exp=1710148279~hmac=cfd151f5f11854d888f4d9c0f0a6b9032bb9ca803f861f1ec875a42c4c3a4631&w=740" alt="" />

                    <h4 className='text-base font-semibold font-serif'>The strength of the building</h4>
                    <p className='text-neutral-500 text-xs mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quasi quo eligendi voluptatum unde rerum illo.</p>

                </div>

                <div className='hidden lg:grid'>
                    <h4 className='text-base font-semibold font-serif'>The strength of the building</h4>
                    <p className='text-neutral-500 text-xs mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quasi quo eligendi voluptatum unde rerum illo.</p>

                    <img src="https://img.freepik.com/premium-photo/home-interior_1037171-3559.jpg?w=740" alt="" />
                </div>

                <div className='hidden lg:grid'>
                    <img className='mb-5' src="https://img.freepik.com/free-psd/interior-living-room-design_176382-1614.jpg?t=st=1710144688~exp=1710148288~hmac=f9bf9127e7d434b587c20eae3e4390bc1f33b1022fd46d64e393982ecd91be0f&w=740" alt="" />

                    <h4 className='text-base font-semibold font-serif'>The strength of the building</h4>
                    <p className='text-neutral-500 text-xs mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quasi quo eligendi voluptatum unde rerum illo.</p>

                </div>
            </div>
        </div>
    );
};

export default Create;