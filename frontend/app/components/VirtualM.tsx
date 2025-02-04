import React, { useState } from "react";

const VirtualM: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    // Function to start the virtual machine
    const startVM = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("http://127.0.0.1:8000/start_vm");
            const data = await response.json();
            console.log(data.message);
        } catch (error) {
            console.error("Error starting virtual machine:", error);
        }
        setIsLoading(false);
    };

    // Function to enable fullscreen mode
    const enableFullscreen = () => {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch((err) => {
                console.error("Fullscreen mode failed:", err);
            });
        }
        startVM(); // Start the virtual machine after fullscreen
    };

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-black text-red-500 text-2xl hidden">
            {isLoading ? (
                <p>Loading Virtual Machine...</p>
            ) : (
                <button
                    onClick={enableFullscreen}
                    className="bg-red-600 px-6 py-3 rounded-lg text-white text-lg"
                >
                    Enter Red Room
                </button>
            )}
        </div>
    );
};

export default VirtualM;
