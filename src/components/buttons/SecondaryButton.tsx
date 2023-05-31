import React from "react";

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const SecondaryButton: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button>
            <div className="items-center justify-center space-x-1 bg-customColor30 rounded-md p-1 shadow-md flex md:flex-initial cursor-pointer text-black font-normal font-poppins">
                <p className="text-[10px]">{text}</p>
            </div>
        </button>
    );
};

export default SecondaryButton;
