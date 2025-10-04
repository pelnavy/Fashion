import React from 'react';
import { Info } from 'lucide-react';

const AboutPage = () => {
    return (
        <main className="container mx-auto py-10 px-4 min-h-[80vh] flex flex-col items-center">
            <div className="max-w-4xl bg-white p-8 rounded-xl shadow-2xl">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4 flex items-center">
                    <Info className="w-8 h-8 mr-2 text-pink-600" /> Our Story
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Founded on the principle of accessible elegance, CHIC+ brings you the latest fashion from sustainable sources.
                </p>

                <div className="space-y-6 text-gray-700">
                    <p>
                        We believe that style should not come at the cost of the planet. Every piece in our collection is carefully selected for its quality, ethical production, and timeless appeal. Our journey started in a small workshop, and today, we serve a global community that values conscious fashion.
                    </p>
                    <p>
                        Our mission is simple: to empower you to express your unique personality through clothing that feels good, looks great, and does good. From the raw materials to the final stitch, transparency and sustainability guide every decision we make.
                    </p>
                    <p className="font-semibold text-pink-600 pt-4">
                        Thank you for being part of the CHIC+ movement.
                    </p>
                </div>
            </div>
        </main>
    );
};
export default AboutPage;