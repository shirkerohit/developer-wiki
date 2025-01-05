
import React from 'react';
import Header from './Header';

export default function Contact() {
    return (
        <>
            <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg text-gray-700">
                    If you have any questions, suggestions, or feedback, feel free to reach out to repository owner.
                </p>
            </div>
        </>
    );
}