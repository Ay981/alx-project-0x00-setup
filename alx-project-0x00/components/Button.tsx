import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button
      className={` ${styles} w-[161px] h-[50px] rounded-md  text-white font-semibold`}
    >
      {title}
    </button>
  );
};

export default Button;
