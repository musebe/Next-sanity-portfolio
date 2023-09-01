import { client } from './sanity';
import { Post } from './interface';

export const getData = async (slug: string): Promise<Post> => {
    const query = `*[_type == "post" && slug.current == "${slug}"] | order(publishedAt desc)[0]`;
    const data = await client.fetch(query, {
        next: {
            revalidate: 10,
        },
    });
    return data as Post;
};


