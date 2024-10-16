// Types
import { IUserLogin } from "./validateLogin";

// Libraries
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchLoginUser = async (userData: IUserLogin) => {

    try {

        const response = await fetch(`${API_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const data = await response.json();

        if (data.user) {

            Cookies.set("userToken", data.token, { expires: 3650 });
            localStorage.setItem("userData", JSON.stringify(data.user));
            localStorage.setItem("userToken", data.token);

            Swal.fire({
                title: `¡Bienvenido ${data.user.name}!`,
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
            });

            return data;

        } else {

            Swal.fire({
                title: "¡Error al iniciar sesión!",
                text: `¡${data.message}!`,
                icon: "error",
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
            });

        };

    } catch (error) {

        console.log(error);

    };

};