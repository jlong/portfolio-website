import React, { ReactNode } from "react";
import clsx from "clsx";

export const BigQuote = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode | ReactNode[];
}) => {
  return (
    <blockquote
      className={clsx("flex", "flex-col", "gap-4", "prose", className)}
    >
      {children}
    </blockquote>
  );
};
