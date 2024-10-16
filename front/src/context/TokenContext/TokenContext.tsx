"use client";

// Vendors
import React, { createContext, ReactNode } from "react";

// Hooks
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Types
import { IPropsTokenContext } from "./types";

// Libraries
import Cookies from 'js-cookie';
import Swal from "sweetalert2";

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

        Swal.fire({
            title: "¿Seguro desea cerrar sesión?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "¡Sí, cerrar sesión!",
            cancelButtonText: "¡No!"
        }).then((result) => {

            if (result.isConfirmed) {

                localStorage.removeItem("userData");
                localStorage.removeItem("userToken");

                Cookies.remove("userToken");

                setToken(null);

                router.push("/");

            };

        });

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