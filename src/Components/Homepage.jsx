import React from 'react';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import PeopleUsing from './PeopleUsing/PeopleUsing';
import Footer from './Footer/Footer';

const Homepage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <PeopleUsing></PeopleUsing>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;