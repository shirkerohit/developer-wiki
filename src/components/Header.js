import { Library } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-white border-b">
            <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'>
                <Link to="/" className="text-gray-700 hover:text-gray-900">
                    <div className="flex items-center">
                        <Library className="h-8 w-8 text-blue-600" />
                        <h1 className="ml-2 text-2xl font-bold text-gray-900">DevWiki</h1>
                    </div>
                </Link>
                <div className="flex justify-end space-x-4">
                    <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
                    <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
                    <Link to="/contribution-guide" className="text-gray-700 hover:text-gray-900">Contribution Guide</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;