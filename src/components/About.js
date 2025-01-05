
import React from 'react';
import Header from './Header';

export default function About() {
    return (
        <>
            <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <h1 className="text-3xl font-bold mb-4">About DevWiki</h1>
                <p className="text-lg text-gray-700">
                    DevWiki is a curated collection of resources for developers. Our goal is to provide a comprehensive
                    and up-to-date list of tools, documentation, courses, and hosting options to help developers in their
                    daily work.
                </p>
            </div>
        </>
    );
}