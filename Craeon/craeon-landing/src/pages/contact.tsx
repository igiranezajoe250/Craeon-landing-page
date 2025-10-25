import React from 'react';
import ContactSection from '../components/sections/Contact';
import { Meta } from '../seo/meta';

const ContactPage: React.FC = () => {
    return (
        <>
            <Meta title="Contact Us - Craeon" description="Get in touch with Craeon, a leading venture capital and financial firm." />
            <ContactSection />
        </>
    );
};

export default ContactPage;