import TableOfContents from "../TableOfContent";

interface TOCSectionProps {
  tocItems: Array<{ text: string; anchor: string; style: string }>;
  readingEmojis: string[];
}

export const TOCSection: React.FC<TOCSectionProps> = ({
  tocItems,
  readingEmojis,
}) => {
  return (
    <div className='hidden xl:block xl:w-1/4 p-4 xl:pt-32'>
      <TableOfContents tocItems={tocItems} readingEmojis={readingEmojis} />
    </div>
  );
};
