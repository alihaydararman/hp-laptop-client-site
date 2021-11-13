import React from 'react';
import Products from '../../ProductSections/Products/Products';
import Nevigetions from '../../Shared/Nevigetions/Nevigetions';
import Slider from '../Slider/Slider';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Nevigetions></Nevigetions>
            <Slider></Slider>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;