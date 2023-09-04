interface Asset {
  _ref: any;
  _id: string;
  url: string;
}

interface ImageValue {
  url: string;
}

interface MainImage {
  asset: Asset;
  alt: string;
  caption: string;
}

interface Post {
  _updatedAt: string | number | Date;
  title: string;
  _createdAt: Date;
  _id: string;
  mainImage: MainImage;
  overview: string;
  categories: string[];
  tags: string[];
  slug: {
    current: string;
  };
  content: any[];
}

interface TextChild {
  text: string;
  marks?: string[];
}

interface BlockValue {
  _type: 'block';
  style: string;
  children: TextChild[];
}

interface SubscribeNewsletterProps {
  heading?: string;
  headingSize?: string;
  paragraph?: string;
  paragraphSize?: string;
  buttonText?: string;
}

interface TableOfContentsProps {
  tocItems: Array<{ text: string; anchor: string; style: string }>;
  readingEmojis: string[];
}

interface PortableTextComponentProps {
  appendText: (text: string) => void;
}


export type {
  Asset,
  ImageValue,
  MainImage,
  Post,
  TextChild,
  BlockValue,
  SubscribeNewsletterProps,
  TableOfContentsProps,
  PortableTextComponentProps
};
