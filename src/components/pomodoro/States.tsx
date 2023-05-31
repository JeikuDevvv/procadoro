import React from "react";
import SecondaryButton from "../buttons/SecondaryButton";

function States() {
    return (
        <div>
            <div className="space-x-1">
                <SecondaryButton
                    text="pomodoro"
                    onClick={() => console.log("pomodoro")}
                />
                <SecondaryButton
                    text="short break"
                    onClick={() => console.log("short")}
                />
                <SecondaryButton
                    text="long break"
                    onClick={() => console.log("long")}
                />
            </div>
        </div>
    );
}

export default States;
