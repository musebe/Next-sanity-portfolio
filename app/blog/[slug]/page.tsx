import { Post } from '@/app/lib/interface';
import { client } from '@/app/lib/sanity';
import { urlFor } from '@/app/lib/sanityImageUrl';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);

  return data;
}

export const revalidate = 60;

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Post;

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
    },
  };

  return (
    <div className='flex flex-col md:flex-row'>
      {/* Table of Contents on Mobile */}
      <div className='w-full md:hidden p-4 mb-4'>
        <h2 className='text-lg font-bold text-amber-500'>Table of Contents</h2>
        {/* Your TOC items here */}
      </div>

      {/* Main Content */}
      <div className='w-full md:w-3/4 md:pr-8'>
        <div className='xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700'>
          <header className='pt-6 xl:pb-6'>
            <div className='space-y-4 text-center'>
              <div>
                <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14 mb-4'>
                  {data.title}
                </h1>
                {/* Main Image */}
                <Image
                  src={urlFor(data.mainImage.asset._ref).url()}
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
      <div className='hidden md:block md:w-1/4 p-4 md:pt-32'>
        <h2 className='text-lg font-bold text-amber-500'>Table of Contents</h2>
        {/* Your TOC items here */}
      </div>
    </div>
  );
}
