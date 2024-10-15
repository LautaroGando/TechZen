import { IProduct } from "@/components/HomeComponents/Product/types";
import { fetchProducts } from "@/helpers/fetchProducts";
import { useEffect, useState } from "react";

export const useProducts = () => {

    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {

        const getProducts = async () => {

            const data = await fetchProducts();

            setProducts(data);
            setLoading(false);

        };

        getProducts();

    }, []);

    return { products, loading };

};

export default useProducts;