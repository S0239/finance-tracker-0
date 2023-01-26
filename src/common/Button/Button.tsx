import React from "react";

import { ButtonProps } from "../interfaces";

const Button = (props: ButtonProps) => {
  const { onClick, classes, children } = props;

  return (
    <button onClick={onClick} className={classes ? classes : ""}>
      {children}
    </button>
  );
};

export default Button;
