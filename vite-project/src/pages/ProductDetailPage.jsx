import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Heart, ChevronLeft } from 'lucide-react';
import { mockProducts } from '../data/mockProducts';

const ProductDetailPage = () => {
    const { id } = useParams();
    const product = mockProducts.find(p => p.id === id);
    const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
    const [selectedColor, setSelectedColor] = useState(product?.colors[0]);

    if (!product) {
        return (
            <div className="container mx-auto py-20 px-4 text-center min-h-[80vh]">
                <h1 className="text-4xl font-bold text-red-600">404 - Product Not Found</h1>
                <p className="mt-4 text-gray-600">The item you are looking for does not exist.</p>
                <Link to="/products" className="mt-6 inline-flex items-center text-pink-600 hover:text-pink-800 font-medium">
                    <ChevronLeft className="w-5 h-5 mr-1" /> Back to Products
                </Link>
            </div>
        );
    }
    
    return (
        <main className="container mx-auto py-10 px-4 min-h-[80vh]">
            <Link to="/products" className="inline-flex items-center text-gray-600 hover:text-pink-600 mb-6 transition">
                <ChevronLeft className="w-4 h-4 mr-1" /> Back to Products
            </Link>

            <div className="flex flex-col lg:flex-row gap-10 bg-white p-6 md:p-10 rounded-xl shadow-2xl">
                <div className="lg:w-1/2">
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-auto object-cover rounded-lg shadow-xl"
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x800/f87171/ffffff?text=Image+Error"; }}
                    />
                </div>

                <div className="lg:w-1/2">
                    <p className="text-sm font-semibold uppercase text-pink-600 mb-1">{product.category}</p>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                    <p className="text-3xl font-extrabold text-pink-700 mb-6">${product.price.toFixed(2)}</p>

                    <p className="text-gray-700 mb-8 leading-relaxed">{product.description}</p>
                    
                    <div className="mb-6">
                        <h3 className="font-semibold text-gray-800 mb-2">Size: <span className="text-pink-600">{selectedSize}</span></h3>
                        <div className="flex gap-3">
                            {product.sizes.map(size => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-10 h-10 border rounded-full font-medium transition duration-150 ${
                                        selectedSize === size 
                                            ? 'bg-gray-900 text-white border-gray-900 shadow-md' 
                                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="font-semibold text-gray-800 mb-2">Color: <span className="text-pink-600">{selectedColor}</span></h3>
                        <div className="flex gap-3">
                            {product.colors.map(color => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`p-1 border-2 rounded-full transition duration-150 ${
                                        selectedColor === color ? 'border-pink-600' : 'border-transparent'
                                    }`}
                                >
                                    <div 
                                        className="w-8 h-8 rounded-full shadow-inner" 
                                        style={{ backgroundColor: color.toLowerCase().replace(/\s/g, '').replace('wash', '') }}
                                        title={color}
                                    ></div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex-1 flex items-center justify-center bg-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-pink-700 transition duration-300 transform hover:scale-[1.01]">
                            <ShoppingBag className="w-5 h-5 mr-2" /> Add to Cart
                        </button>
                        <button className="sm:w-auto p-3 bg-white text-gray-900 border border-gray-300 rounded-full hover:bg-gray-100 transition duration-300">
                            <Heart className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductDetailPage;