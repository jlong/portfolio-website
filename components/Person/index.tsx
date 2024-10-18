import React, { ReactNode } from "react";
import clsx from "clsx";

export const Person = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode | ReactNode[];
}) => {
  return <div className={clsx("flex", "gap-1.5", className)}>{children}</div>;
};

export const PersonDetails = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode | ReactNode[];
}) => {
  return <div className={clsx("flex", "flex-col", className)}>{children}</div>;
};

export const PersonName = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode | ReactNode[];
}) => {
  return (
    <div className={clsx("flex", "font-semibold", className)}>{children}</div>
  );
};

export const PersonTitle = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode | ReactNode[];
}) => {
  return (
    <div className={clsx("flex", "text-subtle", "text-sm", className)}>
      {children}
    </div>
  );
};
