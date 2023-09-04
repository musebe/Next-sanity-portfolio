import { getOgData } from '@/app/utils/fetchData';
import { ImageResponse } from 'next/server';

// The dimensions for the OG image
export const size = {
  width: 900,
  height: 450,
};

export const contentType = 'image/png';

interface Props {
  params: {
    slug: string;
  };
}

export default async function og({ params }: Props) {
  // Fetch the OG data
  const { imageUrl, title, updatedAt } = await getOgData(params.slug);

  return new ImageResponse(
    (
      <div tw='relative flex items-center justify-center'>
        {/* Image */}
        <img
          src={imageUrl || 'default_image_url'}
          alt={title || 'default_title'}
        />

        {/* Overlay */}
        <div tw='absolute inset-0 bg-black opacity-50' />

        {/* Text at the bottom center */}
        <div tw='absolute bottom-0 left-0 right-0 flex items-center justify-center mb-5'>
          {/* Title */}
          <p tw='text-white text-base font-bold bg-opacity-60 bg-black p-2 rounded'>
            {title}
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
