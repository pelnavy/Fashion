import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
            <Link to={`/products/${product.id}`}>
                <div className="h-82 w-full overflow-hidden">
                     <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        onError={(e) => { 
                            e.target.onerror = null;
                            e.target.src = "https://placehold.co/600x800/f87171/ffffff?text=Image+Error"; 
                        }}
                    />
                </div>
                <div className="p-4">
                    <p className="text-xs font-semibold uppercase text-pink-600">{product.category}</p>
                    <h3 className="text-lg font-bold text-gray-800 mt-1 truncate">{product.name}</h3>
                    <p className="text-xl font-extrabold text-gray-900 mt-2">${product.price.toFixed(2)}</p>
                </div>
            </Link>  
        </div>
    );
};

export default ProductCard;