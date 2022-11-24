import Head from "next/head";
import React from "react";

interface Props {
  title?: string,
  description?: string,
  url?: string,
  image?: string
}

const HeadMeta: React.FC<Props> = ({
 title,
 description,
 url,
 image
}) => {
  return (
    <Head>
      <title>{`Merge: ${title}` || "Merge: 개발자 커뮤니티 플랫폼"}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content={
          description ||
          "개발자의, 개발자에 의한, 개발자를 위한 소통 커뮤니티 플랫폼"
        }
      />
      <meta property="og:title" content={`Merge: ${title}` || "Merge: 개발자 커뮤니티 플랫폼"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || process.env.NEXT_PUBLIC_URL} />
      <meta property="og:image" content={image} />
      <meta property="og:article:author" content="Merge" />
    </Head>
  );
};

export default HeadMeta;
