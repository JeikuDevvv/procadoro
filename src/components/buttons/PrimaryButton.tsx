import React from "react";

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const PrimaryButton: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button onClick={onClick}>
            <div className="items-center justify-center space-x-1 bg-customColor10 rounded-md p-1 shadow-md flex md:flex-initial cursor-pointer text-white font-normal font-poppins">
                <p className="text-xs">{text}</p>
            </div>
        </button>
    );
};

export default PrimaryButton;
