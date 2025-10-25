import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-12 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
                <p className="text-center mb-8">We'd love to hear from you! Please fill out the form below to get in touch.</p>
                <form className="max-w-lg mx-auto bg-white p-6 rounded shadow-md">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea id="message" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md p-2" required></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;