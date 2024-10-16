"use client";

// Vendors
import React from "react";

// Hooks
import { usePathname } from "next/navigation";

// Components
import NavBar from "../NavBar/NavBar";

export const Header: React.FC = (): React.ReactElement => {

    const pathname = usePathname();

    const verifyPath = ['/login', '/register'];

    const showHeader = !verifyPath.includes(pathname);

    return (

        <>
            {
                showHeader && (
                    <header className="w-full h-[100px] pBColor sticky top-0 z-50">
                        <NavBar />
                    </header>
                )
            }
        </>

    );

};

export default Header;