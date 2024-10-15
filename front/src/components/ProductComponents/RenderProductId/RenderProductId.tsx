"use client";

import React, { useState } from "react";
import { IPropsRenderProductId } from "./types";
import useProducts from "@/hooks/useProducts";
import { IProduct } from "@/components/HomeComponents/Product/types";
import Image from "next/image";
import ButtonAddToCart from "@/components/GeneralComponents/ButtonAddToCart/ButtonAddToCart";

export const RenderProductId: React.FC<IPropsRenderProductId> = ({ id }: IPropsRenderProductId): React.ReactElement => {

    const { products, loading } = useProducts();
    const [quantity, setQuantity] = useState<number>(0);

    const findProduct = products.find((product: IProduct) => product.id === +id);

    const handleQuantity = (e: React.ChangeEvent<HTMLSelectElement>) => {

        setQuantity(+e.target.value);

    };

    return (

        <div>
            {
                loading ? (
                    <p className="lColor">Cargando...</p>
                ) : !findProduct ? (
                    <p className="lColor">No se encontro ningun producto.</p>
                ) : (
                    <div className="flex gap-10 h-[50vh]">
                        <Image className="w-[400px]" src={findProduct.image} alt="Imagen del producto" width={700} height={0} priority />
                        <div className="flex flex-col justify-evenly w-[600px]">
                            <div className="flex flex-col gap-3">
                                <h1 className="lColor text-[30px] font-bold">{findProduct.name}</h1>
                                <p className="lColor text-[20px] font-light">{findProduct.description}</p>
                                <h2 className="lColor text-[30px] font-bold">${findProduct.price * quantity === 0 ? findProduct.price * 1 : findProduct.price * quantity}.00</h2>
                            </div>
                            <div className="flex justify-between">
                                <select onChange={handleQuantity} className="pBColor lColor border-[#f3f4f6] border-b-[3px] w-[200px] outline-none" name="quantity" id="quantity">
                                    <option value="">Seleccione una opción:</option>
                                    {
                                        [...Array(findProduct.stock)].map((_, i) => (
                                            <option key={i + 1} value={i + 1}>{`${i + 1} ${i + 1 > 1 ? "Unidades" : "Unidad"}`}</option>    
                                        ))
                                    }
                                </select>
                                <ButtonAddToCart product={findProduct} disabled={quantity === 0} quantity={quantity} />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>

    );

};

export default RenderProductId;