import { NextSeo } from "next-seo";

const SeoComponent = ({ seo }) => {
  console.log(seo);
  const { title, description, imgUrl, url } = seo;
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
            url: imgUrl,
            width: 1280,
            height: 720,
            alt: title,
          },
        ],
        site_name: "Roberto Quintero",
      }}
      twitter={{
        handle: "@edteamlat",
        site: "@edteamlat",
        cardType: "summary_large_image",
      }}
    />
  );
};

export default SeoComponent;
