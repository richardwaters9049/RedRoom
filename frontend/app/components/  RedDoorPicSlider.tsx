// components/RedDoorPicSlider.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const RedDoorPicSlider = () => {
    // List of images in the 'public/images/redroom-pics' folder
    const images = [
        '/images/redroom-pics/redroom.jpeg',
        '/images/redroom-pics/redroomchatGPT-1.jpeg',
        '/images/redroom-pics/scream-room.jpeg',
        '/images/redroom-pics/scream-room2.jpeg',
        // Add more images as necessary
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Go to the next image
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Go to the previous image
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Auto-slide the images every 3 seconds
    useEffect(() => {
        const intervalId = setInterval(nextImage, 3000);
        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="image relative w-full max-w-xl mx-auto overflow-hidden">
            <div className="flex flex-col items-center justify-center gap-10 p-5">

                <h1>Welcome to the Red Room</h1>
                <div className="info-container flex flex-col gap-5 p-5">
                    <p>You are a hacker that has been caught in the Red Room</p>
                    <p>To escape, you must answer a series of riddles correctly, each riddle is worth 100 points, to escape you must score 1000 points</p>
                    <p>Each time you get a riddle wrong, you lose 100 points and your computer is damaged</p>
                    <p>Now, you ready to play?</p>
                </div>

            </div>
            {/* Image */}
            <div className="relative w-full h-72">
                <Image
                    src={images[currentIndex]}
                    alt={`Red Door Pic ${currentIndex + 1}`}
                    width={800}
                    height={400}
                    className="w-full h-full object-contain transition-transform duration-1000 ease-in-out"
                />
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevImage}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full shadow-lg hover:bg-opacity-75 focus:outline-none"
            >
                &lt;
            </button>
            <button
                onClick={nextImage}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full shadow-lg hover:bg-opacity-75 focus:outline-none"
            >
                &gt;
            </button>

            {/* Optional: Add a Dot Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-white' : 'bg-gray-500'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default RedDoorPicSlider;
