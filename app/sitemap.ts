import { fetchAllCategories, fetchAllPosts } from "./utils/fetchData";


export default async function sitemap() {
    const baseUrl = "https://www.musebecodes.dev";

    // Get All Posts from CMS
    const posts = await fetchAllPosts();
    const postsUrls =
        posts?.map((post: { slug: { current: any; }; _createdAt: any; }) => {
            return {
                url: `${baseUrl}/blog/${post.slug}`, // assuming the slug is an object with `current`
                lastModified: post._createdAt,
            };
        }) ?? [];

    // Get All Categories from CMS
    const categories = await fetchAllCategories();
    const categoriesUrls =
        categories?.map((category: { slug: { current: any; }; }) => {
            return {
                url: `${baseUrl}/${category.slug}`, // assuming the slug is an object with `current`
                lastModified: new Date(),
            };
        }) ?? [];

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        ...postsUrls,
        ...categoriesUrls,
    ];
}
