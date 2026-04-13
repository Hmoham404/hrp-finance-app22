import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <header className="bg-white dark:bg-gray-800 shadow">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Financial Data Analysis</h1>
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 py-6">
                {children}
            </main>
            <footer className="bg-white dark:bg-gray-800 shadow">
                <div className="max-w-7xl mx-auto px-4 py-6 text-center">
                    <p className="text-gray-600 dark:text-gray-400">© 2023 Financial Data Analysis. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;