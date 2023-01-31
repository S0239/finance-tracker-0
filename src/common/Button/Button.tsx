import React from "react";

import { ButtonProps } from "../../Button/types";

const Button = (props: ButtonProps) => {
  const { onClick, clsx, children } = props;

  return (
    <button onClick={onClick} className={clsx ? clsx : ""}>
      {children}
    </button>
  );
};

export default Button;
