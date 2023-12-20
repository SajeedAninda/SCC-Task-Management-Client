import React from 'react';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import PeopleUsing from './PeopleUsing/PeopleUsing';

const Homepage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <PeopleUsing></PeopleUsing>
        </div>
    );
};

export default Homepage;