export interface CreateProduct {
    name: string;
    price: number;
    description?: string | undefined;
    stock: number;
    category: string;
    //Ingredientes
}
