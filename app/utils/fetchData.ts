import { client } from './sanity';
import imageUrlBuilder from '@sanity/image-url';
import { Post } from './interface';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Initialize the image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}


// Function to get OG data
export async function getOgData(slug: string) {
  const post = await getData(slug);
  const imageUrl = post?.mainImage?.asset?._ref ? urlFor(post.mainImage.asset._ref).url() : null;
  const title = post?.title || "Default Title";

  const updatedAt = post?._createdAt ? new Date(post._createdAt).toDateString() : "Unknown Date";



  return { imageUrl, title, updatedAt };
}



export async function fetchAllPosts() {
  const query = `
    *[_type == "post"] | order(_createdAt desc) {
        _id,
       _createdAt,
      title,
      mainImage{
        asset->{
          _id,
          url
        },
        alt,
        caption
      },
      overview,
      categories,
      tags,
      slug,
      content[]{
        ...,
        asset->{
          _id,
          url
        },
        alt
      }
    }
  `;

  try {
    const data = await client.fetch(query, {
      next: {
        revalidate: 10,
      },
    });
    //  console.log("Fetched Data:", data); // Log the fetched data
    return data;
  } catch (error) {
    //  console.error("Error fetching data:", error); // Log any errors
    return null;
  }
}

export async function fetchAllCategories() {
  const query = `
    *[_type == "category"] {
      _id,
      title,
      description,
      slug
    }
  `;

  try {
    const data = await client.fetch(query);
    //  console.log("Fetched Categories:", data); // Log the fetched data
    return data;
  } catch (error) {
    //  console.error("Error fetching categories:", error); // Log any errors
    return null;
  }
}


export const getData = async (slug: string): Promise<Post> => {
  // console.log("Fetching data for slug:", slug); // Log the slug being used for query

  const query = `*[_type == "post" && slug.current == "${slug}"] | order(publishedAt desc)[0]`;

  try {
    const data = await client.fetch(query, {
      next: {
        revalidate: 10,
      },
    });

    // console.log("Fetched Data:", data); // Log the fetched data
    return data as Post;
  } catch (error) {
    // console.error("Error fetching data:", error); // Log any errors
    throw error;
  }
};



module.exports = {
  fetchAllPosts,
  fetchAllCategories,
  getData,
  getOgData
};
