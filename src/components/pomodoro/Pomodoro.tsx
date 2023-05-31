import React from "react";
import Buttons from "./Buttons";
import States from "./States";
import Timer from "./Timer";

interface PomodoroProps {
    styles: string;
}

const Pomodoro: React.FC<PomodoroProps> = ({ styles }) => {
    return (
        <div className={styles}>
            <div className="flex flex-col items-center bg-customColor30/5 m-5 rounded-[30px] space-y-[10px] lg:w-[50%]">
                <States />
                <Timer />
                <Buttons />
            </div>
        </div>
    );
};

export default Pomodoro;
