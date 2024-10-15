const regex = {
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

export interface IUserLogin {
    email: string;
    password: string;
};

interface IError {
    email?: string;
    password?: string;
};

export const validateLogin = (input: IUserLogin) => {

    const errors: IError = {};

    if (!regex.email.test(input.email)) errors.email = 'La dirección de correo ingresada no es válida. Asegúrate de que contenga un nombre de usuario, el símbolo "@" y un dominio';

    if (!regex.password.test(input.password)) errors.password = 'La contraseña ingresada no cumple con los requisitos. Debe tener al menos 8 caracteres, incluir una letra mayúscula, un número y un símbolo especial (por ejemplo, !@#$%).';

    return errors;

};