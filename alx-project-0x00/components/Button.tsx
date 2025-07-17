import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`bg-[#4CAF50] text-white px-4 py-2 hover:bg-[#45a049] transition-all duration-300 ${styles}`}>
      {title}
    </button>
  );
};

export default Button;
