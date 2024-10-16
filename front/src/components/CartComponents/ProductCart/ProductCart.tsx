// Vendors
import React from "react";

// Components
import RenderProductCart from "../RenderProductCart/RenderProductCart";

export const ProductCart: React.FC = (): React.ReactElement => {

    return (

        <div className="w-4/5 flex flex-col">
            <RenderProductCart />
        </div>

    );

};

export default ProductCart;