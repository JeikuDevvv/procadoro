"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Timer from "@/components/pomodoro/Timer";
import React, { useState, useEffect } from "react";

interface PomodoroProps {
    styles: string;
}

export const Pomodoro: React.FC<PomodoroProps> = ({ styles }) => {
    const [timeRemaining, setTimeRemaining] = useState(1500); // 1500 seconds = 25 minutes
    const [isRunning, setIsRunning] = useState(false);
    const [isBreak, setIsBreak] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isRunning && timeRemaining > 0) {
            interval = setInterval(() => {
                setTimeRemaining((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeRemaining === 0) {
            handlePomodoroComplete();
        }

        return () => clearInterval(interval);
    }, [isRunning, timeRemaining]);

    const handleToggle = () => {
        setIsRunning((prevState) => !prevState);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTimeRemaining(1500);
        setIsBreak(false);
    };

    const handlePomodoroComplete = () => {
        setIsRunning(false);
        setIsBreak(true);

        if (!isBreak) {
            setTimeRemaining(300); // 300 seconds = 5 minutes for short break
        } else {
            setTimeRemaining(1500); // 1500 seconds = 25 minutes for next pomodoro session
            setIsBreak(false);
        }
    };

    function formatTime(seconds: number) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
            .toString()
            .padStart(2, "0")}`;
    }

    return (
        <div className={styles}>
            <Timer text={`${formatTime(timeRemaining)}`} />
            <div className="flex space-x-2">
                <PrimaryButton
                    onClick={handleToggle}
                    text={`${isRunning ? "STOP" : "START"}`}
                    styles="px-4"
                />
                <SecondaryButton
                    onClick={handleReset}
                    text={`RESET`}
                    styles=""
                />
            </div>
        </div>
    );
};
