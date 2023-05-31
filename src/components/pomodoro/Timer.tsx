import React from "react";
import { Pomodoro } from "@/function/pomodoro";

interface TimerProps {
    text: string;
}

const Timer: React.FC<TimerProps> = ({ text }) => {
    return <h1 className="text-[100px] text-customColor10 ">{text}</h1>;
};

export default Timer;
