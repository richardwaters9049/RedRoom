"use client";

import React from "react";
// import RedDoorPicSlider from "../components/  RedDoorPicSlider";
import VirtualM from "../components/VirtualM";

const page = () => {
    return (
        <div className="welcome-container w-full h-screen bg-red-600">
            <VirtualM />
            <div className="inner-container p-5 flex flex-col items-center justify-center">

                <div className="info-container flex flex-col gap-6 p-1 bg-black text-white bg-opacity-65 justify-center items-center w-screen h-screen">
                    <h1 className="text-9xl text-center py-6 font-creepy tracking-wide">Welcome..</h1>
                    <div className="para-container flex flex-col gap-16 p-5 text-2xl font-raven tracking-wide">
                        <p>You are a hacker that has been caught in the Red Room.</p>
                        <p>
                            To escape, you must answer a series of riddles correctly.
                        </p>
                        <p>
                            Each riddle
                            is worth 100 points, to escape you must score 1000 points.
                        </p>
                        <p>
                            Each time you get a riddle wrong, you lose 100 points and your
                            computer is damaged.
                        </p>

                        <p>If you lose all your points, you lose.</p>
                        <p>Now, are you ready to play?</p>

                        <div className="btn-container">
                            <button className="btn btn-primary bg-red-900 py-6 px-10 rounded-md text-3xl">Play?</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};
export default page;
