import React from "react";
import Buttons from "@/components/pomodoro/buttons";
import States from "@/components/pomodoro/states";
import Timer from "@/components/pomodoro/timer";

function Pomodoro() {
    return (
        <div>
            <States />
            <Timer />
            <Buttons />
        </div>
    );
}

export default Pomodoro;
