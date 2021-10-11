import React from "react";
import { Link } from "../Link/Link";
import "./buttons.scss";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { color = "primary", variant, scale = "normal", className = "", children, href, ...rest },
  ref
) {
  const cssClass = [className, "btn", getColorVariantClass(color, variant), `btn-${scale}`]
    .filter(Boolean)
    .join(" ");

  const Element: any = href ? Link : "button";
  return (
    <Element className={cssClass} {...rest} href={href} ref={ref}>
      {children}
    </Element>
  );
});

const getColorVariantClass = (color: ThemeColor, variant: ButtonVariant) => {
  if (variant === "filled") variant = null;
  return [
    color && !variant ? `btn-${color}` : "",
    variant && variant !== "filled" ? `btn-${variant}` : "",
    color && variant ? `btn-${variant}-${color}` : "",
  ]
    .filter(Boolean)
    .join(" ");
};

type ButtonVariant = "filled" | "outline" | "link";
// "btn btn-secondary" or "btn-outline-primary"
interface ExtraProps {
  /** The type of button. Filled in, outlined etc... */
  variant?: ButtonVariant;
  /** Which theme color? primary, secondary, etc... */
  color?: ThemeColor;
  /** A link that looks like a button. If passed a React Router  Link component will be used instead of a button */
  href?: string;
  /** The size of the button. Calling it 'scale' to avoid collision with builtin button.size attribute. */
  scale?: "sm" | "normal" | "lg";
  type?: "button" | "submit" | "reset";
}

export type ButtonProps = React.HTMLProps<HTMLButtonElement> & ExtraProps;
