"use client";

// Vendors
import React from "react";

// Next
import Image from "next/image";
import Link from "next/link";

// Components
import ButtonAddToCart from "@/components/GeneralComponents/ButtonAddToCart/ButtonAddToCart";

// Types
import { ICategory, IProduct } from "./types";

export const categories: ICategory[] = [
    {
        id: 0,
        name: 'All',
    },
    {
        id: 1,
        name: 'Smartphones',
    },
    {
        id: 2,
        name: 'Laptops',
    },
    {
        id: 3,
        name: 'Tablets',
    },
    {
        id: 4,
        name: 'Headphones',
    },
    {
        id: 5,
        name: 'Cameras',
    },
    {
        id: 6,
        name: 'Printers',
    },
    {
        id: 7,
        name: 'Monitors',
    },
    {
        id: 8,
        name: 'Storage',
    },
    {
        id: 9,
        name: 'Accessories',
    },
];

export const renderProducts = (product: IProduct): React.ReactElement => {

    return (

        <div className="lBColor w-[300px] h-[450px] flex flex-col justify-between p-5">
            <Image className="h-[250px]" src={product.image} alt="Imagen del product" width={500} height={500} priority />
            <div className="flex items-center justify-between">
                <h2 className="pColor text-lg font-bold">{product.name}</h2>
                <h3 className="text-xl">${product.price}.00</h3>
            </div>
            <div className="flex justify-between">
                <Link className="px-5 py-3 block w-[50px] sBColor lColor transition-all hover:bg-[#373737ad]" href={`/product/detail/${product.id}`}>+</Link>
                <ButtonAddToCart product={product} quantity={1} />
            </div>
        </div>

    );

};