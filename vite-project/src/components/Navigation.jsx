import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, ShoppingBag, Menu, X, Search } from 'lucide-react';

const Navigation = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="text-2xl font-extrabold tracking-tight text-gray-900">
                        <span className="text-pink-600">CHIC</span>+
                    </Link>

                    <nav className="hidden md:flex space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition duration-150 ease-in-out ${
                                    location.pathname.replace(/\/$/, '') === link.path 
                                        ? 'text-pink-600 border-b-2 border-pink-600' 
                                        : 'text-gray-700 hover:text-pink-600'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-4">
                        <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-pink-600 hidden sm:block" />
                        <Heart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-pink-600" />
                        <ShoppingBag className="w-5 h-5 text-gray-600 cursor-pointer hover:text-pink-600" />
                        
                        <button 
                            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100" 
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>
            
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute w-full bg-white shadow-xl`}>
                <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Navigation;