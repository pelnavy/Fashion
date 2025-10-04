import React, { useState } from 'react';
import { ProductCard } from '../components';
import { mockProducts } from '../data/mockProducts';

const ProductsPage = () => {
    const [filter, setFilter] = useState('All');
    
    const categories = ['All', ...new Set(mockProducts.map(p => p.category))];
    
    const filteredProducts = mockProducts.filter(product => 
        filter === 'All' || product.category === filter
    );
    
    return (
        <main className="container mx-auto py-10 px-4 min-h-[80vh]">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6 border-b pb-2">The Collection</h1>
            
            <div className="flex flex-wrap gap-3 mb-10">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition duration-150 ${
                            filter === cat 
                                ? 'bg-pink-600 text-white shadow-md' 
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            
            {filteredProducts.length === 0 && (
                <p className="text-center text-lg text-gray-600 mt-12">No items found in this category.</p>
            )}
        </main>
    );
};

export default ProductsPage;