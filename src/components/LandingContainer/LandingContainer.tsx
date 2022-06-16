import React from "react";
import "./LandingContainer.css";

export const LandingContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="grid-layout">{children}</div>;
};
