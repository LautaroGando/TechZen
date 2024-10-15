import { useToken } from "@/context/TokenContext/TokenContext";
import Link from "next/link";
import React from "react";
import Menu from "../Menu/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { useMenu } from "@/context/MenuContext/MenuContext";

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