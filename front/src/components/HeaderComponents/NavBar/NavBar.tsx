// Vendors
import React from "react";

// Next
import Link from "next/link";

// Hooks
import { useToken } from "@/context/TokenContext/TokenContext";
import { useMenu } from "@/context/MenuContext/MenuContext";

// Components
import Menu from "../Menu/Menu";

// Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

export const NavBar: React.FC = (): React.ReactElement => {

    const { token } = useToken();
    const { handleCloseMenu } = useMenu();

    return (

        <nav className="w-full h-full flex items-center justify-between p-5">
            <Link onClick={handleCloseMenu} className="lColor text-3xl font-bold" href="/">TechZen</Link>
            <div className="flex gap-5">
                {token ? (
                    <div className="flex items-center gap-5">
                        <Link onClick={handleCloseMenu} href="/dashboard">
                            <FontAwesomeIcon className="lColor text-[25px]" icon={faUser} />
                        </Link>
                        <Link onClick={handleCloseMenu} href="/cart">
                            <FontAwesomeIcon className="lColor text-[25px]" icon={faCartShopping} />
                        </Link>
                        <Menu />
                    </div>
                ) : (
                    <Link className="lColor" href="/login">Ingresar</Link>
                )}
            </div>
        </nav>

    );

};

export default NavBar;