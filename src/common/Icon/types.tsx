import React from "react";

type IconComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

export interface IconProps {
  component: IconComponent;
}
