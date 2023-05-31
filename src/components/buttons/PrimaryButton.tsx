import React from "react";

function PrimaryButton(props: { text: string }) {
    return (
        <button>
            <div className="items-center justify-center space-x-1 bg-customColor10 rounded-md p-1 shadow-md flex md:flex-initial cursor-pointer text-white font-normal font-poppins">
                <p className="text-xs">{props.text}</p>
            </div>
        </button>
    );
}

export default PrimaryButton;
