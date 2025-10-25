import React from 'react';

const Portfolio: React.FC = () => {
    return (
        <section className="portfolio">
            <h2 className="text-2xl font-bold mb-4">Our Portfolio</h2>
            <div className="portfolio-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Example portfolio item */}
                <div className="portfolio-item border rounded-lg p-4">
                    <h3 className="font-semibold">Project Title</h3>
                    <p className="text-gray-600">Brief description of the project.</p>
                </div>
                {/* Add more portfolio items as needed */}
            </div>
        </section>
    );
};

export default Portfolio;