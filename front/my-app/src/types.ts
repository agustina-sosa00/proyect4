export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
}

export interface ICategory {
    id: number;
    name: string;

}

export interface IOrder{
    id: number;
    status: 'approved' | 'pending' | 'rejected';
    date: string;
    user: IUserOrder;
    products: IProduct[];
}

export interface IUserOrder{
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    role: 'admin' | 'user';
}

export interface IUser{
    name: string;
    email: string;
    address: string;
    phone: string;
    password: string;
}

export interface IProfile{
    email: string;
    password: string;
}

export interface ProductParams {
    slug: string;
  }