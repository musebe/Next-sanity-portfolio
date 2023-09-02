// components/BackToArticles.tsx
// components/BackToArticles.tsx
import Link from 'next/link';

const BackToArticles: React.FC = () => {
  return (
    <Link href="/blog">
      <button className="text-blue-500 hover:underline">← Back to All Articles</button>
    </Link>
  );
};

export default BackToArticles;
