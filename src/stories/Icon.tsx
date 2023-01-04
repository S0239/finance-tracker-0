import React from "react";

import { IconProps } from "./interfaces";

const Icon = (IconProps: IconProps) => {
  const { iconLink } = IconProps;

  return <img src={iconLink} alt="icon" />;
};

export default Icon;
