import { NextSeo } from "next-seo";

const SeoComponent = ({ seo }) => {
  console.log(seo);
  const { title, description, imageUrl, url } = seo;
  return (
    <NextSeo
      title={`${title} | Roberto Quintero`}
      description={description}
      openGraph={{
        url,
        title,
        description,
        images: [
          {
            url: imageUrl,
            width: 800,
            height: 600,
            alt: title,
          },
        ],
        site_name: "Roberto Quintero",
      }}
    />
  );
};

export default SeoComponent;
