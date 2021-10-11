import React from "react";
import { Link } from "../Link/Link";

export const Card = ({
  title,
  subtitle,
  image,
  url,
  imageSize = "300px",
  children,
  className = "",
  ...rest
}: CardProps) => {
  const LinkWrapper = url ? Link : "span";
  return (
    <div className={"card " + className} {...rest}>
      {image && (
        <LinkWrapper href={url}>
          <img
            style={{ height: imageSize, width: "100%", objectFit: "cover" }}
            src={image}
            loading="lazy"
            alt={typeof title === "string" ? title : "Card Image"}
          />
        </LinkWrapper>
      )}
      <div className="card-body">
        <LinkWrapper href={url} className="link-primary text-decoration-none">
          <h5 className="card-title">{title}</h5>
        </LinkWrapper>
        {subtitle && <div className="card-subtitle mb-2 text-muted">{subtitle}</div>}
        {children}
      </div>
    </div>
  );
};

export interface CardProps {
  /** The card title. You can pass a string or JSX */
  title: string | JSX.Element;
  /** The card subtitle title. You can pass a string or JSX */
  subtitle?: string;
  /** If provided the title and the (optional) image will become links pointed at the passed in url. */
  url?: string;
  /** Optional image url */
  image?: string;
  /** Allows you to control the height of the image */
  imageSize?: string;
  /** Whatever JSX you put inside the card component will render under the subtitle. */
  children?: React.ReactNode;
  [key: string]: any;
}

export default React.memo(Card);
