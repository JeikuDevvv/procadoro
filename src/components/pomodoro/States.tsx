"use client";

import React from "react";
import SecondaryButton from "../buttons/SecondaryButton";

function States() {
    return (
        <div className="p-5">
            <div className="space-x-1">
                <SecondaryButton
                    text="pomodoro"
                    onClick={() => console.log("dawd")}
                    styles=""
                />
                <SecondaryButton
                    text="short break"
                    onClick={() => console.log("dawd")}
                    styles=""
                />
                <SecondaryButton
                    text="long break"
                    onClick={() => console.log("dawd")}
                    styles=""
                />
            </div>
        </div>
    );
}

export default States;
