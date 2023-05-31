"use client";

import React from "react";
import Avatar from "react-avatar";
import PrimaryButton from "../buttons/PrimaryButton";

function Header() {
    return (
        <header>
            <div className="flex md:flex-row items-center space-x-1 bg-transparent rounded-b-2xl">
                <p className="text-xl font-poppins font-semibold tracking-wide p-5 text-customColor10 lg:ml-[550px]">
                    procadoro.
                </p>
                <div className="flex item-center space-x-2 flex-1 justify-end p-5 lg:justify-center">
                    <PrimaryButton
                        text="Settings"
                        onClick={() => console.log("Settings Open!")}
                        styles="font-poppins text-[12px] px-1"
                    />
                    <Avatar name="jeiku dev" round size="25" />
                </div>
            </div>
            <p></p>
        </header>
    );
}

export default Header;
