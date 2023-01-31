import React from "react";

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  icon?: JSX.Element;
}