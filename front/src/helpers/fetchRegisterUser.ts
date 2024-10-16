// Types
import { IUserRegister } from "./validateRegister";

// Libraries
import Swal from "sweetalert2";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchRegisterUser = async (userData: IUserRegister) => {

    try {

        const response = await fetch(`${API_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const data = await response.json();

        if (data.message) {

            return (

                Swal.fire({
                    title: "¡Error al registrar el usuario!",
                    text: `¡${data.message}!`,
                    icon: "error",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                })

            );

        };

        Swal.fire({
            title: "¡Usuario registrado con éxito!",
            text: `¡Inicia sesión para ingresar a la página!`,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
        });

        return data;

    } catch (error) {

        console.log(error);

    };

};