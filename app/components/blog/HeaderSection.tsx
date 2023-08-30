import { Post } from '@/app/utils/interface';
import { urlFor } from '@/app/utils/sanityImageUrl';
import Image from 'next/image';


interface HeaderSectionProps {
  data: Post;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({ data }) => {
  return (
    <header className='pt-6 xl:pb-6'>
      <div className='space-y-4 text-center'>
        <div>
          <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14 mb-4'>
            {data.title}
          </h1>
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
    </header>
  );
};
