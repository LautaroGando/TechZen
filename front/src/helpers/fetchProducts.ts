const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchProducts = async () => {

    try {

        const response = await fetch(`${API_URL}/products`);

        const data = await response.json();

        return data;

    } catch (error) {

        console.log(error);

    };

};