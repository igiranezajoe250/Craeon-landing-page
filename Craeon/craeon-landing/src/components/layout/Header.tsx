import React from 'react';
import Logo from '../common/Logo';
import Button from '../common/Button';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-white shadow">
            <Logo />
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <Button label="Get Started" />
        </header>
    );
};

export default Header;