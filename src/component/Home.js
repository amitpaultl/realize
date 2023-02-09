import React from 'react';
import './Home.css'
import Corporate from './Page/Corporate/Corporate';
import Footer from './Page/Footer/Footer';
import Header from './Page/Header/Header';
import Hero from './Page/Hero/Hero';
import Offer from './Page/Offer/Offer';
import Price from './Page/Price/Price';
import Skills from './Page/Skills/Skills';
import Solutions from './Page/Solutions/Solutions';
import Ultimate from './Page/Ultimate/Ultimate';
import Works from './Page/Works/Works';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <Corporate></Corporate>
            <Ultimate></Ultimate>
            <Works></Works>
            <Offer></Offer>
            <Solutions></Solutions>
            <Skills></Skills>
            <Price></Price>
            <Footer></Footer>
        </div>
    );
};

export default Home;