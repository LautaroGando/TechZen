"use client";

import { usePathname } from "next/navigation";
import React from "react";

export const Footer: React.FC = (): React.ReactElement => {

    const pathname = usePathname();

    const verifyPath = ['/login', '/register'];

    const showFooter = !verifyPath.includes(pathname);

    const date = new Date().getFullYear();

    return (

        <>
            {
                showFooter && (
                    <footer className="h-[120px] shadow-2xl shadow-black flex justify-center items-center">
                        <h3 className="lColor text-2xl sm:text-3xl font-light">&copy;Copyright TechZen {date}</h3>
                    </footer>
                )
            }
        </>

    );

};

export default Footer;