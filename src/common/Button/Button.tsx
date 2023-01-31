import React from "react";
import { ButtonProps } from "./types";
import clsx from "clsx";

const Button = (props: ButtonProps) => {
  const { onClick, className, children } = props;

  return (
    <button onClick={onClick} className={clsx("my-button", className)}>
      {children}
    </button>
  );
};

export default Button;
