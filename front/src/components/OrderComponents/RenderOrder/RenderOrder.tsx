"use client";

// Vendors
import React from "react";

// Next
import Image from "next/image";

// Hooks
import { useToken } from "@/context/TokenContext/TokenContext";
import { useEffect, useState } from "react";

// Types
import { IProduct } from "@/components/HomeComponents/Product/types";
import { IOrder } from "./types";

// Helpers
import { fetchGetOrders } from "@/helpers/fetchGetOrders";

export const RenderOrder: React.FC = (): React.ReactElement => {

    const { token } = useToken();
    const [orders, setOrders] = useState<IOrder<IProduct>[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {

        if (token) {

            const fetchData = async () => {

                const data = await fetchGetOrders(token || '');

                Array.isArray(data) ? setOrders(data) : setOrders([]);

                setLoading(false);

            };

            fetchData();

        };

    }, [token]);

    const formatDate = (dateString: string) => {

        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${day}/${month}/${year} ${hours}:${minutes}hs`;

    };

    return (

        <div className="min-h-[calc(100vh-300px)] flex justify-center items-center flex-col gap-5 m-10">
            {
                loading ? (
                    <p className="lColor">Cargando...</p>
                ) : (
                    orders.length > 0 ? (
                        orders.map((order: IOrder<IProduct>) => (
                            <div className="w-4/5 sBColor flex flex-col items-center justify-between p-5 gap-10" key={order.id}>
                                <p className="lColor font-semibold">{formatDate(order.date)}</p>
                                <div className="flex flex-wrap items-center justify-center gap-5">
                                    {
                                        order.products.map((product: IProduct) => (
                                            <div key={product.id}>
                                                <Image className="w-[100px] h-auto" src={product.image} alt="Imagen del producto" width={700} height={0} priority />
                                            </div>
                                        ))
                                    }
                                </div>
                                <p className="cColor font-semibold">{order.status}</p>
                            </div>
                        ))
                    ) : (
                        <p className="lColor">No se encontró ninguna orden.</p>
                    )   
                )
            }
        </div>

    );

};

export default RenderOrder;