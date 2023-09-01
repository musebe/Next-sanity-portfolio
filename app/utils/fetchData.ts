import { client } from './sanity';


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


module.exports = {
  fetchAllPosts,
};
