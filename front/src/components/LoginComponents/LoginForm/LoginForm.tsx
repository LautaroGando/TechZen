"use client";

import { useToken } from "@/context/TokenContext/TokenContext";
import { fetchLoginUser } from "@/helpers/fetchLoginUser";
import { IUserLogin, validateLogin } from "@/helpers/validateLogin";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export const LoginForm: React.FC = (): React.ReactElement => {

    const { setToken } = useToken();
    const router = useRouter();

    return (

        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validate={validateLogin}
            onSubmit={async (userData, { resetForm }) => {

                const user = await fetchLoginUser(userData);

                if (user) {
                    
                    setToken(user);

                    router.push('/');

                };

                resetForm();

            }}
        >
            {
                ({ errors, touched }: FormikProps<IUserLogin>) => (
                    <Form className="pBColor flex flex-col w-[500px] h-[100vh] rounded-tl-[50px] rounded-bl-[50px] justify-center items-center gap-10">
                        <h2 className="lColor text-[36px] font-semibold">INICIA SESIÓN</h2>
                        <div className="relative w-[300px]">
                            <Field className='input' type='email' name='email' placeholder='Correo electrónico' />
                            {touched.email && errors.email && (
                                <span className="inputError scrollY">
                                    <ErrorMessage name="email" />
                                </span>
                            )}
                        </div>
                        <div className="relative w-[300px]">
                            <Field className='input' type='password' name='password' placeholder='Contraseña' />
                            {touched.password && errors.password && (
                                <span className="inputError scrollY">
                                    <ErrorMessage name="password" />
                                </span>
                            )}
                        </div>
                        <button className="w-[280px] h-[50px] rounded-[10px] cBColor lColor text-[18px] transition-all hover:bg-[#6ca7ecad]" type="submit">INICIAR SESIÓN</button>
                        <p className="lColor text-[18px] font-light">
                            ¿No tenés una cuenta?
                            <Link className="cColor" href='/register'> Registrate acá</Link>
                        </p>
                    </Form>
                )
            }
        </Formik>

    );

};

export default LoginForm;