import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center px-6 py-2 bg-black text-white rounded-lg space-x-2 hover:opacity-90 active:scale-95"
      style={{ fontSize: '15px', fontWeight: 600, lineHeight: '18px' }}
    >
      {/* QR Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 3h6v6H3V3zm12 0h6v6h-6V3zM3 15h6v6H3v-6zm12 6v-6h6v6h-6zm-6-3H9v-3h3v3zm0-12H9v3h3V6zm6 6h3v3h-3v-3zm0 0h-3v3h3v-3zm-6 0h-3v3h3v-3zm0 0h3v-3h-3v3z"
        />
      </svg>
      <span>{text}</span>
    </button>
  );
};

export default Button;
