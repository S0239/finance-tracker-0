import React from "react";

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  clsx?: string;
  icon?: JSX.Element;
}

export interface IconProps {
  iconLink: string;
}
