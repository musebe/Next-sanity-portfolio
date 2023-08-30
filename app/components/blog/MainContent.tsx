import { Post } from '@/app/utils/interface';
import { PortableText } from '@portabletext/react';

interface MainContentProps {
  data: Post;
  PortableTextComponent: any;
}

export const MainContent: React.FC<MainContentProps> = ({
  data,
  PortableTextComponent,
}) => {
  return (
    <div className='prose max-w-none pb-8 pt-10 dark:prose-invert prose-xl '>
      <PortableText value={data.content} components={PortableTextComponent} />
    </div>
  );
};
