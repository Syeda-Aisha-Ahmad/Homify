import React from 'react';
import Create from './create/Create';
import Hero from './hero/Hero';
import Provide from './provide/Provide';
import Recommendation from './recomendation/Recommendation';
import Review from './review/Review';

const Home = () => {
    return (
        <div className='mt-24'>
            <Hero></Hero>
            <Provide></Provide>
            <Recommendation></Recommendation>
            <Create></Create>
            <Review></Review>
        </div>
    );
};

export default Home;