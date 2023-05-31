import React from "react";

interface ButtonProps {
    text: string;
    onClick: () => void;
    styles: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({ text, styles, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`${styles} bg-customColor10 hover:bg-customColor30/10 text-white font-semibold hover:text-white border border-customColor10 hover:border-transparent rounded`}
        >
            {text}
        </button>
    );
};

export default PrimaryButton;
