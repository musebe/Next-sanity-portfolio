import Head from 'next/head';
import { Post } from '@/app/utils/interface';
import { urlFor } from '@/app/utils/sanityImageUrl';

interface HeadComponentProps {
  data: Post;
  params: { slug: string };
}

export const HeadComponent: React.FC<HeadComponentProps> = ({
  data,
  params,
}) => {
  const ogImageUrl = urlFor(data.mainImage).url();
  return (
    <Head>
      <title>{data.title}</title>
      <meta name='description' content={data.overview} />
      <meta property='og:title' content={data.title} />
      <meta property='og:description' content={data.overview} />
      <meta property='og:image' content={ogImageUrl} />
      <meta property='og:type' content='article' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={data.title} />
      <meta name='twitter:description' content={data.overview} />
      <meta name='twitter:image' content={ogImageUrl} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <link
        rel='canonical'
        href={`https://next-sanity-portfolio-zeta.vercel.app/${params.slug}`}
      />
      <html lang='en' />
    </Head>
  );
};
