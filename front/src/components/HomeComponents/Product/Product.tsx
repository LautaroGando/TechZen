"use client";

// Vendors
import React from "react";

// Hooks
import { useProducts } from "@/hooks/useProducts";
import { useEffect, useState } from "react";

// Components
import ButtonChangeCategory from "../ButtonChangeCategory/ButtonChangeCategory";

// Types
import { IProduct, IPropsCatalog } from "./types";

// Utils
import { categories } from "./utils";

export const Product: React.FC<IPropsCatalog<IProduct>> = ({ renderProducts }: IPropsCatalog<IProduct>): React.ReactElement => {

    const { products } = useProducts();
    const [filterProduct, setFilterProduct] = useState<IProduct[]>([]);
    const [isActive, setIsActive] = useState<number>(0);

    useEffect(() => {

        products.length > 0 ? setFilterProduct(products) : null;

    }, [products]);

    const handleCategory = (id: number) => {

        setIsActive(id);

        id === 0 ? setFilterProduct(products) : null;

        if (id !== 0) {

            const filterProducts = products.filter((product: IProduct) => product.id === id);

            setFilterProduct(filterProducts);

        };

    };

    return (

        <>
            <ButtonChangeCategory categories={categories} handleCategory={handleCategory} active={isActive} />
            <div className="w-11/12 mb-10 m-auto min-h-[calc(100vh-215px)] flex flex-wrap gap-5 justify-center items-center">
                {
                    filterProduct.length > 0 ? (
                        filterProduct.map((product: IProduct) => (
                            <div key={product.id}>
                                {
                                    renderProducts(product)
                                }
                            </div>
                        ))
                    ) : (
                        <p className="lColor">No se encontró ningún producto.</p>
                    )
                }
            </div>
        </>

    );

};

export default Product;