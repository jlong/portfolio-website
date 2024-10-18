import React, { ReactNode } from "react";
import clsx from "clsx";

const paddingXClass = {
  0: "px-0",
  1: "px-1",
  2: "px-2",
  2.5: "px-2.5",
  3: "px-3",
  4: "px-4",
  5: "px-5",
  6: "px-6",
  7: "px-7",
  8: "px-8",
  9: "px-9",
  10: "px-10",
};

const paddingYClass = {
  0: "py-0",
  1: "py-1",
  2: "py-2",
  3: "py-3",
  4: "py-4",
  5: "py-5",
  6: "py-6",
  7: "py-7",
  8: "py-8",
  9: "py-9",
  10: "py-10",
};

export const Section = ({
  className,
  paddingX = 2.5,
  paddingY = 10,
  children,
}: {
  className: string;
  paddingX: 0 | 1 | 2 | 2.5 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  paddingY: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  children: ReactNode | ReactNode[];
}) => {
  return (
    <section
      className={clsx(
        "flex",
        "flex-col",
        "gap-8",
        paddingXClass[paddingX],
        paddingYClass[paddingY],
        className,
      )}
    >
      {children}
    </section>
  );
};
