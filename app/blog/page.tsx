import { Post } from '../utils/interface';
import { fetchAllPosts } from '../utils/fetchData';
import TagsPills from '../components/blog/TagsPills';

const Blog = async () => {
  const data = await fetchAllPosts();
  return <TagsPills allPosts={data as Post[]} />;
};

export default Blog;
