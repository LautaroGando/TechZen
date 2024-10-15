import ProductCart from "@/components/CartComponents/ProductCart/ProductCart";
import React from "react";

export const Cart: React.FC = (): React.ReactElement => {

    return (

        <div className="flex min-h-[calc(100vh-220px)] items-center justify-center">
            <ProductCart />
        </div>

    );

};

export default Cart;