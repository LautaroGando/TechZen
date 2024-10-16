"use client";

// Vendors
import React from "react";

// Next
import Image from "next/image";

// Hooks
import { useUserData } from "@/hooks/useUserData";
import { useEffect, useState } from "react";
import { useToken } from "@/context/TokenContext/TokenContext";

// Components
import ButtonFinalizePurchase from "../ButtonFinalizePurchase/ButtonFinalizePurchase";

// Types
import { IProductAndQuantity } from "@/components/HomeComponents/Product/types";

export const RenderProductCart: React.FC = (): React.ReactElement => {

    const { token } = useToken();
    const { userData } = useUserData();
    const [storedProducts, setStoredProducts] = useState<IProductAndQuantity[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {

        if (token && userData) {

            const products = localStorage.getItem(`productsCart-${userData?.id}`);

            if (products) {

                setStoredProducts(JSON.parse(products));

            };

            setLoading(false);

        }

    }, [token, userData]);

    const handleUpdateCart = (updateCart: IProductAndQuantity[]) => {

        setStoredProducts(updateCart);

    };

    const storedProductsId = storedProducts.map((product: IProductAndQuantity) => product.id);

    return (

        <>
            {
                loading ? (
                    <p className="text-center lColor">Cargando...</p>
                ) : (
                    storedProducts.length > 0 ? (
                        <>
                            <div className="h-[50vh] overflow-y-scroll scrollY">
                                <div className="lColor text-sm font-medium flex justify-between border-[#f3f4f6] border-b-[3px] py-5 sticky top-0 pBColor md:text-xl">
                                    <h2 className="w-1/4 text-center">Producto</h2>
                                    <h2 className="w-1/4 text-center">Precio</h2>
                                    <h2 className="w-1/4 text-center">Cantidad</h2>
                                    <h2 className="w-1/4 text-center">Total</h2>
                                </div>
                                {
                                    storedProducts.map((product: IProductAndQuantity) => (

                                        <div className="lColor text-sm font-light flex justify-between items-center border-[#f3f4f6] border-b-[1px] py-5 md:text-xl" key={product.id}>
                                            <div className="flex gap-5 w-1/4 items-center justify-center">
                                                <Image className="w-[70px] hidden md:flex" src={product.image} alt="Imagen del producto" width={700} height={0} priority />
                                                <h3>{product.name}</h3>
                                            </div>
                                            <h3 className="text-center w-1/4">${product.price}.00</h3>
                                            <h3 className="text-center w-1/4">{product.quantity}</h3>
                                            <h3 className="text-center w-1/4">${product.price * product.quantity}.00</h3>
                                        </div>

                                    ))
                                }
                            </div>
                            <ButtonFinalizePurchase handleUpdateCart={handleUpdateCart} token={token || ''} userId={userData?.id || 0} productsId={storedProductsId} />
                        </>
                    ) : (
                        <p className="text-center lColor">No se encontró ningún producto en el carrito.</p>
                    )
                )
            }
        </>

    );

};

export default RenderProductCart;