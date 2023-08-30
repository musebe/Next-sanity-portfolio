// Your main component file

import ReadingProgress from '@/app/components/ReadingProgress';
import TableOfContents from '@/app/components/TableOfContent';
import { HeadComponent } from '@/app/components/blog/HeadComponent';
import { HeaderSection } from '@/app/components/blog/HeaderSection';
import { MainContent } from '@/app/components/blog/MainContent';
import { SubscribeNewsletterWrapper } from '@/app/components/blog/SubscribeNewsletterWrapper';
import PortableTextComponent from '@/app/components/blog/PortableTextComponent';
import { getData } from '@/app/utils/getData';

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getData(params.slug);

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

  return (
    <div className='flex flex-col md:flex-row container mx-auto'>
      {/* Head Section */}
      <HeadComponent data={data} params={params} />

      {/* Main Content */}
      <div className='w-full md:w-3/4 md:pr-8 mx-auto'>
        <ReadingProgress />
        <div className='xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700'>
          <HeaderSection data={data} />
          <div className='block md:hidden w-full p-4 mb-4'>
            <TableOfContents
              tocItems={tocItems}
              readingEmojis={readingEmojis}
            />
          </div>
          <MainContent
            data={data}
            PortableTextComponent={PortableTextComponent}
          />
        </div>
      </div>

      {/* Sidebar for Desktop */}
      <div className='hidden md:block xl:w-1/4 p-4 xl:pt-32'>
        <TableOfContents tocItems={tocItems} readingEmojis={readingEmojis} />
        <div className='mt-8'></div>
        <SubscribeNewsletterWrapper />
      </div>

      {/* Newsletter Subscription for Mobile */}
      <div className='md:hidden w-full p-4'>
        <SubscribeNewsletterWrapper />
      </div>
    </div>
  );
}
