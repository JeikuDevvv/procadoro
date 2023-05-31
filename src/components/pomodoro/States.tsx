"use client";

import React from "react";
import SecondaryButton from "../buttons/SecondaryButton";
import {
    PomodoroState,
    ShortBreakState,
    LongBreakState,
} from "@/function/pomodoro";

function States() {
    return (
        <div className="p-5">
            <div className="space-x-1">
                <SecondaryButton
                    text="pomodoro"
                    onClick={PomodoroState}
                    styles=""
                />
                <SecondaryButton
                    text="short break"
                    onClick={ShortBreakState}
                    styles=""
                />
                <SecondaryButton
                    text="long break"
                    onClick={LongBreakState}
                    styles=""
                />
            </div>
        </div>
    );
}

export default States;
