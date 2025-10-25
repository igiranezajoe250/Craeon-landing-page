import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const About = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>About Craeon</h1>
                <p>
                    Craeon is a leading venture capital and financial firm dedicated to fostering innovation and supporting entrepreneurs. Our mission is to empower visionary founders and help them turn their ideas into successful businesses.
                </p>
                <p>
                    With a team of experienced professionals, we provide not only capital but also strategic guidance and resources to help our portfolio companies thrive in a competitive landscape.
                </p>
                <p>
                    At Craeon, we believe in building long-term partnerships and are committed to driving growth and creating value for our investors and the communities we serve.
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default About;