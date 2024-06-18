import { IProduct } from "@/types";

const PRODUCTS_URL = process.env.NEXT_PUBLIC_API_URL

async function getProductsAPI (): Promise<IProduct[]> {
    const res = await fetch(`${PRODUCTS_URL}/products`)
    const products: IProduct[] = await res.json();
    
    return products;
}

export default getProductsAPI;