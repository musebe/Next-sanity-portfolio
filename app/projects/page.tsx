import Image from 'next/image';
import { client } from '../lib/sanity';

interface Data {
  title: string;
  overview: string;
  link: string;
  _id: string;
  imageUrl: string;
}

async function getProjects() {
  const query = `*[_type == "project"] {
    title,
      overview,
      link,
      _id,
      "imageUrl": image.asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

export const revalidate = 60;

const Projects = async () => {
  const data: Data[] = await getProjects();

//   console.log(data);

  return (
    <div className='divide-y divide-gray-200 dark:divide-gray-700'>
      <div className='flex flex-col justify-center items-center pt-6 pb-8 md:pt-8 md:pb-10'>
        <h1 className='text-3xl md:text-4xl font-extrabold leading-9 tracking-tight text-amber-500 dark:text-gray-100 sm:leading-10 md:leading-12'>
          🛠️ Code Ventures
        </h1>
        <p className='text-xs text-gray-600 dark:text-gray-400 mt-2'>
          Showcase of my coding quests and innovations.
        </p>
      </div>

      <div className='grid gap-y-8 sm:gap-6  sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8'>
        {data.map((project) => (
          <article
            key={project._id}
            className='overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-gray-700 shadow-teal-100'
          >
            <div className='h-56 w-full relative'>
              <Image
                fill
                src={project.imageUrl}
                alt='Image of the project'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                priority
              />
            </div>

            <div className='p-4 sm:p-6'>
              <a href={project.link} target='_blank'>
                <h3 className='text-lg font-medium text-gray-900 dark:text-white'>
                  {project.title}
                </h3>
              </a>

              <p className=' line-clamp-3 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400'>
                {project.overview}
              </p>

              <a
                href={project.link}
                target='_blank'
                className='group mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500'
              >
                Learn More!
                <span className='block transition-all group-hover:ms-0.5'>
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
