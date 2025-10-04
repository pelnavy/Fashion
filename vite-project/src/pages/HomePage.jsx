import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <main className="min-h-[80vh] bg-gray-50">
            <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center rounded-b-xl shadow-xl" 
                style={{ backgroundImage: "url('https://placehold.co/1920x1080/fbcfe8/be185d?text=New+Collection+2025')" }}>
                <div className="absolute inset-0 bg-black/40 rounded-b-xl"></div>
                <div className="z-10 text-center p-6">
                    <p className="text-xl font-light text-pink-100 sm:text-2xl mb-12 tracking-widest uppercase">Introducing</p>
                    <h1 className="text-8xl sm:text-8xl font-black text-white leading-tight mb-40">The Seasonal Drop</h1>
                    <Link to="/products" className="mt-20 inline-block bg-pink-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 hover:bg-pink-700 transition duration-300">
                        Shop Now
                    </Link>
                </div>
            </section>

            <section className="container mx-auto py-16 px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Shop By Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {['Dresses', 'Outerwear', 'Bottoms', 'Accessories'].map((category, index) => (
                        <Link 
                            key={index}
                            to="/products"
                            className="relative overflow-hidden rounded-xl shadow-md h-48 group cursor-pointer"
                        >
                            <img 
                                src={`https://placehold.co/600x400/fff/${(index % 4 === 0) ? 'ef4444' : (index % 4 === 1) ? '3b82f6' : (index % 4 === 2) ? '10b981' : 'f97316'}?text=${category}`} 
                                alt={category} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/60">
                                <span className="text-white text-xl font-semibold tracking-wider uppercase">{category}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default HomePage;