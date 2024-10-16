// Vendors
import React from "react";

export interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    categoryId: number;
    stock: number;
};

export interface IProductAndQuantity extends IProduct {
    quantity: number;
};

export interface ICategory {
    id: number;
    name: string;
};

export interface IPropsCatalog<Item> {
    renderProducts: (products: Item) => React.ReactNode;
};