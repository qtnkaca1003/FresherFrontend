export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  /*  data: []; */
}
export interface ICategory {
  category: string;
}
export interface IUser {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}
export interface IPage{
  page: number,
  per_page:number,
  total: number,
  total_pages:number,
}
