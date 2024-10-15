import RenderProductId from "@/components/ProductComponents/RenderProductId/RenderProductId";
import React from "react";

interface IPropsProductDetail {
    params: {
        id: number;
    };
};

export const ProductDetail: React.FC<IPropsProductDetail> = (pathname: IPropsProductDetail): React.ReactElement => {

    return (

        <div className=" flex justify-center items-center lg:h-[calc(100vh-220px)]">
            <RenderProductId id={pathname.params.id} />
        </div>

    );

};

export default ProductDetail;