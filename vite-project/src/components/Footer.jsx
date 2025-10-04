import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-12">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-pink-400">Shop</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>New Arrivals</li>
                            <li>Sale</li>
                            <li>Dresses</li>
                            <li>Outerwear</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-pink-400">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link to="/about">About Us</Link></li>
                            <li>Careers</li>
                            <li>Contact</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-pink-400">Support</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>FAQ</li>
                            <li>Shipping & Returns</li>
                            <li>Size Guide</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-pink-400">Connect</h4>
                        <p className="text-sm text-gray-400">Join our newsletter for exclusive offers.</p>
                        <div className="mt-2 flex p-2">
                            <input 
                                type="email" 
                                placeholder="Your email" 
                                className="p-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"/>
                            <button className="bg-pink-600 p-2 rounded-r-md hover:bg-pink-700 transition duration-150">Sign Up</button>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} CHIC+. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;