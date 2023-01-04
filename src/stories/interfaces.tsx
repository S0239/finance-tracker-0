import React from "react";

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  classes?: string;
  icon?: JSX.Element;
}

export interface IconProps {
  iconLink: string;
}
