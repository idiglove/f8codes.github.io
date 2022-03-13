import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";

const Seo: FunctionComponent<Props> = ({
  title,
  description,
  image,
  isArticle,
  link,
}) => {
  const url =
    typeof window !== "undefined"
      ? window.location.protocol + "//" + window.location.host
      : "";

  const seo = {
    title: title || "Faith Morante - Full Stack Web Developer",
    description: description || "Web Developer expert in React and NodeJS",
    image: image
      ? `${url}/${image}`
      : "https://res.cloudinary.com/aintboard-faith/image/upload/v1647138405/fm-website/fm-website-img_e8njrm.png",
    url: link ? `${url}${link}` : url,
  };

  return (
    <Helmet title={seo.title} titleTemplate={seo.title}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="canonical" href={seo.url} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {isArticle && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@faithmorante" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

export default Seo;

type Props = {
  title: string;
  description: string;
  image: string;
  isArticle: boolean;
  link: string;
};
