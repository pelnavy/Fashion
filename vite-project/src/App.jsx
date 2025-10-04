import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation, Footer } from './components';
import { HomePage, ProductsPage, ProductDetailPage, AboutPage } from './pages';

const App = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/products' },
        { name: 'About', path: '/about' },
    ];
    
    return (
        <Router> 
            <div className="flex flex-col min-h-screen font-sans bg-gray-50">
                <Navigation links={navLinks} />

                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/products" element={<ProductsPage />} />
                        <Route path="/products/:id" element={<ProductDetailPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="*" element={<div className="text-center py-20 text-xl text-gray-600">Page Not Found</div>} />
                    </Routes>
                </div>

                <Footer />
            </div>
        </Router>
    );
};

export default App;