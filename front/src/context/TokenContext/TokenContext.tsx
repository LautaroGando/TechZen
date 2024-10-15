"use client";

import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";
import { IPropsTokenContext } from "./types";

const TokenContext = createContext<IPropsTokenContext | null>(null);

export const TokenProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {

        const verifyToken = Cookies.get('userToken');

        if (verifyToken) setToken(verifyToken);

        setLoading(false);

    }, [token]);

    const handleLogout = () => {

        localStorage.removeItem("userData");
        localStorage.removeItem("userToken");

        Cookies.remove("userToken");

        setToken(null);

        router.push("/");

    };

    if (loading) return null;

    return (

        <TokenContext.Provider value={{ token, setToken, handleLogout }}>
            {children}
        </TokenContext.Provider>

    )

};

export const useToken = () => {

    const context = useContext(TokenContext);

    if (!context) throw new Error("El contexto debe ser utilizado dentro de un TokenProvider.");

    return context;

};