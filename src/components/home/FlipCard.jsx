import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FlipCard = ({ category }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <motion.div
            className="relative w-full h-72 transform-style-preserve-3d cursor-pointer"
            onClick={() => setFlipped(!flipped)}
        >
            <motion.div
                className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700"
                style={{
                    rotateY: flipped ? '180deg' : '0deg',
                }}
            >
                {/* Front of the card */}
                <div className="absolute w-full h-full bg-white rounded-lg shadow-lg backface-hidden p-6 flex flex-col justify-between">
                    <h3 className="text-xl font-semibold text-green-700">{category.title}</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                        {category.items.map((item, index) => (
                            <li key={index} className="text-sm">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Back of the card */}
                <div className="absolute w-full h-full bg-gray-200 backface-hidden rounded-lg">
                    <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default FlipCard;
