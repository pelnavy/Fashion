import React from 'react';
import ProductCard from './ProductCard';

const ProductsGrid = () => {
    // Sample products data - replace with your actual data
    const products = [
        {
            id: 1,
            name: "Product 1",
            price: 29.99,
            category: "Electronics",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
        },
        {
            id: 2,
            name: "Product 2",
            price: 49.99,
            category: "Clothing",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
        },
        {
            id: 3,
            name: "Product 3",
            price: 19.99,
            category: "Home",
            image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500"
        },
        {
            id: 4,
            name: "Product 4",
            price: 39.99,
            category: "Sports",
            image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500"
        },
        {
            id: 5,
            name: "Product 5",
            price: 89.99,
            category: "Electronics",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
        },
        {
            id: 6,
            name: "Product 6",
            price: 15.99,
            category: "Books",
            image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsGrid;