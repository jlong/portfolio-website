import React, { ReactNode } from "react";
import clsx from "clsx";

const sizes = {
  h1: "text-5xl/tight font-bold",
  h2: "text-4xl/tight font-bold",
  h3: "text-2xl/tight font-bold",
  h4: "text-xl/tight font-bold",
};

export const Heading = ({
  as = "h1",
  styledAs = as,
  className,
  children,
}: {
  as: "h1" | "h2" | "h3" | "h4";
  styledAs: "h1" | "h2" | "h3" | "h4";
  className: string;
  children: ReactNode | ReactNode[];
}) => {
  const Component = as;
  return (
    <Component className={clsx("font-display", sizes[styledAs], className)}>
      {children}
    </Component>
  );
};

export const Eyebrow = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode | ReactNode[];
}) => {
  return (
    <div
      className={clsx(
        "font-body",
        "text-2xl",
        "font-normal",
        "mb-2",
        className,
      )}
    >
      {children}
    </div>
  );
};
