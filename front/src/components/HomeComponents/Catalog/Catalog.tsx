import React from "react";
import Product from "../Product/Product";
import { renderProducts } from "../Product/utils";

export const Catalog: React.FC = (): React.ReactElement => {

    return (

        <div className="w-full h-auto">
            <h2 className="cColor text-4xl font-bold px-5 py-10 lg:text-7xl lg:p-20">CATÁLOGO</h2>
            <Product renderProducts={renderProducts} />
        </div>

    );

};

export default Catalog;