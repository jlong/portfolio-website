import React, { ReactNode } from "react";
import clsx from "clsx";

export const ScrollArea = ({
  className,
  direction,
  speed,
  children,
}: {
  className: string;
  direction: "left";
  speed: number;
  children: ReactNode | ReactNode[];
}) => {
  return <div className={clsx("flex", "gap-4", className)}>{children}</div>;
};
