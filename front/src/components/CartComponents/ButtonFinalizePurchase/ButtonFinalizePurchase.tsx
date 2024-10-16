import { fetchPostOrder } from "@/helpers/fetchPostOrder";
import React from "react";
import { IPropsButtonFinalizePurchase } from "./types";
import useUserData from "@/hooks/useUserData";
import { IProductAndQuantity } from "@/components/HomeComponents/Product/types";

export const ButtonFinalizePurchase: React.FC<IPropsButtonFinalizePurchase<IProductAndQuantity>> = ({ token, userId, productsId, handleUpdateCart }: IPropsButtonFinalizePurchase<IProductAndQuantity>): React.ReactElement => {

    const { userData, setUserData } = useUserData();

    const handleDispatch = async () => {

        const orders = token ? await fetchPostOrder(token, userId, productsId) : null;

        const updatedOrders = [...userData?.orders || [], {
            id: orders.id,
            status: "approved",
            date: new Date().toISOString(),
        }];

        const updatedUserData = {
            ...userData,
            orders: updatedOrders,
        };

        setUserData(updatedUserData);

        localStorage.setItem("userData", JSON.stringify(updatedUserData));

        localStorage.removeItem(`productsCart-${userData?.id}`);

        handleUpdateCart([]);

    };

    return <button onClick={handleDispatch} className="px-5 py-3 w-[200px] cBColor lColor transition-all hover:bg-[#6ca7ecad] mt-24 mb-5 m-auto">FINALIZAR COMPRA</button>;

};

export default ButtonFinalizePurchase;