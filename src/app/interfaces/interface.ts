export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
}

export interface ICategory {
  name: string;
  slug: string;
  url: string;
}