import React from "react";

import { ButtonProps } from "../../Button/types";

const Button = (props: ButtonProps) => {
  const { onClick, className, children } = props;

  return (
    <button onClick={onClick} className={className ? className : ""}>
      {children}
    </button>
  );
};

export default Button;
