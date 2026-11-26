export interface Product {
    id: string;
    sku: string;   // identifies a product in the retail catalog.
    name: string;
    description: string | null;
    sellingPrice: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

