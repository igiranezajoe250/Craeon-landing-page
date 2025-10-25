import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero bg-blue-500 text-white py-20">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl font-bold mb-4">Welcome to Craeon</h1>
                <p className="text-lg mb-8">Empowering your financial future with innovative solutions.</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
        </section>
    );
};

export default Hero;