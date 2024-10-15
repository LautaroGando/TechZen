"use client";

import Image from "next/image";
import { IProduct } from "./types";
import React from "react";
import Link from "next/link";
import ButtonAddToCart from "@/components/GeneralComponents/ButtonAddToCart/ButtonAddToCart";

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