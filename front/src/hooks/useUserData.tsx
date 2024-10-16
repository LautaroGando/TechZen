// Hooks
import { useEffect, useState } from "react";

interface IPropsUserData {
    id?: number;
    name?: string;
    email?: string;
    address?: string;
    phone?: string;
    orders?: {
        id: string;
        status: string;
        date: string;
    }[];
};

export const useUserData = () => {

    const [userData, setUserData] = useState<IPropsUserData | null>(null);

    useEffect(() => {

        const user = localStorage.getItem("userData");

        if (user) {

            setUserData(JSON.parse(user));

        };

    }, []);

    return { userData, setUserData };

};

export default useUserData;