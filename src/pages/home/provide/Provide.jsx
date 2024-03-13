import React from 'react';

const Provide = () => {

    const info = [
        {
            title: "Communication",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum saepe rerum numquam in, minima ad rem amet asperiores? Perspiciatis fugiat sit voluptatum reiciendis esse beatae quas eius. Architecto, cumque voluptatum."
        },

        {
            title: "Design Your Space",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum saepe rerum numquam in, minima ad rem amet asperiores? Perspiciatis fugiat sit voluptatum reiciendis esse beatae quas eius. Architecto, cumque voluptatum."
        },

        {
            title: "Vision To Reality",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum saepe rerum numquam in, minima ad rem amet asperiores? Perspiciatis fugiat sit voluptatum reiciendis esse beatae quas eius. Architecto, cumque voluptatum."
        },
    ]
    return (

        <div className='relative'>
            <div className='border absolute top-[-12px] w-full h-[80px] border-black z-10'></div>
            <div className='bg-[#101d01] py-24 mt-12 md:mt-24 lg:mt-20 px-14 mb-10 z-20 relative'>
                <h1 className='text-4xl md:text-6xl text-[#f0f8e6] md:w-8/12 font-serif leading-tight'>We Provide You</h1>

                <div className='hidden lg:flex items-center justify-between gap-16 mt-10'>
                    {
                        info.map((inf, i) => {
                            return (
                                <div key={i} className="text-[#f0f8e6]">
                                    <h3 className='text-4xl mb-3 font-serif'>{inf.title}</h3>
                                    <p className=''>{inf.description}</p>
                                </div>
                            )
                        })
                    }
                </div>


                <div className='flex lg:hidden items-center justify-between gap-16 mt-10'>

                    <div className="text-[#f0f8e6]">
                        <h3 className='text-3xl mb-3 font-serif'>
                            Communication
                        </h3>
                        <p className=''>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum saepe rerum numquam in, minima ad rem amet asperiores? Perspiciatis fugiat sit voluptatum reiciendis esse beatae quas eius. Architecto, cumque voluptatum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Provide;