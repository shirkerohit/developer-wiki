
import React from 'react';
import Header from './Header';

export default function ContributionGuide() {
    return (
        <>
            <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <h1 className="text-3xl font-bold mb-4">Contribution Guide</h1>
                <p className="text-lg text-gray-700">
                    We welcome contributions from the community! If you would like to contribute to DevWiki, please follow
                    our contribution guidelines. You can find the guidelines on our
                    <a href="https://github.com/devwiki/contribution-guide" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800"> GitHub repository</a>.
                </p>
            </div>
        </>
    );
}