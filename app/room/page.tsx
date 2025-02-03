import React from 'react'

const page = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-10 p-5">
            <h1>Welcome to the Red Room</h1>
            <div className="info-container flex flex-col gap-5 p-5">
                <p>You are a hacker that has been caught in the Red Room</p>
                <p>To escape, you must answer a series of riddles correctly, each riddle is worth 100 points, to escape you must score 1000 points</p>
                <p>Each time you get a riddle wrong, you lose 100 points and your computer is damaged</p>
                <p>Now, you ready to play?</p>
            </div>

        </div>
    )
}

export default page