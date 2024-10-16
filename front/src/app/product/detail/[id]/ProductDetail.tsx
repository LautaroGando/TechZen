// Vendors
import React from "react";

// Components
import RenderProductId from "@/components/ProductComponents/RenderProductId/RenderProductId";

interface IPropsProductDetail {
    params: {
        id: number;
    };
};

export const ProductDetail: React.FC<IPropsProductDetail> = (pathname: IPropsProductDetail): React.ReactElement => {

    return (

        <div className="min-h-[calc(100vh-220px)] flex justify-center items-center lg:h-[calc(100vh-220px)]">
            <RenderProductId id={pathname.params.id} />
        </div>

    );

};

export default ProductDetail;