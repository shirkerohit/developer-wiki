import React from 'react';

export function Badge({ children, variant }) {
    const variantClasses = {
        secondary: 'bg-gray-200 text-gray-800',
        // Add more variants as needed
    };

    return <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${variantClasses[variant]}`}>{children}</span>;
}