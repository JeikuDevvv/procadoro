"use client";

import React from "react";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";

import {
    StartPomodoro,
    StopPomodoro,
    ResetPomodoro,
} from "@/function/pomodoro";

function Buttons() {
    return (
        <div className="p-5">
            <PrimaryButton
                onClick={StartPomodoro}
                text="START"
                styles="text-[20px] p-2 text-bold font-bold"
            />
        </div>
    );
}

export default Buttons;
