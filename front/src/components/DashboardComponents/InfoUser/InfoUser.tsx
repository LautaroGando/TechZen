"use client";

import { useToken } from "@/context/TokenContext/TokenContext";
import useUserData from "@/hooks/useUserData";
import Link from "next/link";
import React from "react";

export const InfoUser: React.FC = (): React.ReactElement => {

    const { userData } = useUserData();
    const { handleLogout } = useToken();

    return (

        <div>
            {
                userData ? (
                    <div className="flex flex-col gap-10 p-5">
                        <div className="flex flex-col gap-5">
                            <h3 className="lColor text-[20px] font-medium">Nombre: <span className="font-light">{userData.name}</span></h3>
                            <h3 className="lColor text-[20px] font-medium">Correo Electrónico: <span className="font-light">{userData.email}</span></h3>
                            <h3 className="lColor text-[20px] font-medium">Dirección: <span className="font-light">{userData.address}</span></h3>
                            <h3 className="lColor text-[20px] font-medium">Teléfono: <span className="font-light">{userData.phone}</span></h3>
                        </div>
                        <div className="flex justify-between gap-2">
                            <Link className="w-[150px] h-[50px] lColor rounded-[8px] text-lg font-medium cBColor transition-all hover:bg-[#6ca7ecad] flex justify-center items-center md:w-[200px]" href="/orders">ÓRDENES</Link>
                            <button onClick={handleLogout} className="w-[150px] h-[50px] lColor rounded-[8px] text-lg font-medium bg-red-400 transition-all hover:bg-red-600 md:w-[200px]">CERRAR SESIÓN</button>
                        </div>
                    </div>
                ) : null
            }
        </div>

    );

};

export default InfoUser;