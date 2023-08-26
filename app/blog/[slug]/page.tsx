// Your main component file

import ReadingProgress from '@/app/components/ReadingProgress';
import SubscribeNewsletter from '@/app/components/SubscribeNewsletter';
import TableOfContents from '@/app/components/TableOfContent';
import { Post } from '@/app/lib/interface';
import { client } from '@/app/lib/sanity';
import { urlFor } from '@/app/lib/sanityImageUrl';
import { PortableText } from '@portabletext/react';
import Head from 'next/head';
import Image from 'next/image';

async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Post;
  // console.log(data);
  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <Image
          src={urlFor(value).url()}
          alt='Image'
          className='rounded-lg'
          width={800}
          height={800}
          priority
        />
      ),
      block: ({ value }: { value: any }) => {
        const text = value.children[0].text;
        const anchor = `heading-${text.replace(/\s+/g, '-').toLowerCase()}`; // Create an anchor ID

        if (value.style === 'h1') {
          return (
            <h1 id={anchor} className='text-blue-600 dark:text-blue-300'>
              {text}
            </h1>
          );
        }
        if (value.style === 'h2') {
          return (
            <h2 id={anchor} className='text-green-600 dark:text-green-300'>
              {text}
            </h2>
          );
        }
        if (value.style === 'h3') {
          return (
            <h3 id={anchor} className='text-purple-600 dark:text-purple-300'>
              {text}
            </h3>
          );
        }
        return <p>{text}</p>;
      },
    },
  };

  // Extract headings from PortableText data
  const headings = data
    ? data.content.filter(
        (block) =>
          block._type === 'block' && ['h1', 'h2', 'h3'].includes(block.style)
      )
    : [];

  // Generate Table of Contents items
  const tocItems = headings.map((heading) => ({
    text: heading.children[0].text,
    anchor: `heading-${heading.children[0].text
      .replace(/\s+/g, '-')
      .toLowerCase()}`,
    style: heading.style,
  }));

  const readingEmojis = ['📚', '📖', '🎓', '🖋️', '📝']; // Add more emojis as needed
  const ogImageUrl = urlFor(data.mainImage).url(); // Get the URL for the main image

  return (
    <div className='flex flex-col md:flex-row container mx-auto'>
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
      {/* Main Content */}
      <div className='w-full md:w-3/4 md:pr-8 mx-auto'>
        <ReadingProgress />
        <div className='xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700'>
          <header className='pt-6 xl:pb-6'>
            <div className='space-y-4 text-center'>
              <div>
                <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14 mb-4'>
                  {data.title}
                </h1>
                {/* Main Image */}
                <Image
                  src={urlFor(data.mainImage).url()}
                  alt={data.mainImage.alt}
                  className='rounded-lg mb-4'
                  width={1400}
                  height={700}
                  priority
                />
              </div>
              <div className='space-y-2'>
                <p className='text-base font-medium leading-6 text-teal-500 mb-2'>
                  {new Date(data._createdAt).toISOString().split('T')[0]}
                </p>
                <div className='flex flex-wrap justify-center'>
                  {data.categories.map((category, index) => (
                    <span
                      key={index}
                      className={`text-xs text-white rounded-full px-2 py-1 m-1 ${
                        index % 2 === 0 ? 'bg-blue-500' : 'bg-green-500'
                      }`}
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* Table of Contents on Mobile */}
            <div className='block lg:hidden w-full p-4 mb-4'>
              <TableOfContents
                tocItems={tocItems}
                readingEmojis={readingEmojis}
              />
            </div>
          </header>
          <div className='divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0'>
            <div className='prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg'>
              <PortableText
                value={data.content}
                components={PortableTextComponent}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents on Desktop */}
      <div className='hidden xl:block xl:w-1/4 p-4 xl:pt-32'>
        <TableOfContents tocItems={tocItems} readingEmojis={readingEmojis} />
        {/* Space between TOC and Subscribe Newsletter */}
        <div className='mt-8'></div>
        {/* Subscribe Newsletter on Laptops and other big screens */}
        <div className='border-2 rounded-lg border-opacity-50 border-amber-500 p-6 shadow-md'>
          <SubscribeNewsletter
            heading='📝 Loved This Article?'
            headingSize='text-xl'
            paragraph='Get more articles like this straight into your inbox 📩'
            paragraphSize='text-xs'
            buttonText='Subscribe'
          />
        </div>
      </div>

      {/* Subscribe Newsletter on Mobile */}
      <div className='xl:hidden w-full p-4'>
        <div className='border-2 rounded-lg border-opacity-50 border-amber-500 p-6 shadow-md'>
          <SubscribeNewsletter
            heading='📝 Loved This Article?'
            headingSize='text-xl'
            paragraph='Get more articles like this straight into your inbox 📩'
            paragraphSize='text-xs'
            buttonText='Subscribe'
          />
        </div>
      </div>
    </div>
  );
}
