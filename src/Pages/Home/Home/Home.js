import React from 'react';
import Products from '../../ProductSections/Products/Products';
import Nevigetions from '../../Shared/Nevigetions/Nevigetions';
import Slider from '../Slider/Slider';
import Comment from '../../Comment/Comment';
import Footer from '../../Shared/Footer/Footer';
import CommentDisplay from '../../CommentDisplay/CommentDisplay';

const Home = () => {
    return (
        <div>
            <Nevigetions></Nevigetions>
            <Slider></Slider>
            <Products></Products>
            <Comment></Comment>
            <CommentDisplay></CommentDisplay>
            <Footer></Footer>
        </div>
    );
};

export default Home;