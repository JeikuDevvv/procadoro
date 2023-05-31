"use client";

import React from "react";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";

function Buttons() {
    function nani() {
        console.log("test");
    }
    return (
        <div className="p-5">
            <PrimaryButton
                onClick={nani}
                text="START"
                styles="text-[20px] p-2 text-bold font-bold"
            />
        </div>
    );
}

export default Buttons;
