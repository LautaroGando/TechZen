import RenderProductId from "@/components/ProductComponents/RenderProductId/RenderProductId";
import React from "react";

interface IPropsProductDetail {
    params: {
        id: number;
    };
};

export const ProductDetail: React.FC<IPropsProductDetail> = (pathname: IPropsProductDetail): React.ReactElement => {

    return (

        <div className="h-[100vh] flex justify-center items-center">
            <RenderProductId id={pathname.params.id} />
        </div>

    );

};

export default ProductDetail;