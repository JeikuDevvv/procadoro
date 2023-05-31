import React from "react";

interface ButtonProps {
    text: string;
    onClick: () => void;
    styles: string;
}

const SecondaryButton: React.FC<ButtonProps> = ({ text, styles, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-transparent text-customColor10 font-semibold py-2 px-4 border border-customColor10 rounded"
        >
            {text}
        </button>
    );
};

export default SecondaryButton;
