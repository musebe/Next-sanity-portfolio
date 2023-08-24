interface Asset {
  _id: string;
  url: string;
}

interface MainImage {
  asset: Asset;
  alt: string;
  caption: string;
}



export interface Post {
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