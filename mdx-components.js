// This file allows you to provide custom React components
// to be used in mdx files. you can import and use any
// react component you want, including components from
// other libraries.

import Image from "next/image";

 // This file is required to use MDX in `app` directory.
export function useMDXComponents(components) {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
    Image: (props) => <Image {...props} />
  }
}
