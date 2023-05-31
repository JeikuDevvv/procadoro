import React from "react";
import Buttons from "./Buttons";
import States from "./States";
import Timer from "./Timer";

function Pomodoro() {
    return (
        <div className="flex flex-col items-center bg-customColor30/5 p-10">
            <States />
            <Timer />
            <Buttons />
        </div>
    );
}

export default Pomodoro;
