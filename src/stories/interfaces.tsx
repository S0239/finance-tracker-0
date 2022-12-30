import React from "react";

export interface ButtonProps {
  onClick: () => void;
  classes?: string;
  children: React.ReactNode;
}
