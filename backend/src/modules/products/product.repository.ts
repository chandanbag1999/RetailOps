import type { CreateProductInput } from "./product.schemas.js";
import type { Product } from "./product.types.js";

export interface ProductRepository {
    create(input: CreateProductInput): Promise<Product>;
    findById(id: string): Promise<Product | null>;
    findBySku(sku: string): Promise<Product | null>;
}