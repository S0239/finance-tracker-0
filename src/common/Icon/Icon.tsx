import React from "react";

import { IconProps } from "./types";

const Icon = ({ component: IconComponent }: IconProps) => {
  return (
    <span>
      <IconComponent />;
    </span>
  );
};

export default Icon;
