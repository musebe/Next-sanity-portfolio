import { client } from './sanity';

export async function fetchAllPosts() {
  const query = `
    *[_type == "post"]{
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

  const data = await client.fetch(query);
  return data;
}

module.exports = {
  fetchAllPosts,
};
