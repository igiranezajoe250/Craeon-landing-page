import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Portfolio from '../components/sections/Portfolio';
import Contact from '../components/sections/Contact';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
};

export default HomePage;