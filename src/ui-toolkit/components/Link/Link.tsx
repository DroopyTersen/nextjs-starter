import NextLink from "next/link";
import React from "react";
export type LinkProps = React.HTMLProps<HTMLAnchorElement>;

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, children, ...props },
  ref
) {
  return (
    <NextLink href={href} passHref>
      <a ref={ref} {...props}>
        {children}
      </a>
    </NextLink>
  );
});
