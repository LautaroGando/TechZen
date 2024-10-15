"use client";

import useProducts from "@/hooks/useProducts";
import React from "react";
import { IProduct, IPropsCatalog } from "./types";

export const Product: React.FC<IPropsCatalog<IProduct>> = ({ renderProducts }: IPropsCatalog<IProduct>): React.ReactElement => {

    const { products } = useProducts();

    return (

        <div className="w-11/12 mb-10 m-auto overflow-y-scroll scrollY h-[calc(100vh-215px)] flex flex-wrap gap-5 justify-center">
            {
                products.map((product: IProduct) => (
                    <div key={product.id}>
                        {
                            renderProducts(product)
                        }
                    </div>
                ))
            }
        </div>

    );

};

export default Product;