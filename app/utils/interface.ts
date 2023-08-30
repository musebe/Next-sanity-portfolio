export interface Asset {
  _id: string;
  url: string;
}

export interface ImageValue {
  url: string;
}


export interface MainImage {
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

export interface TextChild {
  text: string;
  marks?: string[];
}

export interface BlockValue {
  _type: 'block';
  style: string;
  children: TextChild[];
}
