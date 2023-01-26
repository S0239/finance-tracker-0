import React from "react";

import { ButtonProps } from "../interfaces";

const Button = (props: ButtonProps) => {
  const { onClick, clsx, children } = props;

  return (
    <button onClick={onClick} className={clsx ? clsx : ""}>
      {children}
    </button>
  );
};

export default Button;
