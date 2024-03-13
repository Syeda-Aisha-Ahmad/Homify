import React from 'react';

import { Collapse } from 'antd';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
    {
        key: '1',
        label: 'This is panel header 1',
        children: <p>{text}</p>,
    },
    {
        key: '2',
        label: 'This is panel header 2',
        children: <p>{text}</p>,
    },
    {
        key: '3',
        label: 'This is panel header 3',
        children: <p>{text}</p>,
    },
];

const Recommendation = () => {

    const onChange = (key) => {
        console.log(key);
    };
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 itams-center mx-5 lg:mx-14 mt-20 mb-20 md:mb-0 md:h-[450px] lg:h-[500px] overflow-hidden'>
            {/* left */}
            <div className=' relative mb-[480px] md:mb-0'>
                <div className='border text-black absolute left-[12px] md:left-[12px] lg:left-[12px] top-[-12px] w-full md:w-11/12 lg:w-10/12 h-[500px] md:h-[450px] border-black '></div>
                <img className='w-full h-[500px] md:h-[450px] md:w-11/12 lg:w-10/12 absolute' src="https://img.freepik.com/free-photo/modern-styled-entryway_23-2150695949.jpg?t=st=1710081146~exp=1710084746~hmac=451de2c81dc293a380a05db3b7cfff14dd96fdde219d11b604dcc081a2e93af8&w=740" alt="" />
            </div>

            {/* right */}
            <div className='pt-12 md:pt-0 lg:pt-12'>
                <h1 className='text-5xl md:text-[45px] lg:text-6xl text-[#182b02] w-8/12 font-serif leading-tight'>Our Best Recommandation</h1>


                <div className='mt-10'>
                    <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
                </div>

            </div>
        </div>
    );
};

export default Recommendation;