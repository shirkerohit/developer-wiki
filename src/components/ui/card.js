import React from 'react';

export function Card({ children, className }) {
    return <div className={`bg-white shadow rounded-lg ${className}`}>{children}</div>;
}

export function CardHeader({ children }) {
    return <div className="p-4 border-b flex flex-col">{children}</div>;
}

export function CardTitle({ children, className }) {
    return <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>;
}

export function CardDescription({ children }) {
    return <p className="text-gray-600 text-left mt-3">{children}</p>;
}

export function CardContent({ children }) {
    return <div className="p-4">{children}</div>;
}

export function CardFooter({ children, className }) {
    return <div className={`p-4 border-t ${className}`}>{children}</div>;
}