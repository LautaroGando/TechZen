// Vendors
import React from "react";

// Next
import Link from "next/link";

// Hooks
import { useMenu } from "@/context/MenuContext/MenuContext";

// Styles
import styles from './Menu.module.css';

export const Menu: React.FC = (): React.ReactElement => {

    const { menu, handleToggleMenu, handleCloseMenu } = useMenu();

    return (

        <div>
            <input onChange={handleToggleMenu} className={`${styles.input} hidden peer`} type="checkbox" name="checkMenu" id="checkMenu" checked={menu} />
            <label className={`${styles.label} w-8 h-8 relative flex items-center cursor-pointer transition-all after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#f3f4f6] after:-translate-y-[10px] after:transition-all before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-[#f3f4f6] before:translate-y-[10px] before:transition-all`} htmlFor="checkMenu">
                <div className={`${styles.line} w-full h-[2px] lBColor transition-all`}></div>
            </label>
            <div className="absolute flex justify-center items-center overflow-hidden left-0 top-[100px] w-full h-0 transition-all pBColor shadow-md shadow-black peer-checked:h-[50px]">
                <Link onClick={handleCloseMenu} className="lColor border-b-[2px] border-transparent transition-all hover:border-[#f3f4f6]" href="/orders">Órdenes</Link>
            </div>
        </div>

    );

};

export default Menu;