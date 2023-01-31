import React from "react";

import { IconProps } from "../../../Icon/types";

const Icon = (IconProps: IconProps) => {
  const { iconLink } = IconProps;

  return <img src={iconLink} alt="icon" />;
};

export default Icon;
