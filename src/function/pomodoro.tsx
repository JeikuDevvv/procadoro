"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import React, { useState, useEffect } from "react";

function Countdown() {
    const [time, setTime] = useState(1500); // 1500 seconds = 25 minutes
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (!isActive && time === 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, time]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
            .toString()
            .padStart(2, "0")}`;
    };

    const handleStartStop = () => {
        setIsActive((prevIsActive) => !prevIsActive);
    };

    const handleReset = () => {
        setTime(1500);
        setIsActive(false);
    };

    return (
        <div>
            <div className="text-[100px] text-customColor10">
                {formatTime(time)}
            </div>
            <div>
                <PrimaryButton
                    onClick={handleStartStop}
                    text={`${isActive ? "Stop" : "Start"}`}
                />
                <SecondaryButton onClick={handleReset} text="Reset" />
            </div>
        </div>
    );
}

export default Countdown;
