import React from 'react';
import Link from 'next/link';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to the HRP Finance App</h1>
            <p className="text-lg mb-8">Analyze financial data using the Hierarchical Risk Parity method and visualize it with interactive dendrograms.</p>
            <div className="flex space-x-4">
                <Link href="/upload">
                    <a className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Upload Data</a>
                </Link>
                <Link href="/dashboard">
                    <a className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Go to Dashboard</a>
                </Link>
            </div>
        </div>
    );
};

export default Home;