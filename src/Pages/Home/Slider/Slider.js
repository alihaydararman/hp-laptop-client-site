import { Container } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <div>
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ height: '500px' }}
                            src="https://i.ytimg.com/vi/8Jn5m7d1-g0/maxresdefault.jpg"
                            alt="First slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ height: '500px' }}
                            src="https://www.aarscomputers.com/wp-content/uploads/2016/10/AARS-Hp_Laptop.jpg"
                            alt="Second slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ height: '500px' }}
                            src="https://demo.appifylab.com/Techdotcom/img/hp-auth.jpg"
                            alt="Third slide"
                        />


                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
};

export default Slider;